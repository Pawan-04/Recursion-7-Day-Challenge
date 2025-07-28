let sumOfNaturalNumber = (n)=>{

    let naturalSum = (n)=>{
        if(n==1){
            return 1; // return to naturalsum(2)
        }

        let x = naturalSum(n-1); // returning value
        return x+n;  // returning value + current n;
    }

    return naturalSum(n);

}

let ans = sumOfNaturalNumber(5)
console.log(ans)