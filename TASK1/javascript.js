//Dördrəqəmli natural ədəd verilmişdir. Onun palindrom olmasını təyin edin. Natural ədəd soldan sağa və sağdan sola eyni oxunarsa, palundromdur. Məsələn, 2332 ədədi palindromdur. n ədədi palindromdursa "YES", əks halda "NO" çap edin. 

var num = 1221;
if(num>999 && num<10000){
    if((num/1000) == (num%10) && ((num/100)%10) == ((num/10)%10)){
        console.log("YES!")
    }
    else{
        console.log("NO!")
    }
}
else{
    console.log("NO!")
}