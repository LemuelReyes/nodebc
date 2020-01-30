const f0=0;
let f1=-1;
let f2=1;
var i=1;
while (i<=100000){
    f = f1 +f2;
    f1=f2;
    f2 =f;
    i ++;
    console.log(f)
}