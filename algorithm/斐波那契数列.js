//  1、1、2、3、5、8、13
let count = 0;
function Fibonacci(n){
    if(n<2)return 1;
    return Fibonacci(n-1)+Fibonacci(n-2)
}

function Fibonacci2(n){
    let pre=1;
    let preSecond=1;
    while(n>=2){
        const oldPre = pre
        pre +=preSecond 
        preSecond = oldPre
        n--;
    }
    return pre
}
console.log(Fibonacci2(40))
console.log(Fibonacci(40))
