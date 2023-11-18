function RevealToSpan(){

document.querySelectorAll(".reveal")
 .forEach(elem =>{
    //create two spans
var parent=document.createElement("span");
var child=document.createElement("span");
//setting class in both spant tags which are created above
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
       }
   })

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

leftimg.addEventListener('mousemove',function(){
    cont.style.transition='background-color 0.8s';
    cont.style.backgroundColor="  rgb(150, 144, 228)";
});
leftimg.addEventListener('mouseout',function(){
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

RevealToSpan();
loader();
workImages();

