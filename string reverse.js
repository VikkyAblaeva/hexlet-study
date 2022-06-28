//string reverse
const reverse = (str) => {
<<<<<<< HEAD
    if (str.length === 0) {
      return str;
    }
  
    return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
  };
  
=======
  if (str.length === 0) {
    return str;
  }

  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};
>>>>>>> 168891dc3635a70b9f46594a1830069c0775ae9d
