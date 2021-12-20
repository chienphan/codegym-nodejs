const number = 0;
let isPrimeNumber = true;
 
// Nếu number bé hơn 2 tức là không phải số nguyên tố
if (number < 2){
    isPrimeNumber = false;
}
else{
    // lặp từ 2 tới number-1
    for (let index = 2; index < number-1; index++)
    {
        if (number % index === 0){
            isPrimeNumber = false;
            break;
        }
    }
}

// Kiểm tra biến isPrimeNumber
if (isPrimeNumber === true){
    console.log(number + " là số nguyên tố");
}
else{
    console.log(number + " không phải là số nguyên tố");
}