const tl = gsap.timeline();

//tl.to(".image__slide", {x: "-50%", duration: 10 });

tl.fromTo(".image__slide", {x: 400}, {duration: 25, x: 0});
