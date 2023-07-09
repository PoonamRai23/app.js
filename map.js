const array=['apple','orange','','mango','','lemon']
const arr=array.map((x)=>{
   if(x===''){
        return 'empty string'
    }
    return x;
})
 console.log(arr)
// const array=['apple','orange','','mango','','lemon']
// let count=0
// const arr=array.map((x)=>{
//     if(count===3){
//         x.push("empty string")
//     }
//     if(count===5){
//         x.push("empty string")
//     }
//     return x;
// })
// console.log(arr)