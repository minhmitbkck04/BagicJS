console.log('Hello ae');
//let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//filter,find
let arr = [
    {name : 'Minh', age : 16},
    {name : 'Huong', age : 12}, 
    {name : 'Bui', age : 14},
    {name : 'Nghiem', age : 16},
]


let filter = arr.filter((item, index) => {
     console.log('>>> Check item:',item,'index:',index);    
    return item && item.age === 16;

});
console.log(filter)


