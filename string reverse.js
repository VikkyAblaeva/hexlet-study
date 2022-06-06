//string reverse
const reverse = (str) => {
    if (str.length === 0) {
      return str;
    }
  
    return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
  };