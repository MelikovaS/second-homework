//Verilmiş ədəd 4 rəqəmli və 3ə və 7-yə bölünəndirsə true eks halda false çap etsin.

var num = 16317;

if(num>999 && num<10000){
    if(num%3==0 && num%7==0){
        console.log("True")
    }
    else{
        console.log("False")
    }
}
else{
    console.log("False")
}