const time = document.querySelector("#time");
const score = document.querySelector("#score");
const message = document.querySelector("#annoying_message");
const screens = Array.from(document.querySelectorAll(".screens"));
const playGamebtn = document.querySelector(".start-btn");
const box = Array.from(document.querySelectorAll(".box"));
const mainSection = document.querySelector('.main-section');
const imageArrays = ['http://pngimg.com/uploads/fly/fly_PNG3946.png',
    'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
    'http://pngimg.com/uploads/spider/spider_PNG12.png',
    'http://pngimg.com/uploads/roach/roach_PNG12163.png'

]
// let image = document.createElement("img");

let selected_insect = {};

let seconds = 0;
let score_count = 0;
playGamebtn.addEventListener('click', () => {
    screens[0].classList.add('screen-up');
})

box.forEach((value, index, array) => {
    value.addEventListener('click', () => {
        const img = value.children[1];
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = {
            src,
            alt
        };

        value.classList.add('selected');
        timer();

       
        screens[1].classList.add('screen-up')
        addInsects()
    })
})



function timer() {

    setInterval(() => {
        seconds++;


        time.innerHTML = `Time: ${seconds}`;
    }, 1000);
}
function addInsect() {
    setTimeout(addInsects, 1000);
    setTimeout(addInsects, 1500);
}

function addInsects() {

    // div.innerHTML=`<img class='insects' src="${SelectedImages} >`


    const { width, height } = getRandomLocation();

    const div = document.createElement("div");
    div.classList.add("insects")
    div.style.left = `${width}px`;
    div.style.top = `${height}px`;

    div.innerHTML = `<img src="${selected_insect.src}" ">`



    div.addEventListener('click', catchInsects)

    mainSection.appendChild(div);


}

function catchInsects() {
    increase_score();
    this.classList.add("insects-catched");
    setTimeout(() => {
        this.remove();
    },);

    addInsects();

}

function increase_score() {
    score_count++;
    if (score_count > 15) {
        message.classList.add("visible");
    }
    score.innerHTML = `Score: ${score_count}`;
}
function getRandomLocation() {
    const x = window.innerWidth;
    const y = window.innerHeight;
    const width = Math.random() * (x - 200) + 100;
    const height = Math.random() * (y - 200) + 100;

 
    return {
        width,
        height
    };


}



