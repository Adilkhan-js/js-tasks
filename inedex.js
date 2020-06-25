////// 1111111111111111111111111111111111111
// var num = 1;
// for(num=1;  num <= 100; num++){
//     if(num%3 == 0){
      
//         console.log( "fizz")
//     }
//     if(num%5 == 0){
//         console.log("buzz")
//     }
//     if((num % 3) == 0 && (num % 5) == 0 ){
//         console.log( "FizzBuzz" );
//     }
//     else{
//         console.log(num);
//     }
// }
///////22222222222222222222222222222222

// for(var i=1; i<=15; i++){
//     console.log("#".repeat(i))
// }
///////33333333333333333333333333333333333

function createChess(a, b){
    var value1 = "# ";
    var value2 = " #";
    var odd = "";
    var even = "";
    for(var i = 0; i < a / 2; i += 1){
        odd += value2;
        even += value1; 
    }
    for (var j = 0; j < b; j += 1) {
        if (j % 2 != 0){
            console.log(odd);
        }else{
            console.log(even);
        }
    }
}
createChess(10, 10)










