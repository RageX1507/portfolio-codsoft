var tl=gsap.timeline()
tl.from(".nav",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})
tl.to(".img-container",{
    scale:52,
    ease:"ease",
    scrollTrigger:{
        trigger:".video-section",
        scrub:1.5,
        start:"top top",
        end:"bottom",
        pin:true,
    }
})

tl.from(".left",{
    scale:0,
    y: 100,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        scroller:"body",
        
        start:"180% 10%",
        end:"10% 100%",
        scrub:4,
}
    
})
tl.from(".right",{
    scale:0,
    y: 100,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        scroller:"body",
        
        start:"180% 10%",
        end:"10% 100%",
        scrub:4,
}   
})
tl.from(".skills",{
    scale:0,
    y: 100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #sun",
        scroller:"body",
        start:"270% 20%",
        end:"10% 100%",
        scrub:4,
}
    
})
tl.from(".contact-section img",{
    scale:0,
    y: 100,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        scroller:"body",
        start:"400% 10%",
        end:"10% 100%",
        scrub:4,
}   
})
tl.from("#ftxt",{
    scale:0,
    y: 100,
    opacity:0,   
})

tl.from("#stxt",{
    scale:0,
    y: 100,
    opacity:0,   
})

tl.from("#ttxt",{
    scale:0,
    y: 100,
    opacity:0,   
})