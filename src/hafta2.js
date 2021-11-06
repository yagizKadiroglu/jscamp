
//ASAL SAYI BULMA
function findPrime(...numbers) {
        
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]<2){
            console.log(numbers[i]+" Geçersiz Sayı")
        }
        else{
            let kontrol = false
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i]%j==0) {
                    kontrol = true
                }
            }
            if (kontrol) {
                console.log(numbers[i]+" sayısı asal değildir.")
            } 
            else {
                console.log(numbers[i]+" sayısı asaldır.")
            }
            }
    }
}

findPrime(2,0,1,10)


//ARKADAŞ SAYI BULMA
function findNumberOfFriends(number,number2){
    let toplam=0,toplam2=0
    for (let i = 0; i < number; i++) {
        if (number%i==0) {
            toplam=toplam+i
        }       
    }

    for (let j = 0; j < number2; j++) {
        if (number2%j==0) {
            toplam2=toplam2+j
        }       
    }
    if (number == toplam2 && number2 == toplam) {
        console.log("Girilen sayılar arkadaş sayıdır.")
    } else {
        console.log("Girilen sayılar arkadaş sayı değildir")
    }
}
findNumberOfFriends(1184,1210)

//MÜKEMMEL SAYI BULMA

function findPerfectNumber(){
    for (let i = 1; i < 1000; i++) {
        let sayac = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                sayac = sayac + j;
              }           
        } 
        if (sayac == j) {
            console.log("Mükemmel sayı: "+ j);
        }      
    }
}
findPerfectNumber()

//ASAL SAYI
function findPrime2(){
    for (let i = 2; i < 1000; i++) {
        let kontrol=true
        for (let j = 2; j < i; j++) {
            if (i%j==0) {
                kontrol=false
            }
           
        }
        if (kontrol) {
            console.log(i)
        }
        kontrol=true         
    }
}
findPrime2()

