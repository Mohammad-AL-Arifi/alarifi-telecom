

const packages = [
  {
    title: "مزايا الأسبوعية (3G)",
    price: "400 ريال",
    internet: "90MB - 3G",
    type: "3G",
    calls: "100",
    sms: "30",
    duration: "7 أيام"
  },
  {
    title: "نت فورجي 4GB",
    price: "2,000 ريال",
    internet: "4GB - 4G",
    type: "4G",
    duration: "30 يوم"
  },
  {
    title: "نت فورجي 8GB",
    price: "3,900 ريال",
    internet: "8GB - 4G",
    type: "4G",

    duration: "30 يوم"
  },
  {
    title: "نت فورجي 20GB",
    price: "9,700 ريال",
    internet: "20GB - 4G",
    type: "4G",
    duration: "30 يوم"
  },
  {
    title: "مزايا 24 ساعة",
    price: "300 ريال",
    internet: "512MB - 4G",
    type: "4G",
    calls: "20",
    sms: "40",
    duration: "24 ساعة"
  },
  {
    title: "مزايا 48 ساعة",
    price: "600 ريال",
    internet: "1GB - 4G",
    type: "4G",
    calls: "50",
    sms: "100",
    duration: "48 ساعة"
  },
  {
    title: "مزايا الأسبوعية (4G)",
    price: "1,500 ريال",
    internet: "2GB - 4G",
    // type: "4G",
    calls: "200",
    sms: "300",
    duration: "7 أيام"
  },
  {
    title: "مزايا الشهرية",
    price: "2,500 ريال",
    internet: "4GB - 4G",
    type: "4G",
    calls: "300",
    sms: "350",
    duration: "30 يوم"
  },
  {
    title: "مزايا ماكس",
    price: "4,000 ريال",
    internet: "4GB - 4G",
    type: "4G",
    calls: "1100",
    sms: "600",
    duration: "30 يوم"
  }
];

const container = document.querySelector(".packages-grid");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";

  card.innerHTML = `
    <div class="badge">جديد</div>
    ${pkg.type? `<div class="network"> ${pkg.type} </div>` : ""}
    <div class="package-title">${pkg.title}</div>
    <div class="package-price">${pkg.price}</div>
    ${pkg.calls ? `<div class="package-detail"><span>📞</span> ${pkg.calls} دقيقة داخل الشبكة</div>` : ""}
    ${pkg.internet ? `<div class="package-detail"><span>🌐</span> ${pkg.internet}</div>` : ""}
    ${pkg.sms ? `<div class="package-detail"><span>✉️</span><span>${pkg.sms} رسالة لكل الشبكات</span></div>` : ""}

    ${pkg.duration ? `<div class="package-detail"><span>⏰</span> ${pkg.duration}</div>` : ""}
  `;

  container.appendChild(card);
});





















//////////////////////      test                /////////////////


// const packages = [
//   {
//     title: "مزايا فورجي 24 ساعة",
//     price: "YER 300.00",
//     internet: "20",
//     calls: "20 ضمن الشبكة",
//     duration: "24 ساعة"
//   },
//   {
//     title: "مزايا فورجي 48 ساعة",
//     price: "YER 600.00",
//     internet: "",
//     calls: "50 ضمن الشبكة",
//     duration: "48 ساعة"
//   },
//   {
//     title: "مزايا فورجي الأسبوعية",
//     price: "YER 1,500.00",
//     internet: "",
//     calls: "200 ضمن الشبكة",
//     duration: "7 أيام"
//   },
//   {
//     title: "مزايا فورجي الشهرية",
//     price: "YER 2,500.00",
//     internet: "",
//     calls: "300 دقيقة",
//     duration: "30 يوم"
//   },
//   {
//     title: "مزايا ماكس فورجي الشهرية",
//     price: "YER 4,000.00",
//     internet: "",
//     calls: "1100 دقيقة",
//     duration: "30 يوم"
//   },
//   {
//     title: "مزايا أعمال فورجي الشهرية 6 جيجا",
//     price: "YER 5,000.00",
//     internet: "",
//     calls: "1500 ضمن الشبكة",
//     duration: "30 يوم"
//   }
// ];

// const container = document.querySelector(".packages-grid");

// packages.forEach(pkg => {
//   const card = document.createElement("div");
//   card.className = "package-card";

//   card.innerHTML = `
//     <div class="badge">جديد</div>
//     <div class="network">4G</div>
//     <div class="package-title">${pkg.title}</div>
//     <div class="package-price">${pkg.price}</div>
//     ${pkg.calls ? `<div class="package-detail"><span>📞</span> ${pkg.calls}</div>` : ""}
//     ${pkg.internet ? `<div class="package-detail"><span>🌐</span> ${pkg.internet}</div>` : ""}
//     ${pkg.duration ? `<div class="package-detail"><span>⏰</span> ${pkg.duration}</div>` : ""}
//   `;

