

const packages = [
  {
    title: "(15GB) 4G",
    price: "2,600",
    internet: "15GB",
    type: "4G"
    },
  {
    title: "(25GB) 4G",
    price: "4300",
    internet: "15GB",
    type: "4G",
  },
  {
    title: "(60GB) 4G",
    price: "8500",
    internet: "15GB",
    type: "4G",
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
