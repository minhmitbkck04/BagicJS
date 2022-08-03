console.log('Hello ae');
//Function
let sum = (a, b) => {
    return a + b;    
}
console.log('Check sum:',sum(9, 6))
let obj = {
    Name : 'Minh',
    address : 'To 8',
   //Method
    Getname : function () {
        return this.Name;
    }
}
console.log('>>> Getname:',obj.Getname())