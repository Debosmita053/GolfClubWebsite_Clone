var cur=document.querySelector("#cursor");
var curpt=document.querySelector("#cursor-pointer");
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+20+"px";
    cur.style.top = dets.y+"px";
    curpt.style.left = dets.x  -150 +"px";
    curpt.style.top = dets.y - 150+"px";
})

var h5=document.querySelectorAll("#nav h5");
h5.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale=3;
        cur.style.border= "0.1px solid white";
        cur.style.backgroundColor="transparent";
    })

    elem.addEventListener("mouseleave",function(){
        cur.style.scale=1;
        cur.style.border= "0px solid #95c11e";
        cur.style.backgroundColor="#95c11e";
    })
})


var div=document.querySelectorAll("#cards-container .cards");
div.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale=3;
        cur.style.border= "0.1px solid white";
        cur.style.backgroundColor="transparent";
    })

    elem.addEventListener("mouseleave",function(){
        cur.style.scale=1;
        cur.style.border= "0px solid #95c11e";
        cur.style.backgroundColor="#95c11e";
    })
})

var img=document.querySelectorAll("#page4 .img");
img.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale=3;
        cur.style.border= "0.1px solid white";
        cur.style.backgroundColor="transparent";
    })

    elem.addEventListener("mouseleave",function(){
        cur.style.scale=1;
        cur.style.border= "0px solid #95c11e";
        cur.style.backgroundColor="#95c11e";
    })
})

gsap.to("#nav",{

    backgroundColor:"#000",
    height:"140px",
    duration:0.5,
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start: "top -10%",
        end:"top -10%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:true
    }
})

gsap.from("#about-us img,#about-us-in",{

    y:50,
    opacity:0,
    duration:3,
    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",    
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }

})

gsap.from("#quotes .img1",{
    x:-20,
    y:-20,
    scrollTrigger:{
        trigger:"#quotes .img1",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1
    }
})

gsap.from("#quotes .img2",{
    x:20,
    y:20,
    scrollTrigger:{
        trigger:"#quotes .img2",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1
    }
})


gsap.from("#page4 h1",{
    
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
       // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

