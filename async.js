 function a(time) {
 return new Promise(resolve => setTimeout(resolve, time));
}
async function print() {
 console.log('a');
 console.log('b');
 await a(3000);
 console.log('c');
 await a(0);
 console.log('d');
 console.log('e');
}
print();