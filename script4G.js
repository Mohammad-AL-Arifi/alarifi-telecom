

const packages = [

  {
    title: "نت فورجي 4GB",
    price: "2,200",
    internet: "4GB",
    type: "4G",
    duration: "30"
  },
  {
    title: "نت فورجي 8GB",
    price: "4,100",
    internet: "8GB",
    type: "4G",
    duration: "30"
  },
  {
    title: "مزايا 24 ساعة (4G)",
    price: "350",
    internet: "512MB",
    type: "4G",
    calls: "20",
    sms: "40",
    duration: "(24 ساعة) 1"
  },
  {
    title: "مزايا 48 ساعة (4G)",
    price: "700",
    internet: "1GB",
    type: "4G",
    calls: "50",
    sms: "100",
    duration: "(48 ساعة) 2"
  },
  {
    title: "مزايا الأسبوعية (4G)",
    price: "1,600",
    internet: "2GB",
    type: "4G",
    calls: "200",
    sms: "300",
    duration: "7"
  },
  {
    title: "مزايا الشهرية (4G)",
    price: "2,700",
    internet: "4GB",
    type: "4G",
    calls: "300",
    sms: "350",
    duration: "30"
  },
  {
    title: "مزايا ماكس (4G)",
    price: "4,300",
    internet: "4GB",
    type: "4G",
    calls: "1100",
    sms: "600",
    duration: "30"
  }
];


const container = document.querySelector(".packages-grid");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";

  const smsText = `طلب باقة ${pkg.title} - ${pkg.price} ﷼`;

  card.innerHTML = `
    <div class="badge">جديد</div>
    ${pkg.type? `<div class="network"> ${pkg.type} </div>` : ""}
    <div class="package-title">${pkg.title}</div>
    <div class="package-price">${pkg.price} ريال</div>
    ${pkg.calls ? `<div class="package-detail"><span>📞</span> ${pkg.calls} دقيقة داخل الشبكة</div>` : ""}
    ${pkg.internet ? `<div class="package-detail"><span>🌐</span> ${pkg.internet} انترنت</div>` : ""}
    ${pkg.sms ? `<div class="package-detail"><span>✉️</span><span>${pkg.sms} رسالة لكل الشبكات</span></div>` : ""}

    ${pkg.duration ? `<div class="package-detail"><span>⏰</span> ${pkg.duration} يوم</div>` : ""}
    

  <!-- طلب الباقة label and icon buttons with inline styles -->
  <div style="display: flex; align-items: center; gap: 12px; margin-top: 10px;">
    <span style="font-weight: bold; font-size: 16px; color: #333;">طلب الباقة:</span>

    <a href="sms:777632660?body=%D8%B7%D9%84%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20(25GB)%204G%20-%204300%20%D8%B1%D9%8A%D8%A7%D9%84" 
      title="إرسال SMS"
      style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
      <img src="https://cdn-icons-png.flaticon.com/512/234/234129.png" alt="SMS Icon" width="28" height="28">
    </a>

    <a href="https://wa.me/967777632660?text=%D8%B7%D9%84%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20(25GB)%204G%20-%204300%20%D8%B1%D9%8A%D8%A7%D9%84" 
      title="إرسال عبر واتساب" target="_blank"
      style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp Icon" width="28" height="28">
    </a>
  </div>




  `;

  container.appendChild(card);
});


