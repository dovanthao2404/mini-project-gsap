gsap.from(".b2 h2", {
    autoAlpha: 0,
    scale: 0.5,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        // start: "top bottom-=100"
        start: "top center+=100"
        // start: "top 50%"
        , end: "bottom top",
        toggleActions: "play pause revert reset",
        // scrub: true
    }
});


ScrollTrigger.create({
    trigger: ".b2",
    pin: true,
    makers: true,
    end: 'bottom 50%'
});