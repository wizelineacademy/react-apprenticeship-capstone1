function Storage(key) {
  this.key = key;

  this.get = () => {
    try {
      return JSON.parse(window.localStorage.getItem(this.key));
    } catch (error) {
      console.error(`Error parsing storage item "${this.key}".`);
      return null;
    }
  };

  this.set = (value) => window.localStorage.setItem(key, JSON.stringify(value));
}

export { Storage };
