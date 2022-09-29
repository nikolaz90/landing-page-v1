
window.addEventListener('click', ()=>console.log('Hey! You clicked me, and what are you looking here for? So nosey!'))




const bg = document.getElementById('about')
let x = -15
bg.addEventListener('mousemove', ()=>{
    x += 0.1
    bg.style.background = `linear-gradient(${x}deg, rgba(225, 77, 42, 0.4)50%, rgb(156, 44, 119,0.4)50%),url("https://cdn.pixabay.com/photo/2022/09/18/15/37/elephants-7463340_1280.jpg")`
    bg.style.backgroundSize = 'cover'
    bg.style.backgroundPosition = 'center'
})
