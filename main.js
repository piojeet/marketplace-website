gsap.to(".clothes",{
    y:0,
    // opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".clothes",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
}) 