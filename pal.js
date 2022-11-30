let a="naman"

let str1="";
    for(let i=a.length-1;i>=0;i--){
        str1=str1+a[i];
    }
    if(a==str1){
        console.log("Yes")
    }else{
        console.log("No")
    }