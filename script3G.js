

const packages = [
  {
    title: "مزايا الأسبوعية (3G)",
    price: "500",
    internet: "90MB",
    type: "3G",
    calls: "100",
    sms: "30",
    duration: "7"
  },
  {
    title: "مزايا الشهرية (3G)",
    price: "1,350",
    internet: "250MB",
    type: "3G",
    calls: "350",
    sms: "150",
    duration: "30"
  },
  {
    title: "مزايا ماكس (3G)",
    price: "2,100",
    internet: "600MB",
    type: "3G",
    calls: "500",
    sms: "200",
    duration: "30"
  },
  {
    title: "انترنت 150 ميجا (3G)",
    price: "600",
    internet: "150MB",
    type: "3G",
    duration: "30"
  },
  {
    title: "انترنت 300 ميجا (3G)",
    price: "1000",
    internet: "300MB",
    type: "3G",
    duration: "30"
  },
  {
    title: "انترنت 450 ميجا (3G)",
    price: "1400",
    internet: "450MB",
    type: "3G",
    duration: "30"
  },
  {
    title: "نت 1 جيجا بصلاحية 10 أيام (3G)",
    price: "1500",
    internet: "1GB",
    type: "3G",
    duration: "10"
  },
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