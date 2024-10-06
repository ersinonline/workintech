let vize = 50; //örnek vize puanı
let final = 100; //örnek final puanı


let donemNotu = vize * 0.3 + final * 0.7;


if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
  
} else if (donemNotu >= 80 && donemNotu <= 89) {
  harfNotu = 'B';
  
} else if (donemNotu >= 70 && donemNotu <= 79) {
  harfNotu = 'C';
  
} else if (donemNotu >= 60 && donemNotu <= 69) {
  harfNotu = 'D';
  
} else if (donemNotu >= 50 && donemNotu <= 59) {
  harfNotu = 'E';
  
} else {
  harfNotu = 'F'; }


console.log('Dönem sonu notu: ' + donemNotu);
console.log('Harf notu: ' + harfNotu);
