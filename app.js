// let item= document.querySelectorAll(".experience-item");
// let content=document.querySelectorAll(".experience-item__title");
// [...]item.addEventListener("mouseover",function(){
//     content.style.color="#fff";
//     item.style.background= "#d7e14";

// })

// header scroll
window.addEventListener("scroll", function() {
    // let headerShow=document.querySelector(".header");
    // headerShow.classList.toggle("header_hidden",window.scrollY>0);
    var headerContact = document.querySelector(".header-contact__list");
    var headerBottom = document.querySelector(".header-bottom");
    var headerWrap = document.querySelector(".header-wrap");
    headerContact.classList.toggle("scroll-hidden", window.scrollY > 0);
    headerBottom.classList.toggle("scroll-sticky", window.scrollY > 0);
    headerWrap.classList.toggle("scroll-header", window.scrollY > 0);

})


// menu link hover effect scroll
window.addEventListener("load", function() {
    const link1s = [...document.querySelectorAll(".header-nav_link")];

    // console.log(links);
    link1s.forEach((item) => item.addEventListener("mouseenter", handleHoverLink1));

    const line = document.querySelector(".line-effect");
    // console.log(line);
    // const line= document.createElement("div");
    // line.className= "line-effect";
    // document.body.appendChild(line);

    // scroll
    function handleHoverLink1(event) {
        const { left, top, width, height, right } = event.target.getBoundingClientRect();
        // console.log({left,top,width,height,right});
        const offsetLeft = event.target.offsetLeft;
        const offsetTop = event.target.offsetTop;
        // console.log(offsetTop);
        // console.log(offsetLeft);
        if (window.scrollY <= 0) {
            line.style.width = `${width}px`;
            line.style.left = `${left}px`;
            line.style.top = `${top + offsetTop*4}px`;
        } else {
            line.style.width = `${width}px`;
            line.style.left = `${offsetLeft}px`;
            line.style.top = `${top +top/2}px`;
        }
    }
    const nav = document.querySelector(".header-nav");
    nav.addEventListener("mouseleave", function() {
        line.style.width = 0;
    })

})







// home-sider 
var homeSliderItems = document.querySelectorAll(".home-slider_items");
var homeSliderImages = document.querySelectorAll(".home-slider_img img");
var homeSliderDes = document.querySelectorAll(".home-slider_des span");

var arrayHomeSliderItems = [...homeSliderItems];
var arrayHomeSliderImages = [...homeSliderImages];
var arrayHomeSliderDes = [...homeSliderDes];


var currentIndex = 0;
var img0 = arrayHomeSliderImages[currentIndex].getAttribute("src");
var img1 = arrayHomeSliderImages[currentIndex + 1].getAttribute("src");
var des0 = arrayHomeSliderDes[currentIndex].innerHTML;
var des1 = arrayHomeSliderDes[currentIndex + 1].innerHTML;

// console.log(arrayHomeSliderImages[0].getAttribute("src"));

// arrayHomeSliderImages.forEach( function (item, index) {
//     currentIndex=index;
//     // arrayHomeSliderImages[currentIndex].style.animation= `slideLeft 1s ease-in-out foward;`
//     item.addEventListener("mouseleave", handleHomeSlider());
// });


// function handleHomeSlider(){
//     setInterval(function(){
//         if(currentIndex==0){
//             arrayHomeSliderImages[currentIndex].setAttribute("src",img1);
//             currentIndex++;
//         }else if(currentIndex==1){
//             arrayHomeSliderImages[currentIndex-1].setAttribute("src",img0);
//             currentIndex--;
//         }
//     },1000);
// }

// homeslider OK
// setInterval(function(){
//     if(currentIndex==0){
//         arrayHomeSliderImages[currentIndex].setAttribute("src",img1);
//         arrayHomeSliderImages[currentIndex].style.animation= `slideLeft 1s ease-in-out foward`;
//         arrayHomeSliderDes[currentIndex].innerHTML=des1;
//         currentIndex++;
//     }else if(currentIndex==1){
//         arrayHomeSliderImages[currentIndex-1].setAttribute("src",img0);
//         arrayHomeSliderImages[currentIndex-1].style.animation= `slideLeft 1s ease-in-out foward`;
//         arrayHomeSliderDes[currentIndex-1].innerHTML=des0;
//         currentIndex--;
//     }
// },5000);