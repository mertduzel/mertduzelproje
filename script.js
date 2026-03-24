function toplama() {
  const a = Number(document.getElementById("top1").value) || 0;
  const b = Number(document.getElementById("top2").value) || 0;
  document.getElementById("sonucToplama").innerText = "Toplam: " + (a + b);
}

function cikarma() {
  const a = Number(document.getElementById("cik1").value) || 0;
  const b = Number(document.getElementById("cik2").value) || 0;
  document.getElementById("sonucCikarma").innerText = "Fark: " + (a - b);
}

function carpma() {
  const a = Number(document.getElementById("carp1").value) || 0;
  const b = Number(document.getElementById("carp2").value) || 0;
  document.getElementById("sonucCarpma").innerText = "Çarpım: " + (a * b);
}

function bolme() {
  const a = Number(document.getElementById("bol1").value) || 0;
  const b = Number(document.getElementById("bol2").value) || 0;
  document.getElementById("sonucBolme").innerText =
    b === 0 ? "Hata: 0'a bölünemez!" : "Bölüm: " + (a / b).toFixed(2);
}

function yuzde() {
  const a = Number(document.getElementById("yuzde1").value) || 0;
  const b = Number(document.getElementById("yuzde2").value) || 0;
  document.getElementById("sonucYuzde").innerText = "Sonuç: " + ((a * b) / 100).toFixed(2);
}

function kare() {
  const a = Number(document.getElementById("kare1").value) || 0;
  document.getElementById("sonucKare").innerText = "Karesi: " + (a * a);
}

function karekok() {
  const a = Number(document.getElementById("kok1").value) || 0;
  document.getElementById("sonucKok").innerText =
    a < 0 ? "Hata: Negatif sayı olamaz!" : "Karekök: " + Math.sqrt(a).toFixed(2);
}

function us() {
  const a = Number(document.getElementById("us1").value) || 0;
  const b = Number(document.getElementById("us2").value) || 0;
  document.getElementById("sonucUs").innerText = "Sonuç: " + (a ** b);
}

function faktoriyel() {
  const n = Number(document.getElementById("fak1").value);

  if (n < 0) {
    document.getElementById("sonucFak").innerText = "Negatif sayı olamaz!";
    return;
  }

  if (!Number.isInteger(n)) {
    document.getElementById("sonucFak").innerText = "Tam sayı giriniz!";
    return;
  }

  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }

  document.getElementById("sonucFak").innerText = "Faktöriyel: " + f;
}

function ortalama() {
  const a = Number(document.getElementById("ort1").value) || 0;
  const b = Number(document.getElementById("ort2").value) || 0;
  const c = Number(document.getElementById("ort3").value) || 0;
  document.getElementById("sonucOrt").innerText = "Ortalama: " + ((a + b + c) / 3).toFixed(2);
}

function alanDikdortgen() {
  const en = Number(document.getElementById("adEn").value) || 0;
  const boy = Number(document.getElementById("adBoy").value) || 0;
  document.getElementById("sonucAD").innerText = "Alan: " + (en * boy).toFixed(2);
}

function alanUcgen() {
  const taban = Number(document.getElementById("auTaban").value) || 0;
  const yuk = Number(document.getElementById("auYuk").value) || 0;
  document.getElementById("sonucAU").innerText = "Alan: " + ((taban * yuk) / 2).toFixed(2);
}

function alanDaire() {
  const r = Number(document.getElementById("adR").value) || 0;
  document.getElementById("sonucADaire").innerText = "Alan: " + (Math.PI * r * r).toFixed(2);
}

function hacimKup() {
  const k = Number(document.getElementById("hkKenar").value) || 0;
  document.getElementById("sonucHK").innerText = "Hacim: " + (k ** 3).toFixed(2);
}

function hacimDikdortgen() {
  const en = Number(document.getElementById("hdEn").value) || 0;
  const boy = Number(document.getElementById("hdBoy").value) || 0;
  const yuk = Number(document.getElementById("hdYuk").value) || 0;
  document.getElementById("sonucHD").innerText = "Hacim: " + (en * boy * yuk).toFixed(2);
}

function hacimSilindir() {
  const r = Number(document.getElementById("hsR").value) || 0;
  const h = Number(document.getElementById("hsH").value) || 0;
  document.getElementById("sonucHS").innerText = "Hacim: " + (Math.PI * r * r * h).toFixed(2);
}

function bmi() {
  const kilo = Number(document.getElementById("bmiKilo").value) || 0;
  const boy = Number(document.getElementById("bmiBoy").value) || 0;

  if (boy <= 0) {
    document.getElementById("sonucBMI").innerText = "Hata: Boy 0'dan büyük olmalı!";
    return;
  }

  document.getElementById("sonucBMI").innerText = "BMI: " + (kilo / (boy * boy)).toFixed(2);
}

function yas() {
  const dogum = Number(document.getElementById("yasDogum").value) || 0;
  const yil = new Date().getFullYear();

  if (dogum <= 0 || dogum > yil) {
    document.getElementById("sonucYas").innerText = "Geçerli bir doğum yılı giriniz!";
    return;
  }

  document.getElementById("sonucYas").innerText = "Yaş: " + (yil - dogum);
}

function basitFaiz() {
  const p = Number(document.getElementById("bfP").value) || 0;
  const r = Number(document.getElementById("bfR").value) || 0;
  const t = Number(document.getElementById("bfT").value) || 0;

  const faiz = (p * r * t / 100).toFixed(2);
  const toplam = (p + Number(faiz)).toFixed(2);

  document.getElementById("sonucBF").innerText =
    "Faiz: " + faiz + " | Toplam Tutar: " + toplam;
}

function hiz() {
  const yol = Number(document.getElementById("hzYol").value) || 0;
  const zaman = Number(document.getElementById("hzZaman").value) || 0;

  if (zaman === 0) {
    document.getElementById("sonucHZ").innerText = "Hata: Zaman 0 olamaz!";
    return;
  }

  document.getElementById("sonucHZ").innerText = "Hız: " + (yol / zaman).toFixed(2) + " km/s";
}