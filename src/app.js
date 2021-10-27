const scrollerButton = document.getElementById('scroller')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

scrollerButton.addEventListener('click', toggleButton)