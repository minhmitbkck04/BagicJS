console.log('Hello ae');
let a = 5; 
let b = '5';
let c = 5
console.log('compare a, b: ', 'a = ',a,'b = ',b,' result', a == b );
console.log('compare a, c: ', 'a = ',a,'c = ',c,' result', a == c );
//b là kiểu dữu liệu string 
console.log('compare a, b: ', 'a = ',a,'b = ',b,' result', a === b );
console.log('compare a, c: ', 'a = ',a,'c = ',c,' result', a === c );
//=> nên dùng 3 dấu bằng (luôn dùng 3 dấu bằng ===)
/* nếu dùng === thì nó sẽ so sánh từ kiểu dữ liệu
xong mới sang giá trị */
// === type, value ;  == value

// Empty,Null,undifined

// Empty
let d = ''
console.log('check value: ',d);

//undifined
let e;
console.log('check value: ',e);

//null
let l = null;
console.log('check value: ',l)