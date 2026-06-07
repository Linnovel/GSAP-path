import "../challengeOne.css"
import gsap from "gsap"
import { GSDevTools } from "gsap/GSDevTools"
import { TextPlugin } from "gsap/TextPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(TextPlugin, GSDevTools, SplitText)

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

// gsap.to("p", {
//   duration: 2,
//   text: {
//     value: "Analizando datos del sistema..",
//     // " " asi lo hace palabra por palabra, si se pone "" lo hace letra por letra
//     delimiter: " ",
//     duration: 5,
//   },
//   ease: "none",
// })

// // gsap.to('.status', {
// //     text: {
// //         value: "Error: No se han encontrado datos",
// //         newClass: "highlight",
// //     },
// //     duration: 0.5,
// // })

// //cambia el texto de un elemento a otro, con el tipo diff hace que solo cambie lo que es diferente entre el texto inicial y el final, haciendo una animacion mas fluida
// // gsap.to(".title", {
// //   text: {
// //     value: "Estamos en un mundo donde se aprenden pocas cosas",
// //     type: "diff",
// //   },
// //   duration: 0.5,
// // })

// // the target can be selector text, an element, or an Array of elements
// let splitExample = SplitText.create(".headline")

// // Array of characters
// splitExample.chars

// // Array of words
// splitExample.words

// // Array of lines
// splitExample.lines

// //SplitText
// let split
// let animation = gsap.timeline({})

// function init() {
//   gsap.set(".wrapper", { autoAlpha: 1 })

//   // 1. Si el split ya existe, lo revertimos antes de volver a crearlo
//   if (split) {
//     split.revert()
//   }

//   // 2. Creamos el split
//   split = new SplitText(".wrapper h1", { type: "chars" })

//   // 3. Animamos
//   animation.from(split.chars, {
//     opacity: 0,
//     y: 50,
//     ease: "back.out(1.7)", // Un poco de "rebote" le da vida
//     stagger: 0.05,
//   })
//   GSDevTools.create({ animation: animation })
// }

// init()

// let splitTwo = SplitText.create(".text", {
//   type: "words, lines",
//   mask: "lines",
//   charsClass: "char++", // Clase personalizada para caracteres
//   // charsClass: "", // Clase personalizada para caractereso
// })

// gsap.to(splitTwo.words, {
//   y: 100,
//   autoAlpha: 0,
//   stagger: {
//     amount: 2, // Duración total del stagger
//     each: 0.1,
//     //         repeat: -1,
//     // yoyo: true,
//     ease: "power2.in",
//     // axis: "x", // "x" o "y"
//     //cuando usamos form crea un delay entre cada palabra, con fromTo no se puede usar el delay, pero con stagger si, y se puede configurar de diferentes formas, como por ejemplo cada 0.1 segundos, o cada 0.1 segundos empezando desde el centro, o desde el final, o desde un índice específico
//     from: "center", // "start", "center", "end", o un índice específico
//   },
// })




// //Carusel
// //Empecemos con un carusel
// const track = document.querySelector(".carousel-track")
// const tl = gsap.timeline({ repeat: -1})
// tl.to(track, {
//     xPercent: -125,
// duration: 4,


//Aprender mas sobre timeline, pero con los textPlugin

// let splitText = SplitText.create(".overviewHeader", { type: "words, chars" })

// gsap.from(splitText.chars, {
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.01,
// })

//Forma mas actual y mejor la verdad
// SplitText.create(".overviewHeader", {
//     type: "words, chars",
//     onSplit(selft) {
//        return gsap.from(selft.words, {
//          y: "random(-100, 100)",
//             duration: 1,
//             ease: "power2.inOut",
//             autoAlpha: 0,
//             stagger: 0.05,
//             onComplete: () => split.revert()
//         })
//     }
// })


const split = new SplitText(".overviewHeader", { type: "words, chars" })

//Mover esto al Gsap Libreria
const tl = gsap.timeline()

tl.to('.column', {
    height: "0%",
    stagger: {
  amount: 0.5,
  from: "random", // "edges" hace que empiece por la primera y la última
  ease: "powe2.out",
}
}).from(split.words, {
    y: 0,
    ease: "power2.inOut",
    autoAlpha: 0,
    stagger: {
        amount: 2, //duracion del stagger
        each: 0.1,
        // repeat: -1,
    },
}, "<" ).to('.first-text', {
    y: 0,
        duration: 0.8,
    ease: "power2.out",
    })
.to('.second-text', {
    y: 0,
    duration: 0.8,
    ease: "power2.out",
}, ">")  
.to('.third-text', {
    y: 0,
    duration: 0.8,
    ease: "power2.out",
})
.to('body', {
    backgroundColor: "#222",
    color: "#eee",
    duration: 1,
    ease: "power2.out",
}).to('.column', { height: "100%", duration: 0.5, stagger: { amount: 0.5, from: "random" } })
 


// const columnsFall = gsap.timeline({ease: "power2.inOut", duration: 0.5 })

// columnsFall.to('.column1', {
//    height: "100%",
// }).to('.column2', {
//     height: "100%",
// }, 1).to('.column3', {
//     height: "100%",
// }).to('.column4', {
//     height: "100%",
// }).to('.column5', {
//     height: "100%",
// }).to('.column6', {
//     height: "100%",
// }).to('.column7', {
//     height: "100%",
// }).to('.column8', {
//     height: "100%",
// }).to('.column9', {
//     height: "100%",
// }).to('.column10', {
//     height: "100%",
// }).to('.column11', {
//     height: "100%",
// }).to('.column12', {
//     height: "100%",
// }) 

