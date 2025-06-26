

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
    <a href="sms:777632660?body=${encodeURIComponent(smsText)}" class="sms-button">طلب الباقة</a>
  `;

  container.appendChild(card);
});


