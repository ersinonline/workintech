function randomNumber() {
  const number = Math.floor(Math.random() * 1001); // 0-1000 arası rastgele sayı üret
  let mod;

  // Tek mi çift mi kontrol et
  if (number % 2 === 0) {
    mod = ' çift sayıdır';
  } else {
    mod = ' tek sayıdır';
  }

  // Mesaj oluştur
  const message = number + ' sayısı' + mod;
  return message;
}

// Fonksiyonu çalıştır ve sonucu ekrana yazdır
console.log(randomNumber());
