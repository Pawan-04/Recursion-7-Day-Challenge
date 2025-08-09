let namee = 'pawan'
let reverse = (namee,len,str) =>{

    if(len === 0){
    return str;
    }

    str = str+namee[--len];
    let ans = reverse(namee,len,str)
    return ans;

}
let len = namee.length;
let str =''
let x = reverse(namee,len,str);
console.log(x)