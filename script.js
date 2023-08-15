let modal= document.querySelector('.modal')
let overlay= document.querySelector('#overlay')

let openModal =()=>{
    modal.classList.add("active")
    overlay.classList.add("overlayActive")
}
let closeModal= ()=>{
    modal.classList.remove("active")
    overlay.classList.remove("overlayActive")
}