document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Fade out preloader
    setTimeout(function () {
      fadeOutPreloader(document.getElementById("preloader"), 69);
    }, 1500);

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load("landing", "assets/particles.json", function () {});

    // Typing Text
    var element = document.getElementById("txt-rotate");
    var toRotate = element.getAttribute("data-rotate");
    var period = element.getAttribute("data-period");
    setTimeout(function () {
      new TxtRotate(element, JSON.parse(toRotate), period);
    }, 1500);

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "#txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);

    // Initialize AOS
    AOS.init({
      disable: "mobile",
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });

    initWordCloud();
  },
  false
);

/* Preloader */

function fadeOutPreloader(element, duration) {
  opacity = 1;

  interval = setInterval(function () {
    if (opacity <= 0) {
      element.style.zIndex = 0;
      element.style.opacity = 0;
      element.style.filter = "alpha(opacity = 0)";

      document.documentElement.style.overflowY = "auto";

      clearInterval(interval);
    } else {
      opacity -= 0.1;
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity = " + opacity * 100 + ")";
    }
  }, duration);
}

/* Typing Text */

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 5;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

/* Word Cloud */

function initWordCloud() {
  var parent = document.getElementById("skills");
  var divs = parent.getElementsByTagName("div");
  var frag = document.createDocumentFragment();

  // Randomize order of skills
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);

  // Change color or increase font size based on skill-weight
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.color = setColor(divs[i].getAttribute("skill-type"));
    if (screen.width < 768) {
      divs[i].style.fontSize =
        divs[i].getAttribute("skill-weight") * 0.6 + "em";
    }
    if (screen.width > 768) {
      divs[i].style.fontSize = divs[i].getAttribute("skill-weight") + "em";
    }
    divs[i].style.lineHeight = divs[i].getAttribute("skill-weight") / 5;
  }
}

function setColor(skillType) {
  switch (skillType) {
    case "language":
      return "#e84a5f";
    case "framework":
      return "#ff847c";
    case "tool":
      return "#fecea8";
    default:
      return "#000000";
  }
}
