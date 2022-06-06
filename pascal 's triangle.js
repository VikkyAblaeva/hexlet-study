//pascal 's triangle
// Определяем функцию для вычисления факториала
const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  
  const generate = (n) => {
    const numbersCount = n + 1;
    const line = [];
    for (let i = 0; i < numbersCount; i += 1) {
      // Для вычисления числа заданной строки используем формулу
      // расчёта биноминальных коэффициентов  С(n, k) = n! / (k! * (n - k)!)
      line[i] = factorial(n) / (factorial(i) * factorial(n - i));
    }
    return line;
  };
  
  