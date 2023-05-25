setTimeout(function () {
    fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500);

$(document).ready( async () =>  {
    $(window).on('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    const myJson = await fetch('assets/particles.json')
        .then(response => {
            return response.json();
        })

    /* tsParticles.load(@dom-id, @json); */
    tsParticles.load("landing", myJson);


    // Typing Text
    const element = document.getElementById('txt-rotate');
    const toRotate = element.getAttribute('data-rotate');
    const period = element.getAttribute('data-period');
    setTimeout(function () {
        new TxtRotate(element, JSON.parse(toRotate), period);
    }, 1500);

    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '#txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);

    // Initialize AOS
    AOS.init({
        disable: 'mobile',
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: true
    });

    randomizeOrder();
});

/* FUNCTIONS */

/* Preloader */

function fadeOutPreloader(element, duration) {
    let opacity = 1;

    const interval = setInterval(function () {
        if (opacity <= 0) {
            element.style.zIndex = 0;
            element.style.opacity = 0;
            element.style.filter = 'alpha(opacity = 0)';

            // Allow horizontal scroll
            document.documentElement.style.overflowY = 'auto';

            // Remove preloader div
            document.getElementById('preloader').remove();

            clearInterval(interval);
        } else {
            opacity -= 0.1;
            element.style.opacity = opacity;
            element.style.filter = 'alpha(opacity = ' + opacity * 100 + ')';
        }
    }, duration);
}

/* Typing Text */

const TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    const that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 5;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

/* Word Cloud */

function randomizeOrder() {
    const parent = document.getElementById('skills');
    const divs = parent.getElementsByTagName('div');
    const frag = document.createDocumentFragment();

    // Randomize order of skills
    while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);
}