//   container.appendChild(card);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const packages = [
//   {
//     title: "مزايا الأسبوعية (3G)",
//     price: "400 ريال",
//     internet: "90MB - 3G",
//     calls: "100 دقيقة داخل الشبكة",
//     sms: "30",
//     duration: "7 أيام"
//   },
//   {
//     title: "نت فورجي 4GB",
//     price: "2,000 ريال",
//     internet: "4GB - 4G",
//     duration: "30 يوم"
//   },
//   {
//     title: "نت فورجي 8GB",
//     price: "3,900 ريال",
//     internet: "8GB - 4G",
//     duration: "30 يوم"
//   },
//   {
//     title: "نت فورجي 20GB",
//     price: "9,700 ريال",
//     internet: "20GB - 4G",
//     duration: "30 يوم"
//   },
//   {
//     title: "مزايا 24 ساعة",
//     price: "300 ريال",
//     internet: "512MB - 4G",
//     calls: "20 دقيقة داخل الشبكة",
//     sms: "40 رسالة لكل الشبكات",
//     duration: "24 ساعة"
//   },
//   {
//     title: "مزايا 48 ساعة",
//     price: "600 ريال",
//     internet: "1GB - 4G",
//     calls: "50 دقيقة داخل الشبكة",
//     sms: "100 رسالة لكل الشبكات",
//     duration: "48 ساعة"
//   },
//   {
//     title: "مزايا الأسبوعية (4G)",
//     price: "1,500 ريال",
//     internet: "2GB - 4G",
//     calls: "200 دقيقة داخل الشبكة",
//     sms: "300 رسالة لكل الشبكات",
//     duration: "7 أيام"
//   },
//   {
//     title: "مزايا الشهرية",
//     price: "2,500 ريال",
//     internet: "4GB - 4G",
//     calls: "300 دقيقة داخل الشبكة",
//     sms: "350 رسالة لكل الشبكات",
//     duration: "30 يوم"
//   },
//   {
//     title: "مزايا ماكس",
//     price: "4,000 ريال",
//     internet: "4GB - 4G",
//     calls: "1100 دقيقة داخل الشبكة",
//     sms: "600 رسالة لكل الشبكات",
//     duration: "30 يوم"
//   }
// ];

// const container = document.querySelector(".packages-grid");

// packages.forEach(pkg => {
//   const card = document.createElement("div");
//   card.className = "package-card";

//   card.innerHTML = `
//     <div class="package-title">${pkg.title}</div>
//     <div class="package-price">${pkg.price}</div>
//     ${pkg.internet ? `<div class="package-detail"><span>🌐</span><span>${pkg.internet}</span></div>` : ""}
//     ${pkg.calls ? `<div class="package-detail"><span>📞</span><span>${pkg.calls}</span></div>` : ""}
//     ${pkg.sms ? `<div class="package-detail"><span>✉️</span><span>${pkg.sms}</span></div>` : ""}
//     ${pkg.duration ? `<div class="package-detail"><span>⏳</span><span>${pkg.duration}</span></div>` : ""}
//   `;

//   container.appendChild(card);
// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////var 




// const packages = [ { title: "مزايا الأسبوعية (3G)", price: "400 ريال", internet: "90MB - 3G", calls: "100 دقيقة داخل الشبكة", sms: "30 رسالة لكل الشبكات", duration: "7 أيام" }, { title: "نت فورجي 4GB", price: "2,000 ريال", internet: "4GB - 4G", duration: "30 يوم" }, { title: "نت فورجي 8GB", price: "3,900 ريال", internet: "8GB - 4G", duration: "30 يوم" }, { title: "نت فورجي 20GB", price: "9,700 ريال", internet: "20GB - 4G", duration: "30 يوم" }, { title: "مزايا 24 ساعة", price: "300 ريال", internet: "512MB - 4G", calls: "20 دقيقة داخل الشبكة", sms: "40 رسالة لكل الشبكات", duration: "24 ساعة" }, { title: "مزايا 48 ساعة", price: "600 ريال", internet: "1GB - 4G", calls: "50 دقيقة داخل الشبكة", sms: "100 رسالة لكل الشبكات", duration: "48 ساعة" }, { title: "مزايا الأسبوعية (4G)", price: "1,500 ريال", internet: "2GB - 4G", calls: "200 دقيقة داخل الشبكة", sms: "300 رسالة لكل الشبكات", duration: "7 أيام" }, { title: "مزايا الشهرية", price: "2,500 ريال", internet: "4GB - 4G", calls: "300 دقيقة داخل الشبكة", sms: "350 رسالة لكل الشبكات", duration: "30 يوم" }, { title: "مزايا ماكس", price: "4,000 ريال", internet: "4GB - 4G", calls: "1100 دقيقة داخل الشبكة", sms: "600 رسالة لكل الشبكات", duration: "30 يوم" } ];

// const container = document.querySelector(".packages-grid");

// packages.forEach(pkg => { const card = document.createElement("div"); card.className = "package-card";

// card.innerHTML = <div class="package-title">${pkg.title}</div> <div class="package-price">${pkg.price}</div> ${pkg.internet ?<div class="package-detail"><span>🌐</span><span>${pkg.internet}</span></div>: ""} ${pkg.calls ?<div class="package-detail"><span>📞</span><span>${pkg.calls}</span></div>: ""} ${pkg.sms ?<div class="package-detail"><span>✉️</span><span>${pkg.sms}</span></div>: ""} ${pkg.duration ?<div class="package-detail"><span>⏳</span><span>${pkg.duration}</span></div>: ""};

// container.appendChild(card); });

