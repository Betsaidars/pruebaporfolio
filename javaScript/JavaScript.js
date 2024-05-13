
//toggle

const toggle = document.getElementById('toggle')
const toggleIcon = document.getElementById('toggleIcon')
const menu = document.getElementById('menu')
let showMenu = false

toggle.addEventListener('click', toggleMenu)

function toggleMenu(){
    console.log("pepe")
    if(!showMenu){
        toggleIcon.src='./img/icon-close.svg'
        menu.style.display = 'block'
        showMenu = true;
    } else {
        toggleIcon.src='./img/icon-hamburger.svg'
        menu.style.display = 'none'
        showMenu = false;
    }
}


// const toggleButton = document.getElementById('toggle-button')

// toggleButton.addEventListener('change', () => {
//     // Ahorita ponemos código aquí :)
//   })

//   toggleButton.addEventListener('change', () => {
//     document.body.classList.toggle('dark')
//   })


/* OSCURO */
