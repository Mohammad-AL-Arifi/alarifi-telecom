

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
    ${pkg.type ? `<div class="network"> ${pkg.type} </div>` : ""}
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

```

<a href="sms:777632660?body=${encodeURIComponent(smsText)}" class="sms-button">طلب الباقة</a>


// <div class="package-card">
//   <div class="badge">جديد</div>
//   <div class="network">4G</div>
//   <div class="package-title">(25GB) 4G</div>
//   <div class="package-price">4300 ريال</div>

//   <div class="package-detail"><span>🌐</span> 15GB انترنت</div>

//   <!-- طلب الباقة label and icon buttons with inline styles -->
//   <div style="display: flex; align-items: center; gap: 12px; margin-top: 10px;">
//     <span style="font-weight: bold; font-size: 16px; color: #333;">طلب الباقة:</span>

//     <a href="sms:777632660?body=%D8%B7%D9%84%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20(25GB)%204G%20-%204300%20%D8%B1%D9%8A%D8%A7%D9%84" 
//       title="إرسال SMS"
//       style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
//       <img src="https://cdn-icons-png.flaticon.com/512/234/234129.png" alt="SMS Icon" width="28" height="28">
//     </a>

//     <a href="https://wa.me/967777632660?text=%D8%B7%D9%84%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20(25GB)%204G%20-%204300%20%D8%B1%D9%8A%D8%A7%D9%84" 
//       title="إرسال عبر واتساب" target="_blank"
//       style="display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: 50%; background: #f2f2f2;">
//       <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp Icon" width="28" height="28">
//     </a>
//   </div>
// </div>
```