factorial = (n)=>{

recursion = (n) =>{
    if(n==1){
        return 1;
    }

    let x = recursion(n-1)
    return x*n;
}

return recursion(n);


}




let ans = factorial(5);
console.log(ans)