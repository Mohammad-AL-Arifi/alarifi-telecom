

const packages = [
  {
  //   title: "مزايا الأسبوعية (3G)",
  //   price: "400 ريال",
  //   internet: "90MB - 3G",
  //   type: "3G",
  //   calls: "100",
  //   sms: "30",
  //   duration: "7 أيام"
  // },
  // {
  //   title: "نت فورجي 4GB",
  //   price: "2,000 ريال",
  //   internet: "4GB - 4G",
  //   type: "4G",
  //   duration: "30 يوم"
  // },
  // {
  //   title: "نت فورجي 8GB",
  //   price: "3,900 ريال",
  //   internet: "8GB - 4G",
  //   type: "4G",

  //   duration: "30 يوم"
  // }
];

const container = document.querySelector(".packages-grid");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";

  const smsText = `طلب باقة ${pkg.title} - ${pkg.price}`;

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
