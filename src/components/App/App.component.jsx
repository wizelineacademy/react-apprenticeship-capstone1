import React, { useLayoutEffect } from 'react';
import AppRouter from '../../router/AppRouter.router';
import { random } from '../../utils/fns';

function App() {
  useLayoutEffect(() => {
    const { body } = document;
  
    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
      <AppRouter/>
  );
}

export default App;
