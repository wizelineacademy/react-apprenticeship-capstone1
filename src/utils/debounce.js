function debounce(func) {
  let timer = 0;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = 0;
      }, 500);
      return func.apply(this, args);
    }
  };
}

export default debounce;
