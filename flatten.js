//Реализуйте и экспортируйте функцию flatten(). 
//Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.
//В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

export const flatten = (coll) => {
    let result = [];
    for (const item of coll) {
      if (Array.isArray(item)) {
        result = [...result, ...item];
      } else {
        result.push(item);
      }
    }
    return result;
  };

//Разворачиваем любой уровень вложенности:
const flatten = (arr) => {
    return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
  };
export default flatten;
  
//Через Spread:
const flatten = (list) => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);
