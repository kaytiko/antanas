export function composition() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        let galleryRow = document.querySelectorAll('.gallery__row--submain');

        galleryRow.forEach((row) => {
            let gCard = row.querySelectorAll('.gallery__item');
            for (let i = 0; i < gCard.length; i += 1) {
                if (gCard[0].querySelector('.gallery__description').offsetHeight > gCard[1].querySelector('.gallery__description').offsetHeight) {
                    gCard[1].querySelector('.gallery__description').style.height = `${gCard[0].querySelector('.gallery__description').offsetHeight}px`;
                } else {
                    gCard[0].querySelector('.gallery__description').style.height = `${gCard[1].querySelector('.gallery__description').offsetHeight}px`;
                }
            }
        });
    }
}