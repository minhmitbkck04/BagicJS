console.log("Hello ae");
let obj = {
    name : 'Minh',
    address : 'Bắc Kạn',
    age : 16
};
console.log('Check data object: ',obj)
console.log('My name is: ',obj['name'])
// array = [item 1, item 2, item n]
let b = [
    'Mu','Chelsea','Toteham'
], c = {};
console.log('Type of b: ',typeof b,'Type of c: ',typeof c );
/* Do array bản chất nó là object
   cách thức quản lí dữ liệu khác*/
console.log('Type of b: ',typeof b,b)
// Phần tử đầu bắt đầu từ số 0
console.log('Đáy xã hội:',b[0],` Đội thứ 2:`,b[1]);
// object trong array
let Tổ_Minh = [
    {name : 'Minh',        đạo_đức :'tốt'},
    {name : 'Bùi',         đạo_đức :'như c'},
    {name : 'Linh Nghiêm', đạo_đức :'-1 ngku'},
    {name : 'Thu Hương',   đạo_đức :'tệ'}
]
console.log(Tổ_Minh[0]);
console.log('My Group:',Tổ_Minh)