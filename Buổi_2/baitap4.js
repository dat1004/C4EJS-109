// Cho người dùng nhập 1 số
// In ra sô 0 đến số người dùng nhập mà chia hết cho 4
let userNumber = prompt ("Hãy nhập một số");
for (i = 0; i <= userNumber ; i++){
    if (i % 4 == 0)
        console.log (i);
}
