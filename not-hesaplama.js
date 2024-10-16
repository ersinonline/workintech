function calFinalNote(vize1, vize2, final) {
  // İki vize notunun ortalaması alınıyor
  let vizeOrtalama = (vize1 + vize2) / 2;
  
  // Geçme notu hesaplanıyor (%30 vize ortalaması + %70 final)
  let gecmenotu = vizeOrtalama * 0.3 + final * 0.7;
  
  // Geçme notu döndürülüyor
  return gecmenotu;
}

let finalNote = calFinalNote(80, 90, 70);
console.log(finalNote); // Sonucu konsola yazdır
