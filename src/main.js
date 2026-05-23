import './style.css'
import gsap from 'gsap'


// const charT = document.querySelector('.charH')
// const charO = document.querySelector('.charO')
// const charM = document.querySelector('.charM')
// const charE = document.querySelector('.charE')
// const dot = document.querySelector('.dot')

// const tweentT =  gsap.to('.charH', {
//     color: 'white ',
//     x: 10,
//     paused: true
// })

// const tweentO =  gsap.to('.charO', {
//     color: 'white',
//         x: 10,
//     paused: true
// })

// const tweentM =  gsap.to('.charM', {
// color: 'white', 
//         x: 10,
//     paused: true
// })

// const tweentE =  gsap.to('.charE', {
//     color: 'white',
//         x: 10,
//     paused: true
// })

// dot.addEventListener("mouseenter", () => {
//     dotTween.play()
// });

// dot.addEventListener("mouseleave", () => {
//     dotTween.reversed()
// });


// charT.addEventListener("mouseenter", () => {
//     tweentT.play()
    
// });
// charT.addEventListener("mouseleave", () => {
//     tweentT.paused()
// });

// charO.addEventListener("mouseenter", () => {
//     tweentO.play()
    
// });
// charO.addEventListener("mouseleave", () => {
//     tweentO.paused()
// });

// charM.addEventListener("mouseenter", () => {
//     tweentM.play()
    
// });
// charM.addEventListener("mouseleave", () => {
//     tweentM.paused()
// });

// charE.addEventListener("mouseenter", () => {
//     tweentE.play()
    
// });
// charE.addEventListener("mouseleave", () => {
//     tweentE.paused()
// });

// Enfoque B: Hover individual por cada letra
// Si tu objetivo original era que solo la letra que tocas con el mouse reaccione (independientemente de las demás), entonces el loop forEach no debe ir en el contenedor .home, sino directamente en las letras.
const home = document.querySelectorAll('.charH, .charO, .charM, .charE')

home.forEach(function(homeItem){
    const letterTeen = gsap.to(homeItem, {
  color: 'white',
        x: 10,
        duration: 0.2,
        paused: true,
        ease: 'power1.out',
        yoyo: true,

    })

    homeItem.addEventListener('mouseenter', () => {
        letterTeen.play()
    })

    homeItem.addEventListener('mouseleave', () => {
        letterTeen.reverse()
        // hacer que la letra vuelva a su estado original, en este caso el color y la posición, pero con una animación suave. La función reverse() hace exactamente eso: reproduce la animación en sentido inverso, devolviendo la letra a su estado inicial de manera fluida.
        gsap.to(homeItem, {color: 'black', x: 0, duration: 0.2, ease: 'power1.out'})
    })
})



// Enfoque A: Hover en el contenedor .home para que todas las letras reaccionen al mismo tiempo
const items = document.querySelectorAll('.item')
    //gsap.defaults means that all the tweens that we create will have this duration by default, so we don't have to specify it in each tween
    gsap.defaults({duration: 0.3})
items.forEach(function(item, index)  {
    console.log(item, index)
    const tween = gsap.timeline({paused: true})
    .to(item.querySelector('.text'), {color: 'white', x: 10, scale: 1.3 , transformOrigin: 'left center'})
    .to(item.querySelector('.dot'), {backgroundColor: '#F93', x: 5, scale: 1.5}, '<') // el '<' significa que esta animacion se va a ejecutar al mismo tiempo que la anterior
 
    item.addEventListener('mouseenter', () => {
        tween.play()
    })

    item.addEventListener('mouseleave', () => {
        tween.reverse()
    })

})

