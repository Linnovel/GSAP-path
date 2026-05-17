import './style.css'
import gsap from 'gsap'


const charT = document.querySelector('.charH')
const charO = document.querySelector('.charO')
const charM = document.querySelector('.charM')
const charE = document.querySelector('.charE')
const dot = document.querySelector('.dot')


const dotTween = gsap.to('.dot', {
    backgroundColor: '#F93',
    x: 5,
    scale: 1.5,
    paused: true
})

const tweentT =  gsap.to('.charH', {
    color: 'white ',
    x: 10,
    paused: true
})

const tweentO =  gsap.to('.charO', {
    color: 'white',
        x: 10,
    paused: true
})

const tweentM =  gsap.to('.charM', {
color: 'white', 
        x: 10,
    paused: true
})

const tweentE =  gsap.to('.charE', {
    color: 'white',
        x: 10,
    paused: true
})

dot.addEventListener("mouseenter", () => {
    dotTween.play()
});

dot.addEventListener("mouseleave", () => {
    dotTween.paused()
});


charT.addEventListener("mouseenter", () => {
    tweentT.play()
    
});
charT.addEventListener("mouseleave", () => {
    tweentT.paused()
});

charO.addEventListener("mouseenter", () => {
    tweentO.play()
    
});
charO.addEventListener("mouseleave", () => {
    tweentO.paused()
});

charM.addEventListener("mouseenter", () => {
    tweentM.play()
    
});
charM.addEventListener("mouseleave", () => {
    tweentM.paused()
});

charE.addEventListener("mouseenter", () => {
    tweentE.play()
    
});
charE.addEventListener("mouseleave", () => {
    tweentE.paused()
});


