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
    const colorArray = [
      "#FF8C00", "#f08080", "#006600", "#b22222",
      "#3300cc", "#0040ad", "#7b68ee", "#ba55d3"
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
        beforeElement.style.right = "0";
        beforeElement.style.fontSize = "1.2em";   // تنظیم اندازه نقطه
  
        item.append(beforeElement); // افزودن دایره به ابتدای آیتم
      });
  


      const additionalSelectors = [
        { selector: ".image-news > a", property: "backgroundColor" },
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

//   document.addEventListener("DOMContentLoaded", function () {
//     const colorArray = ["#FF8C00", "#f08080", "#006600", "#b22222", "#3300cc", "#0040ad", "#7b68ee", "#ba55d3"]; // لیست رنگ‌ها
//     const sliders = document.querySelectorAll(".carousel-item"); // همه اسلایدرها را انتخاب کن

//     sliders.forEach((slider, index) => {
//         let color = colorArray[index % colorArray.length]; // انتخاب رنگ برای هر اسلایدر
//         let items = slider.querySelectorAll(".section-title section ul li");

//         items.forEach((item) => {
//             item.style.position = "relative"; // برای پشتیبانی از before
//             item.style.paddingRight = "15px"; // فاصله مناسب از نقطه
//             item.style.listStyle = "none"; // حذف استایل پیش‌فرض لیست

//             let beforeElement = document.createElement("span"); // عنصر قبل از متن ایجاد کن
//             beforeElement.innerText = "•";
//             beforeElement.style.color = color;
//             beforeElement.style.position = "absolute";
//             beforeElement.style.right = "0";
//             beforeElement.style.fontSize = "1.2em"; // تنظیم اندازه

//             item.prepend(beforeElement); // نقطه رنگی را قبل از متن اضافه کن
//         });
//     });
// });

