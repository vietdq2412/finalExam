function solve(a, b) {
    if (a === 0) {
        return 'phương trình vô nghiệm';
    } else {
        x = -b / a;
        return x;
    }
}

let a = prompt("nhập a: ");
let b = prompt('nhập b: ');
alert(solve(a, b));