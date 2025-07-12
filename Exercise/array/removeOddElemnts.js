function removeOddNums(nums) {
  let numsRes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      if (nums[i + 1] % 2 === 0) {
        numsRes.push(nums[i]);
      } else {
        i++;
      }
    } else {
      numsRes.push(nums[i]);
    }
  }
  return numsRes;
}

const arr = [2, 3, 3, 4, 5, 6, 7, 3, 1, 3, 4];
// [2,4,5,6,4]
console.log(removeOddNums(arr));







// function removeOddNums(nums){
//     let flag = false
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] % 2 === 1){
//             console.log(nums[i],'first')
//             if(nums[i+1] % 2 === 1){
//                 console.log(nums[i],'sec')
//                  nums.splice(i,2)
//             }
//           if(flag && nums[i] % 2 === 1){
//                  nums.splice(i,1)
//               } 
//             flag = true
//         }else{
//             console.log(nums[i],'even')
//             flag = false
//         }
//     }
//     return nums
// }

// const arr = [ 2,3,3,4,5,6,7,3,1,3,4]Ṭ

// {
//     id:"",
    
// }
// function blckPostReq(req,res,next){
//     if(req.method === "POST" && req.hostname === "domain"){
//         res.status.send({status:403, message :"not authorized"})
//     }
//     next()
// }

// app.use("/user",blockPostReq,(req,res)=>{
    
// })

// db.user.update({salary : {$gt : { }}})



console.log("Try programiz.pro");

