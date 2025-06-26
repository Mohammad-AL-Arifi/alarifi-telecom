

const packages = [
  {
    title: "2ميجا (24GB)",
    price: "2,700",
    internet: "24GB",
    type: "2MB",
    duration: "30"
  },
  {
    title: "2ميجا (50GB)",
    price: "5,000",
    internet: "50GB",
    type: "2MB",
    duration: "30"
  },
  {
    title: "4ميجا (66GB)",
    price: "7,100",
    internet: "50GB",
    type: "4MB",
    duration: "30"
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
    

  <!-- طلب الباقة label and icon buttons with inline styles -->
  <div style="display: flex; align-items: center; gap: 12px; margin-top: 10px;">
    <span style="font-weight: bold; font-size: 16px; color: #333;">طلب الباقة:</span>

    <a href="sms:777632660?body=${encodeURIComponent(smsText)}"
      title="إرسال SMS"
      style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
      <img src="https://cdn-icons-png.flaticon.com/512/234/234129.png" alt="SMS Icon" width="28" height="28">
    </a>

    <a href="https://wa.me/967713335962?text=${encodeURIComponent(smsText)}" 
      title="إرسال عبر واتساب" target="_blank"
      style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp Icon" width="28" height="28">
    </a>
  </div>




  `;

  container.appendChild(card);
});

