function start(){
    let first = 0;
    let second = 1;
    let index = 2;

    function fib(first,second,index){
        if(index === 6){
            return first+second;
        }

        let temp = fib(second,first+second,index+1)
        return temp;
        }

    let ans = fib(first,first+second,index);

    console.log(ans);

}
start()