//Create an Array
let myArray = [1, 3, 5, 7, 9];

//Read whole array
console.log(myArray);

//Read an element
console.log(myArray[1]);

//Read the length of the array
console.log(myArray.length);

//Update
console.log('update array');
myArray[0] = 2
myArray[1] = 4
myArray[2] = 6
myArray[3] = 8
myArray[4] = 10
console.log(myArray);

//Delete
//Xóa phần tử cuối
console.log('delete last element');
myArray.pop();
console.log(myArray);

//Xóa phần tử đầu
console.log('delete first element');
myArray.shift();
console.log(myArray);

//Xóa phần tử giữa mảng
console.log('xóa phần tử ở giữa bằng slice');
myArray.splice(1, 1);
console.log(myArray);

//Add
//Add vào cuối
console.log('add last element');
myArray.push(12);
myArray.push(14);
console.log(myArray);

// ADD vào đầu
console.log('add first element');
myArray.unshift(100)
console.log(myArray);

//in ra từng phần tử
console.log ('in ra từng phần tử')
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

//với số index lẻ, thêm 1 đơn vị
console.log('thêm 1 đơn vị với số index lẻ');
for (let i = 0; i < myArray.length; i++){
    if (i % 2 == 1) {
        console.log(myArray[i]+1);
    }
        
}

//if, else if, else
let yourAge = Number(prompt('Điền số tuổi của bạn'));
if (yourAge < 10) {
    alert('Bạn là trẻ trâu');
} else if (yourAge < 18) {
    alert('Bạn lớn hơn trẻ con 1 tí')
} else {
    alert('Bạn là người lớn');
}