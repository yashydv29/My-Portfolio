
function RevealToSpan(){
document.querySelectorAll(".reveal")
.forEach(elem =>{
var parent=document.createElement("span");
var child=document.createElement("span");
parent.classList.add("parent");
child.classList.add("child");

child.innerHTML=elem.innerHTML;
parent.appendChild(child);
elem.innerHTML=" ";
elem.appendChild(parent);

});
}
function loader(){

gsap.from(".child span",{
   x:"100px",
   duration:0.7,
   ease: Circ.easeInOut
})

gsap.to(".parent .child",{
   y:"-100%",
   duration:2,
   delay:0.7,
   ease: Circ.easeInOut
})
gsap.to("#loader",{
height:0,
   duration :2,
   delay:1,
   ease: Circ.easeInOut
})
gsap.to("#loader2",{
   height:"100%",
   top:0,
      duration :1.9,
      delay:1,
      ease: Circ.easeInOut
  })
  gsap.to("#mainload",{
   height:"100%",
   top:0,
      duration :1.3,
      delay:1.7,
      ease: Circ.easeInOut,
      onComplete:function(){
       homeAnimation();
       texteffect();
      }
  })
 }
function texteffect(){

 Shery.imageMasker("#imgleft", {
   mouseFollower: true,
   text: "Weather App",
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
 Shery.imageMasker("#imgleft2", {
  mouseFollower: true,
  text: "Plash",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

 Shery.imageMasker("#imgright", {
   mouseFollower: true,
   text: "Tic Tac Toe",
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });

 Shery.hoverWithMediaCircle(".lulu",{
   images: ["effect1.jpg", "effect2.jpg", "effect3.jpg"] ,

 });

 Shery.mouseFollower({
   // debug:true,
   skew: true,
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 0.7,
 });



 Shery.imageEffect(".lulu", {
   style: 3 ,
   // debug: true,
 });
  


}
function homeAnimation(){
   gsap.to(" #home .parent .child",{
       y:0,
       duration:1,
       ease: Circ.easeInOut
   })
}
function workImages(){


const cont=document.querySelector('#work');
const leftimg=document.getElementById('imgleft');
const rightimg=document.getElementById('imgright');
const left2=document.getElementById('imgleft2');

leftimg.addEventListener('mousemove',function(){
   cont.style.transition='background-color 0.8s';
   cont.style.backgroundColor="  rgb(150, 144, 228)";
});
leftimg.addEventListener('mouseout',function(){
   cont.style.transition='background-color 0.6s';
   cont.style.backgroundColor="#f2f2f2"
});
left2.addEventListener('mousemove',function(){
  cont.style.transition='background-color 0.8s';
  cont.style.backgroundColor="  rgb(150, 144, 228)";
});
left2.addEventListener('mouseout',function(){
  cont.style.transition='background-color 0.6s';
  cont.style.backgroundColor="#f2f2f2"
});
rightimg.addEventListener('mousemove',function(){
   cont.style.transition='background-color 0.8s';
   cont.style.backgroundColor="  rgb(231, 184, 165)";
});
rightimg.addEventListener('mouseout',function(){
   cont.style.transition='background-color 0.6s';
   cont.style.backgroundColor="#f2f2f2"
});
}

function imgageffects(){

gsap.set("#distortedImage", { scaleX: 1, scaleY: 1, rotation: 0 });

const image = document.getElementById("imgleft");

image.addEventListener("mouseenter", function() {
 gsap.to("#imgleft", {
   duration: 0.5,
   scaleX: 1.1, 
   scaleY: 1,
   rotation: 2,
   ease: "power1.inOut"
 });
});

image.addEventListener("mouseleave", function() {
 gsap.to("#imgleft", {
   duration: 0.5,
   scaleX: 1, 
   scaleY: 1,
   rotation: 0, 
   ease: "power1.inOut"
 });
});

const imager = document.getElementById("imgright");

imager.addEventListener("mouseenter", function() {
 gsap.to("#imgright", {
   duration: 0.5,
   scaleX: 1.11, 
   scaleY: 1, 
   rotation: 2, 
   ease: "power1.inOut"
 });
});

imager.addEventListener("mouseleave", function() {
 gsap.to("#imgright", {
   duration: 0.5,
   scaleX: 1, 
   scaleY: 1, 
   rotation: 0, 
   ease: "power1.inOut"
 });
});
}
const items = document.querySelectorAll('.item')

items.forEach((el) => {
 const image = el.querySelector('img')
 
 el.addEventListener('mouseenter', (e) => {
   gsap.to(image, { autoAlpha: 1 })
 })
 
  el.addEventListener('mouseleave', (e) => {
   gsap.to(image, { autoAlpha: 0 })
 })
 
 el.addEventListener('mousemove', (e) => {
   gsap.set(image, { x: e.offsetX - 200 })
 })
})

RevealToSpan();
loader();
workImages();
imgageffects();
