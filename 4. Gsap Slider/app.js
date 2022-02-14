const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const slides = [...document.querySelectorAll(".slide")];
const indexIndications = document.querySelector(".counter span:nth-child(1)");
let index = 0;

function animationRight() {
    const TLRIGHT = gsap.timeline();

    TLRIGHT
        .set(indexIndications, {
            innerText: index + 1
        })
        .to(slides[index], {
            duration: 0.6,
            x: 0
        });
}


function animationLeft() {
    const TLLEFT = gsap.timeline();

    TLLEFT
        .set(indexIndications, {
            innerText: index
        })
        .to(slides[index], {
            duration: 0.6,
            x: "-100%"
        });
}

btnRight.addEventListener("click", () => {

    if (index === slides.length - 1) {
        gsap.to(container, {
            keyframes: [
                {
                    duration: 0.1,
                    x: -4
                },
                {
                    duration: 0.1,
                    x: 0
                },
                {
                    duration: 0.1,
                    x: -4
                },
                {
                    duration: 0.1,
                    x: 0
                },
            ]
        });
        return;
    }

    ++index;
    animationRight();
});

btnLeft.addEventListener("click", () => {

    if (index === 0) {
        gsap.to(container, {
            keyframes: [
                {
                    duration: 0.1,
                    x: -4
                },
                {
                    duration: 0.1,
                    x: 0
                },
                {
                    duration: 0.1,
                    x: -4
                },
                {
                    duration: 0.1,
                    x: 0
                },
            ]
        });
        return;
    }

    animationLeft();
    --index;
});
