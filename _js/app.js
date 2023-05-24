setTimeout(function () {
    fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500);

$(document).ready(function () {
    $(window).on('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    /* particlesJS.load(@dom-id, @json, @callback (optional)); */
    tsParticles.load("landing", {
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "image",
                "options": {
                    "images": [
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/ro/6/62/MySQL.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://www.svgrepo.com/show/349342/docker.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://symfony.com/logos/symfony_white_03.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://commons.wikimedia.org/wiki/File:Electron_Software_Framework_Logo.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
                            "type": "image/svg+xml",
                        },
                        {
                            "src": "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
                            "type": "image/svg+xml",
                        }

                    ],
                }
            },
            "opacity": {
                "value": .8,
                "random": false
            },
            "size": {
                "value": 20,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 170,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


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
