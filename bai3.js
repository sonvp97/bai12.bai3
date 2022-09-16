let value = prompt('Nhập giá trị');
let numbers = [-3,5,1,3,2,10];
for(let i=0;i<numbers.length;i++) {
    if (value == numbers[i]) {
        alert("Value " + numbers[i] + "found at " + i);
        break;
    }else {
        alert('Số bạn nhập không thuộc mảng');
    }
}
