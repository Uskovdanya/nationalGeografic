//const jellyfish = document.getElementById("jellyfish");
//const jellyfishAfter = document.querySelector(".swiper-slide__after");

//const shark = document.querySelector(".shark");
//const sharkAfterBlur = document.querySelector(".shark__after-blur");

//const lizard = document.querySelector(".lizard");
//const lizardAfter = document.querySelector(".lizard__after");

//const title = document.querySelectorAll(".carousel__title");
//const time = document.querySelectorAll(".carousel__time");

//const carouselFill = document.querySelectorAll(".carousel__fill");
//const carouselFillActive = document.querySelector(".carousel__fill_active");

//function hideActiveClass() {
//  title.forEach((item) => {
//    item.classList.remove("carousel__title_active");
//  });
//  time.forEach((item) => {
//    item.classList.remove("carousel__time_active");
//  });
//}

//function hideFill() {
//  carouselFill.forEach((item) => {
//    item.classList.remove("carousel__fill_active");
//  });
//}

//function showActiveClass(i = 0) {
//  title[i].classList.add("carousel__title_active");
//  time[i].classList.add("carousel__time_active");
//  carouselFill[i].classList.add("carousel__fill_active");
//}

//function myPlugin({ swiper, extendParams, on }) {
//  extendParams({
//    debugger: true,
//  });

//  on("init", () => {
//    if (!swiper.params.debugger) return;

//    hideActiveClass();

//    showActiveClass();
//  });

//  on("slideChange", () => {
//    if (!swiper.params.debugger) return;
//    console.log(swiper.activeIndex);
//    hideActiveClass();

//    showActiveClass(swiper.activeIndex);

//    if (swiper.activeIndex === 0) {
//      jellyfish.style.animation = "none"; //this line of code
//      jellyfish.offsetWidth; /* trigger reflow */ //this line of code
//      jellyfish.style.animation = null;

//      jellyfishAfter.style.animation = "none"; //this line of code
//      jellyfishAfter.offsetWidth; /* trigger reflow */ //this line of code
//      jellyfishAfter.style.animation = null;
//    }
//    if (swiper.activeIndex === 1) {
//      shark.style.animation = "none"; //this line of code
//      shark.offsetWidth; /* trigger reflow */ //this line of code
//      shark.style.animation = null;

//      sharkAfterBlur.style.animation = "none"; //this line of code
//      sharkAfterBlur.offsetWidth; /* trigger reflow */ //this line of code
//      sharkAfterBlur.style.animation = null;

//      jellyfishAfter.style.animation = "none"; //this line of code
//      jellyfishAfter.offsetWidth; /* trigger reflow */ //this line of code
//      jellyfishAfter.style.animation = null;
//    }
//    if (swiper.activeIndex === 2) {
//      lizard.style.animation = "none"; //this line of code
//      lizard.offsetWidth; /* trigger reflow */ //this line of code
//      lizard.style.animation = null;

//      lizardAfter.style.animation = "none"; //this line of code
//      lizardAfter.offsetWidth; /* trigger reflow */ //this line of code
//      lizardAfter.style.animation = null;
//    }
//    on("reachBeginning", () => {
//      carouselFillActive.style.animation = "none"; //this line of code
//      carouselFillActive.offsetWidth; /* trigger reflow */ //this line of code
//      carouselFillActive.style.animation = null;
//      hideFill();
//    });

//    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
//  });

//  console.log(swiper);
//}

//const swiper = new Swiper(".swiper", {
//  // Optional parameters
//  modules: [myPlugin],
//  slidesPerView: 1,
//  effect: "fade",

//  autoplay: {
//    delay: 7000,
//    disableOnInteraction: false,
//  },

//  //scrollbar: {
//  //  el: ".carousel__fill",
//  //  hide: false,
//  //},
//  // Enable debugger
//  debugger: true,
//});
