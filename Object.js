console.log(`Hello ae`);
// key : value
let a = {
    name : 'Minh', 
    address : 'Bắc Kạn',
    e : function() {
        console.log(`Hello ae`)
        return ''
    }
};
let d = 'name'
a[d] = `cu lua`; 
 let b = 'Minh';
console.log('type of a: ', typeof a , 'type of b: ' , typeof b)
console.log( "What is your name ? ",'My name is:', a['name']);
console.log(`i'm from: `,a['address']);
