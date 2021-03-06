//sequenceSum.js
//Допишите (с использованием рекурсивного процесса) функцию sequenceSum(), которая находит сумму последовательности целых чисел. 
//Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
//Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin > end) {
      return NaN;
    }
    if (begin === end) {
      return begin;
    }
    return begin + sequenceSum(begin + 1, end);
    // END
  };
  
  export default sequenceSum;
