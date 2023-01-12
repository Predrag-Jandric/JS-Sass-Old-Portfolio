// Open/close mobile menu

const navBtn = document.getElementById("hamburger");
const navList = document.getElementById('nav-list');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});


// heading text appear

const textElement = document.getElementById('write-heading')
const text = `Let's make the web interesting`

let idx = 3

writeHeading()

function writeHeading() {
    textElement.innerText = text.slice(0, idx)

    idx++

    setTimeout(writeHeading, 20)
}

// about secion appear effect
