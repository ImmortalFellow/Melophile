const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
  });

  gsap.from(".nlink", {
      stagger: .2,
      y: 10,
      duration: 1,
      ease: Power2,
      opacity: 0
  })

  Shery.textAnimate("#headings h1 ,h2" ,{
      style: 2,
      y: 10,
      delay: 0.3,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });

    gsap.from(".anim2", {
      y: 50,
      stagger: .3,
      opacity: 0,
      ease: Expo,
      duration: 1,
    })

    Shery.imageEffect("#imgntext img" ,{
        style: 3,
        config: {"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":4.58,"range":[0,100]},"uFrequencyZ":{"value":37.4,"range":[0,100]},"geoVertex":{"range":[1,64],"value":17.35},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666813838626},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    })

    Shery.imageEffect(".imgeff img" ,{
      style: 5,
      config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

    })

    gsap.from("#imgntext img" ,{
      y: "70",
      opacity: 0,
      duration: 2,
      ease: Expo,
    })

    Shery.imageEffect("#bimg" ,{
      style: 5,
      config: {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.3397487504930266},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.82,"range":[1,15]},"durationOut":{"value":0.17,"range":[0.1,5]},"durationIn":{"value":0.47,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      gooey: true,
    })

    document.querySelector("#mtext button")
    .addEventListener("mouseover", function(){
       gsap.to("#music video", {
         opacity: 1,
         duration: 1,
         ease: Power4,
       })
      })
       

    document.querySelector("#mtext button")
    .addEventListener("mouseleave", function(){
      gsap.to("#music video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
      })
    })