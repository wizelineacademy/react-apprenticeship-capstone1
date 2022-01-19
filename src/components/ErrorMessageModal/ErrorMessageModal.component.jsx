import React from 'react';

import './ErrorMessageModal.styles.scss';
import { useErrorMessage } from '@providers/ErrorMessage';
import Button from '@components/Button';

function ErrorMessageModal(props) {
  let { errorMessage, closeErrorMessage } = useErrorMessage();

  return (
    <div
      data-testid={props['data-testid']}
      className={'error-message-modal ' + props.className}
    >
      <h5>{errorMessage}</h5>
      <div className="error-message-modal__buttons-row ">
        <Button text="Ok" onClick={() => closeErrorMessage()} />
      </div>
    </div>
  );
}

ErrorMessageModal.defaultProps = {
  'data-testid': '',
  className: '',
};

export default ErrorMessageModal;
