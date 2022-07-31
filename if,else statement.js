console.log('hello ae');
let arr = ['Mu','Chelsea','Man city','liverpool']
let i = 0;
while(i < arr.length){
   i++;
   if(arr[i] === 'liverpool'){
      console.log('Found it: ',arr[i]);
      continue;
   }
   console.log('Check i: ',i)
}