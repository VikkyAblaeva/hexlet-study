//Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу) и возвращает массив, изменённый таким образом, 
//что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. 
//Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.

const mirror = (coll) => {
    let result = [];
    for (let i = 0; i < coll.length / 2; i++) {
      result.push(coll[i]);
    }
    for (let i = coll.length / 2; i < coll.length; i++) {
      result.push(coll[coll.length - 1 - i]);
    }
    return result;
  }
  const getMirrorMatrix = (array) => {
    let finish = [];
    for (let j = 0; j < array.length; j++) {
      finish.push(mirror(array[j]));
    }
    return finish;
  }
  export default getMirrorMatrix
  