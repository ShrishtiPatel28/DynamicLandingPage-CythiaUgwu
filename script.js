const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        stagger:.3,
        duration:1.5,
        ease:Expo.easeOut
    })
    .to(".boundingelem2", {
        y: 0,
        duration:1.2,
        delay:-1,
        ease:Expo.easeOut
    })
    .from("#homefooter", {
       y: 0,
       duration:1.2,
       delay:-1,
       ease:Expo.easeOut
   })
    
}
    //for mouse hover animations  
function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        this.document.querySelector("#mousecircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elemt){
    var rotate = 0;
    var diffrot= 0;

    elemt.addEventListener("mousemove", function (details) {
    var diff = details.clientY - elemt.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;  
   
       gsap.to(elemt.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        // top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot*0.8),
       });
    });

    elemt.addEventListener("mouseleave", function (details) {       
           gsap.to(elemt.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration:0.5,
           });
        });
});