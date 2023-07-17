export function headerAnim () {
    let bName = document.querySelector('.banner__name'),
        bLastname = document.querySelector('.banner__lastname'),
        bInfo = document.querySelector('.banner__info');

    if (bName && bLastname) {

        setTimeout(function() {
            bName.classList.add('banner__name--visible'),
            bLastname.classList.add('banner__lastname--visible'),
            bInfo.classList.add('banner__info--visible');
        }, 1200);
    }
}

export function scrollCard() {
    let allPoster = document.querySelectorAll('.gallery__wrapper');
    let cardDelay = 0;
    let card;
    const options = {
        rootMargin: "0px 0px -200px 0px",
        threshold: [0, 0]
    };

    allPoster.forEach((item) => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            card = item.querySelectorAll('.gallery__item');
            card.forEach(e => {
                e.style.transitionDelay = "" + cardDelay + "s";
                cardDelay += 0.6;
            });
            cardDelay = 0;
        }
    });

    const callback = function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('gallery__item--visible');
            }
        });   
    }

    const observer = new IntersectionObserver(callback, options);

    card = document.querySelectorAll('.gallery__item, .footer__author');
    card.forEach(function(el) { observer.observe(el); });
}

export function deleteAnim () {
    let cards = document.querySelectorAll('.gallery__item');
    cards.forEach((e) => e.classList.remove('gallery__item--visible'));

    scrollCard();
}

export function noiseAnim() {
    window.setInterval(fuzz,100);
    function fuzz() {
        document.querySelector('.noise').style.backgroundPosition=`${Math.floor(Math.random()*100)}% ${Math.floor(Math.random()*100)}%`
    }
}

const prepositions = ["без", "между", "под", "в", "на", "по", "вокруг", "о", "по", "про", "и"];

export function addNbsp(str) {
  return str.replace(/(\S+?)( )/g, (_, p) =>
  p + (prepositions.includes(p.toLowerCase()) ? '|' : ' '))
}