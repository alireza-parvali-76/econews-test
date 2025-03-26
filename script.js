//  این بخش مربوط به جابه جایی tab-menu  است که با کلیک بر روی دکمه ها انجام میشود.
let slider = document.querySelector('.tab-menu ul')
function scrollWin(x, y) {
    slider.scrollBy(x, y);
  }

  var swiper = new Swiper('.title-news-header .swiper-container', {
    direction: 'vertical',  // حرکت عمودی
    loop: true,             // تکرار بی‌نهایت اسلایدها
    autoplay: {
      delay: 5000,          // هر 5 ثانیه تغییر اسلاید
    },
    height : '24' ,
    speed: 600,             // سرعت انیمیشن (600 میلی‌ثانیه)
    mousewheel: false       // غیرفعال کردن تغییر اسلاید با چرخ ماوس (اختیاری)
  });


  document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExample");
  
  // اگر هیچ اسلایدی active نیست، اولین اسلاید رو active کن
  if (!carouselElement.querySelector(".carousel-item.active")) {
    const firstSlide = carouselElement.querySelector(".carousel-item");
    if (firstSlide) firstSlide.classList.add("active");
  }
  
  // ایجاد نمونه کاروسل بوت‌استرپ با اسلاید خودکار هر 10 ثانیه
  const carouselInstance = new bootstrap.Carousel(carouselElement, { interval: 10000 });
  
  const lines = document.querySelectorAll(".lable ul li");
  
  const categoryColors = {
    eghtesad: "#ff660",     // توجه: اگر نیاز به 6 رقمی دارید، به "#ff6600" تغییر دهید.
    siasat: "#0033cc",
    farhang: "#0040ad",
    fanavari: "#7b68ee",
    jameeh: "#ba55d3",
    varzesh: "#ff8c00",
    salamat: "#f08080",
    ostan: "#006600",
  };

  // تابع به‌روز‌رسانی لاین فعال بر اساس اسلاید فعلی
  function updateActiveLine() {
    const activeSlide = carouselElement.querySelector(".carousel-item.active");
    if (!activeSlide) return;
    
    // استخراج دسته‌بندی از id اسلاید (به فرض اینکه id به صورت "carousel-<category>" است)
    const category = activeSlide.id.replace("carousel-", "").toLowerCase().trim();
    
    lines.forEach((li) => {
      li.classList.remove("active");
      const lineElem = li.querySelector(".line");
      const textElem = li.querySelector("span");
      
      // تنظیم رنگ پیش‌فرض (خاکستری) برای خط و متن
      if (lineElem) lineElem.style.backgroundColor = "#c5c5c5";
      if (textElem) textElem.style.color = "#c5c5c5";
      
      // اگر data-category آیتم با دسته استخراج شده مطابقت داشت
      if (li.dataset.category && li.dataset.category.toLowerCase().trim() === category) {
        li.classList.add("active");
        if (categoryColors[category]) {
          if (lineElem) lineElem.style.backgroundColor = categoryColors[category];
          if (textElem) textElem.style.color = categoryColors[category];
        }
      }
    });
  }

  // به‌روز‌رسانی لاین فعال هنگام تغییر اسلاید کاروسل
  carouselElement.addEventListener("slid.bs.carousel", updateActiveLine);
  updateActiveLine(); // اجرای اولیه هنگام بارگذاری صفحه

  // رویداد کلیک روی هر لاین: هدایت کاروسل به اسلاید مربوطه
  lines.forEach((li) => {
    li.addEventListener("click", function () {
      const category = li.dataset.category;
      if (!category) return;
      // یافتن اسلاید مربوطه براساس id (به صورت carousel-<category>)
      const targetSlide = carouselElement.querySelector(`.carousel-item[id="carousel-${category.toLowerCase().trim()}"]`);
      if (targetSlide) {
        const slides = Array.from(carouselElement.querySelectorAll(".carousel-item"));
        const slideIndex = slides.indexOf(targetSlide);
        carouselInstance.to(slideIndex);
      }
    });

    // رویداد هاور روی هر لاین: تغییر رنگ خط و متن به رنگ مخصوص آن دسته
    li.addEventListener("mouseenter", function () {
      const category = li.dataset.category.toLowerCase().trim();
      const lineElem = li.querySelector(".line");
      const textElem = li.querySelector("span");
      if (categoryColors[category]) {
        if (lineElem) lineElem.style.backgroundColor = categoryColors[category];
        if (textElem) textElem.style.color = categoryColors[category];
      }
    });
    li.addEventListener("mouseleave", function () {
      // اگر آیتم active نیست، برگرداندن به رنگ پیش‌فرض خاکستری
      if (!li.classList.contains("active")) {
        const lineElem = li.querySelector(".line");
        const textElem = li.querySelector("span");
        if (lineElem) lineElem.style.backgroundColor = "#c5c5c5";
        if (textElem) textElem.style.color = "#c5c5c5";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExample");

  // اگر هیچ اسلایدی active نیست، اولین اسلاید رو active کن
  if (!carouselElement.querySelector(".carousel-item.active")) {
    const firstSlide = carouselElement.querySelector(".carousel-item");
    if (firstSlide) firstSlide.classList.add("active");
  }

  // نمونه کاروسل بوت‌استرپ + تنظیم تایمر ۱۰ ثانیه‌ای
  const carouselInstance = new bootstrap.Carousel(carouselElement, { interval: 10000 });

  const lines = document.querySelectorAll(".lable ul li");

  const categoryColors = {
    eghtesad: "#b22222",
    siasat: "#0033cc",
    farhang: "#0040ad",
    fanavari: "#7b68ee",
    jameeh: "#ba55d3",
    varzesh: "#ff8c00",
    salamat: "#f08080",
    ostan: "#006600",
  };

  function updateActiveLine() {
    const activeSlide = carouselElement.querySelector(".carousel-item.active");
    if (!activeSlide) return;

    const category = activeSlide.id.replace("carousel-", "").toLowerCase().trim();

    lines.forEach((li) => {
      li.classList.remove("active");
      const lineElem = li.querySelector(".line");
      const textElem = li.querySelector("span");

      if (lineElem) lineElem.style.backgroundColor = "#c5c5c5";
      if (textElem) textElem.style.color = "#777";

      if (li.dataset.category && li.dataset.category.toLowerCase().trim() === category) {
        li.classList.add("active");
        if (categoryColors[category]) {
          if (lineElem) lineElem.style.backgroundColor = categoryColors[category];
          if (textElem) textElem.style.color = categoryColors[category];
        }
      }
    });
  }

  carouselElement.addEventListener("slid.bs.carousel", updateActiveLine);
  updateActiveLine();

  lines.forEach((li) => {
    li.addEventListener("click", function () {
      const category = li.dataset.category;
      if (!category) return;
      const targetSlide = carouselElement.querySelector(`.carousel-item[id="carousel-${category.toLowerCase().trim()}"]`);
      if (targetSlide) {
        const slides = Array.from(carouselElement.querySelectorAll(".carousel-item"));
        const slideIndex = slides.indexOf(targetSlide);
        carouselInstance.to(slideIndex);
      }
    });

    li.addEventListener("mouseenter", function () {
      const category = li.dataset.category.toLowerCase().trim();
      const lineElem = li.querySelector(".line");
      const textElem = li.querySelector("span");
      if (categoryColors[category]) {
        if (lineElem) lineElem.style.backgroundColor = categoryColors[category];
        if (textElem) textElem.style.color = categoryColors[category];
      }
      carouselInstance.pause(); // توقف موقت اسلاید خودکار هنگام هاور
    });

    li.addEventListener("mouseleave", function () {
      if (!li.classList.contains("active")) {
        const lineElem = li.querySelector(".line");
        const textElem = li.querySelector("span");
        if (lineElem) lineElem.style.backgroundColor = "#c5c5c5";
        if (textElem) textElem.style.color = "#777";
      }
      carouselInstance.cycle(); // ادامه اسلاید خودکار بعد از خروج از هاور
    });
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const colorArray = [
      "#b22222","#3300cc", "#0040ad", "#7b68ee",
       "#ba55d3","#FF8C00", "#f08080", "#006600"
    ]; // لیست رنگ‌ها

    
    
    const sliders = document.querySelectorAll(".carousel-item"); // انتخاب همه اسلایدهای کاروسل
  
    sliders.forEach((slider, index) => {
      // انتخاب رنگ برای هر اسلاید به صورت چرخه‌ای
      let color = colorArray[index % colorArray.length];
  
      // بخش اول: افزودن دایره رنگی به آیتم‌های لیست موجود در .section-title section ul li
      let items = slider.querySelectorAll(".section-title section ul li");
  
      items.forEach((item) => {
        item.style.position = "relative"; // پوزیشن نسبی برای پشتیبانی از المان‌های مطلق
        item.style.paddingRight = "15px";  // فاصله مناسب از سمت راست
        item.style.listStyle = "none";     // حذف استایل پیش‌فرض لیست
        item.style.color = "#000"
  
        let beforeElement = document.createElement("span"); // ایجاد یک المان <span> برای دایره رنگی
        beforeElement.innerText = "•";          // استفاده از کاراکتر نقطه
        beforeElement.style.color = color;        // تنظیم رنگ نقطه
        beforeElement.style.position = "absolute";  
        beforeElement.style.top = "-5px"
        beforeElement.style.right = "0";
        beforeElement.style.fontSize = "1.8rem";   // تنظیم اندازه نقطه
        beforeElement.style.fontWeight = "normal";
        beforeElement.style.marginLeft = "5px";

  
        item.append(beforeElement); // افزودن دایره به ابتدای آیتم
      });
  


      const additionalSelectors = [
        { selector: ".image-news a", property: "backgroundColor" },
        { selector: "#title", property: "color" },
        { selector: ".section-title > section > ul", property: "color" },
        { selector: ".slider-title",property: "color"}
      ];

      additionalSelectors.forEach((obj) => {
        let elements = slider.querySelectorAll(obj.selector);
        elements.forEach((el) => {
          el.style[obj.property] = color;
 
        });
      });
    });
  });
  


  function openPrice(evt, price) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(price).style.display = "block";
    evt.currentTarget.className += " active";
  } 



  function openMoney(evt, money) {
    // Declare all variables
    var i, tabcontents, tablink;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(money).style.display = "block";
    evt.currentTarget.className += " active";
  } 


// ابتدا، فقط زیرمنوی اول را نمایش می‌دهیم و به اولین آیتم کلاس active اضافه می‌کنیم
document.querySelectorAll('.hidden-gold-price-item').forEach((item, index) => {
  item.style.display = (index === 0) ? 'block' : 'none'; // نمایش فقط اولین زیرمنو
});

// انتخاب تمام آیتم‌های li
const menuItems = document.querySelectorAll('.hidden-gold-price-title ul li');

// اضافه کردن کلاس active به اولین آیتم به‌صورت پیش‌فرض
if (menuItems.length > 0) {
  menuItems[0].classList.add('active');
}

menuItems.forEach((item, index) => {
  item.addEventListener('click', function() {
    // حذف کلاس 'active' از همه آیتم‌ها
    menuItems.forEach((el) => el.classList.remove('active'));

    // اضافه کردن کلاس 'active' به آیتم کلیک‌شده
    this.classList.add('active');

    // همه زیرمنوها را مخفی کن
    document.querySelectorAll('.hidden-gold-price-item').forEach((subItem) => {
      subItem.style.display = 'none'; // مخفی کردن همه زیرمنوها
    });

    // فقط زیرمنوی مربوط به این آیتم را نشان بده
    const selectedSubItem = document.querySelectorAll('.hidden-gold-price-item')[index];
    if (selectedSubItem) {
      selectedSubItem.style.display = 'block'; // نمایش زیرمنوی مربوطه
    }
  });
});


document.querySelectorAll(".news-row").forEach((newsRow) => {
  let category = newsRow.dataset.category;  // گرفتن مقدار data-category
  let color = getCategoryColor(category);  // دریافت رنگ مرتبط

  // تنظیم رنگ به صورت متغیر CSS برای هر news-row
  newsRow.style.setProperty("--bullet-color", color);
});

// تابع برای مشخص کردن رنگ هر دسته خبری
function getCategoryColor(category) {
  const colors = {
   "financial": "#483d8b",
    "capital-market": "#228b22",
    "key-figures": "#7f05a1",
    "knowledge-based-economy": "#7b68ee",
    "economy-culture-art": "#0040ad",
    "sports-economics": "#ff8c00",
    "cars": "#daa520",
    "road": "#283803",
    "green-economy": "#006400",
    "tourist": "#008b8b",
    "life-style": "#c71585",
    "healthy-economy": "#f08080",
    "market-guide": "#ba5553",
    "multimedia": "#555555",
    "cities": "#555555",
    "needs": "#CC4129",
  };
  return colors[category] || "black"; // مقدار پیش‌فرض مشکی
}
