let yas = 50; //örnek yaş bilgisi
let ucret = 450; //bilet fiyatı


// === eşittir; >= büyük eşittir; <= küçük eşittir


if (yas >= 65 && yas <= 100) {
  ucret = ucret * 0;
  console.log('Yaş grubunuza özel %100 indirimden faydalanabilirsiniz.');
  
} else if (yas >= 15 && yas < 25) {
  ucret = ucret * 0.5;
  console.log('Yaş grubunuza özel %50 indirimden faydalanabilirsiniz.');
  
} else if (yas >= 10 && yas < 15) {
  ucret = ucret * 0.2;
  console.log('Yaş grubunuza özel %80 indirimden faydalanabilirsiniz.');
  
} else if (yas >= 0 && yas < 10) {
  ucret = ucret * 0;
  console.log('Yaş grubunuza özel %100 indirimden faydalanabilirsiniz.');
  
} else {
  ucret = ucret;
  console.log('Yaş grubunuza özel bir bulunmamaktadır.');
}
