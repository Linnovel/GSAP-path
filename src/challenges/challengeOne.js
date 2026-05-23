import '../challengeOne.css'
import gsap from 'gsap'
import { GSDevTools } from "gsap/GSDevTools";
import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(GSDevTools);


//Repaso Rapido
//gsap.to la animación va a empezar donde el elemento se encuentre, con el css, y html. Si deseas que se mueva de un lado como tal, tienes que ponerle el css. el tween va a empezar desde donde esta el elemento en su estado original y animarlo, a donde . se le define en el tween gsap.to
// gsap.to
    // x: 300, // Mueve el elemento a la coordenada absoluta 300px.
    // x:  300,
       // x: "- =300", // Toma la posición donde esté el elemento ahora mismo y le suma 300px.



//from() es lo contrario a tween to, que hace la animacion desde un estado inicial definido. from define desde su estado inicial que es 180px a su posición natural que es x:0
//Ve desde la esquina inferior derecha a tu posición natural, que es x:0, y lo hace en 2 segundos
// gsap.from('.box', {
//     y: 200,
//     duration: 2 
// })

//Yo defino donde empieza y donde terimna la animacion con fromTo
gsap.fromTo('.box', {
    //En los objetos, siempre se pone el estado inicial, y luego el estado final, y se pueden poner las propiedades que se quieran en cada uno de los objetos, como la duracion, o la facilidad de la animacion
    y: 0,
    //Este duration es ignorado por GSAP
    duration: 2,
},
{
    //este segundo objeto es el que manda
     y: 600,
     //Este duration es el que manda, el primero es ignorado por GSAP
    duration: 2,
    background: "#f93",
    repeat:-1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1
})











// //el default ayuda a no tener que escribir la duracion en cada animacion, se puede sobreescribir en cada animacion si se quiere

// const tl = gsap.timeline({ defaults: { duration: 3 } })
//     tl.fromTo('.word', 
//   { x: "+=100", opacity: 10 }, // Inicio
//   { x: 0, opacity: 1 }    // Fin (su posición natural en el CSS es x: 0)
// )
// //from define desde su estado inicial que es 180px a su posición natural que es x:0
//     tl.from('.wordTwo', { x: 180,  opacity: 0 }, {opacity: 1})
// //     El secreto: x: "+=100"
// // GSAP tiene una sintaxis especial para valores relativos que es extremadamente potente:
// // x: 100: Mueve el elemento a la coordenada absoluta 100px.
// // x: "+=100": Toma la posición donde esté el elemento ahora mismo y le suma 100px.
//     tl.to('.wordThree', { x: "+=100", opacity: 1 , duration: 1.5, ease: "power1.inOut" } , "<")
//    // x: "-=100": Toma la posición donde esté el elemento ahora mismo y le resta 100px.
//     // tl.fromTo('.wordThree', { x: 500, opacity: 1 , duration: 1.5, ease: "power1.inOut" , x: "-=100" } , "<")

// GSDevTools.create({ animation: tl })

//Escribe el texto que existe aca
//TextPlugin
// gsap.to('p', {
//     text: "Luis Linares Design Engineering",
//     repeat: 1,
//     duration: 4,
//     ease: "power1.in",
// })

//maquina de escribir reemplazo efecto
//Con text
// gsap.from('p', {
//      text: "Im learning a lot of things about animation and I am loving it",
//      repeat: 1,
//      yoy:true,
//      duration: 4,
//   ease: "power1.in",
// })

gsap.to('p', {
    duration: 2,
    text: {
        value: "Analizando datos del sistema..",
        // " " asi lo hace palabra por palabra, si se pone "" lo hace letra por letra
        delimiter: " ",
        duration: 0.5,
    },
    ease: "none",
})

// gsap.to('.status', {
//     text: {
//         value: "Error: No se han encontrado datos",
//         newClass: "highlight",
//     },
//     duration: 0.5,
// })

//cambia el texto de un elemento a otro, con el tipo diff hace que solo cambie lo que es diferente entre el texto inicial y el final, haciendo una animacion mas fluida
gsap.to('.title', {
    text: {
        value: "Estamos en un mundo donde se aprenden pocas cosas",
        type: "diff",
    },
    duration: 0.5
})


// rtl (Right-to-Left)
// Muy útil si trabajas para mercados internacionales (árabe, hebreo) o si simplemente buscas un efecto creativo donde el texto parece "emerger" desde el final hacia el principio.
gsap.to(".footer-text", {
  text: {
    value: "¡Gracias por leer!",
    rtl: true
  },
  duration: 2
});

gsap.registerPlugin(TextPlugin);

