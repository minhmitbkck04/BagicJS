console.log('Hello ae');
let arr = [
    {name : 'Minh', age : 16},
    {name : 'Huong', age : 12}, 
    {name : 'Bui', age : 14},
    {name : 'Nghiem', age : 16},
]


/*let find = arr.find((item, index) => {
     console.log('>>> Check item:',item,'index:',index);    
    return item && item.age === 16;

});*/
let find = arr.find((item, index) => {
    console.log('>>> Check item:',item,'index:',index);    
   return item && item.age === 19;

});
console.log(find)