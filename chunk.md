Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка. Функция должна вернуть массив, состоящий из чанков указанной размерности.
**********
export default (arr,size) => {
const newarray = [];
for (let i = 0; i < arr.length; i+=size) {
newarray.push(arr.slice(i,i + size));
}
return newarray;
};


