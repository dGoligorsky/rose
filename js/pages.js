let pageNumber = 0

const pages = [
    {copy: "a Brooklyn-based graphic designer", background: "#edc7a9", circle: "#3e78ed"},
    {copy: "Leonard Cohen's biggest fan", background: "#a1fffe", circle: "#e34a47"},
    {copy: "looking for a job at the start of October", background: "#d3c7f3", circle: "#f7fe00"},
    {copy: `letting you <a href="pdf.pdf">download er PDF<a/>`, background: "#faffb8", circle: "#b472e6"}
]

// pick the relevant tags
const  nextTag = document.querySelector("footer img.next")
const  prevTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")


// make a next and previous function
const next = function () {
    pageNumber += 1

    if (pageNumber > pages.length - 1){
        pageNumber = 0
    }
    
    updateSection()
}

const previous = function () {
    pageNumber -= 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

// pick a random slide
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateSection()
}

// keep the page number up to date
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
}

// listen for the clicks and update content
nextTag.addEventListener("click", function(){
    next()
})

prevTag.addEventListener("click", function() {
    previous()
})

randomTag.addEventListener("click", function () {
    random()
})

document.addEventListener("keyup", function(event){
    console.log(event)

    if(event.key == "ArrowRight") {
        next()
    }

    if(event.key == "ArrowLeft") {
        previous()
    }
})