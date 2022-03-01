const arr = [1,6,6,6,6,6,6,6,6,12]
//找到内容为9的索引

function dichotomy(arr,num){
   let left = 0;
   let right = arr.length;
   while(left<right){
       const mid = Math.floor((left+right)/2)
       if(arr[mid]<num){
           left = mid+1
       }else{
           right = mid
       }
   }
   return right
}

console.log(dichotomy(arr,6))