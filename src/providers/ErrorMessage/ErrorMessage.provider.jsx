import React, { useContext, useEffect, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';

import ErrorMessageModal from '@components/ErrorMessageModal';

const ErrorMessageContext = React.createContext();

const initialErrorMessage = {
  isModalOpen: false,
  errorMessage: '',
};

function Portal({ children }) {
  let elemDiv = document.createElement('div');
  document.body.appendChild(elemDiv);

  // On unmounting
  useEffect(() => () => {
    document.body.removeChild(elemDiv);
  });

  return ReactDOM.createPortal(children, elemDiv);
}

function ErrorMessageProvider({ children }) {
  let [modalState, dispatch] = useReducer((isModalOpen, action) => {
    switch (action.type) {
      case 'SHOW_ERROR_MESSAGE':
        return {
          isModalOpen: true,
          errorMessage: action.payload.errorMessage,
        };
      case 'CLOSE_ERROR_MESSAGE':
        return {
          isModalOpen: false,
          errorMessage: '',
        };
      default:
        return isModalOpen;
    }
  }, initialErrorMessage);

  const reducers = useRef({
    showErrorMessage: (errorMessage) =>
      dispatch({
        type: 'SHOW_ERROR_MESSAGE',
        payload: { errorMessage: errorMessage },
      }),
    closeErrorMessage: () =>
      dispatch({ type: 'CLOSE_ERROR_MESSAGE', payload: null }),
  });

  return (
    <ErrorMessageContext.Provider
      value={{ ...reducers.current, errorMessage: modalState.errorMessage }}
    >
      {children}
      {modalState.isModalOpen ? (
        <Portal>
          <ErrorMessageModal />
        </Portal>
      ) : null}
    </ErrorMessageContext.Provider>
  );
}

function useErrorMessage() {
  return useContext(ErrorMessageContext);
}

export { ErrorMessageProvider, useErrorMessage };
