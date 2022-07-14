const rotateLeft = (matrix) => {
    let resultMatrix = [];
    const rowsCount = matrix.length;
    const collsCount = matrix[0].length;
    for (let rowIndex = 0; rowIndex < collsCount; rowIndex += 1) {
      resultMatrix[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < rowsCount; columnIndex += 1) {
        resultMatrix[rowIndex][columnIndex] = matrix[columnIndex][collsCount - 1 - rowIndex];
      }
    }
    return resultMatrix;
  };
  
  const rotateRight = (matrix) => {
    let resultMatrix = [];
    const rowsCount = matrix.length; // 2
    const collsCount = matrix[0].length; // 3
    for (let rowIndex = 0; rowIndex < collsCount; rowIndex += 1) {
      resultMatrix[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < rowsCount; columnIndex += 1) {
        console.log('rowsCount ', rowsCount);
        console.log('columnIndex', columnIndex);
        //console.log(matrix[rowsCount][columnIndex]);
        
        resultMatrix[rowIndex][columnIndex] = matrix[rowsCount - 1 - columnIndex][rowIndex];
        
      }
    }
    console.log(matrix);
    console.log(resultMatrix);
    return resultMatrix;
    
  };
  
  export { rotateLeft, rotateRight };
  