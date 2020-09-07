function findIndex(arr, a) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            check = true;
            index = i;
        }
    }
    return index;

}

let arr = [3, 5, 6, 8, 11];
let a = prompt('nhập a: ');

if (findIndex(arr, a) == -1) {
    alert('không tìm thấy ' + a + ' trong mảng');
} else {
    alert(a + ' nằm tại vị trí: ' + findIndex(arr, a));
}
