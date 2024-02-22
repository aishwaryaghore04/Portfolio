var menuBtn = document.querySelector(".menu-btn i");
var hamMenu = document.querySelector(".ham-menu");
var hamItems = document.querySelector(".menu-wraper");
var logo = document.querySelector(".portfolio-txt h1");
var contactMenu = document.querySelector(".contactme");
var contactBtn = document.querySelector(".contact-btn");


let flag = 0;
var dropDownMenu = function () {
  if (flag === 0) {
    hamMenu.style.top = "0";
    hamMenu.style.right = "0";
    hamMenu.style.borderRadius = "0";
    logo.style.color = "#fff";
    hamItems.style.opacity = 1;
    menuBtn.style.color = "#fff";
    flag = 1;
  } else {
    hamMenu.style.top = "-100%";
    hamMenu.style.right = "-100%";
    hamMenu.style.borderRadius = "50%";
    hamItems.style.opacity = 0;
    logo.style.color = "#0c0c0c";
    menuBtn.style.color = "#0c0c0c";
    flag = 0;
  }
};

menuBtn.addEventListener("click", dropDownMenu);

let flag2 = 0;
var contactBar = function () {
  if (flag2 === 0) {
    contactMenu.style.right = "0";
    contactMenu.style.borderRadius = "0";
    flag2 = 1;
  } else {
    contactMenu.style.right = "-50%";
    contactMenu.style.borderRadius = "50%";
    flag2 = 0;
  }
};

contactBtn.addEventListener("click", contactBar);

gsap.from(".nav-bar", {
  y: "-300px",
});

gsap.to(".hero h1:nth-child(1)", {
  delay: 0.5,
  opacity: 1,
  translateX: 0,
});
gsap.to(".hero h1:nth-child(2)", {
  delay: 0.5,
  opacity: 1,
  translateX: 0,
});
gsap.to(".hero h1:nth-child(3)", {
  delay: 0.5,
  opacity: 1,
  translateX: 0,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    start: "-50% 50%",
    end: "50% 50%",
    scrub: 2,
  },
});
tl.to(
  ".hero h1:nth-child(1)",
  {
    opacity: 1,
    translateX: "-50vw",
  },
  "a"
);
tl.to(
  ".hero h1:nth-child(2)",
  {
    opacity: 1,
    translateX: "50vw",
  },
  "a"
);
tl.to(
  ".hero h1:nth-child(3)",
  {
    opacity: 1,
    translateX: "-50vw",
  },
  "a"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-area",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 2,
    // pin:true
  },
});

tl2.to(".text-area-hover", {
  width: "100%",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 2,
  },
});

tl.to(
  ".right img",
  {
    borderRadius: "10%",
    opacity: 1,
    marginTop: 0,
  },
  "b"
);
tl.to(
  ".left",
  {
    marginTop: 0,
    opacity: 1,
  },
  "b"
);

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-area2",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 2,
  },
});

tl4.to(".text-area-hover2", {
  width: "100%",
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "0% 50%",
    end: "50% 50%",
    scrub: 2,
  },
});

tl5.to(
  ".projects-img",
  {
    top:0,
    opacity:1
  },
  "t1"
);
tl5.to(
  ".projects-info",
  {
    top: 0,
    opacity:1
  },
  "t1"
);

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects:nth-child(2)",
    start: "0% 50%",
    end: "50% 50%",
    scrub: 2,
  },
});

tl6.to(
  ".projects-img",
  {
    top:0,
    opacity:1
  },
  "t2"
);
tl6.to(
  ".projects-info",
  {
    top: 0,
    opacity:1
  },
  "t2"
);
var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects:nth-child(2)",
    start: "0% 50%",
    end: "50% 50%",
    scrub: 2,
  },
});

tl7.to(
  ".projects-img",
  {
    top:0,
    opacity:1
  },
  "t3"
);
tl7.to(
  ".projects-info",
  {
    top: 0,
    opacity:1
  },
  "t3"
);
