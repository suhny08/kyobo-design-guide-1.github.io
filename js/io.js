
const targets = document.querySelectorAll("#section-img-3")

const options = {
    root: null, // null: default viewport 
    rootMargin: '0px',
    threshold: [1] // 0.3 or  [0, 0.25, 0.5, 0.75, 1]
};

let prevY = 0; 
let prevRatio = 0; 
let prevTop = 0;

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target

        const currY = entry.boundingClientRect.y
        const currRatio = entry.intersectionRatio        
        const currTop = entry.boundingClientRect.top


        prevY = currY
        prevRatio = currRatio 
        prevTop = currTop

    })
}, options)

targets.forEach((target) => {
    observer.observe(target)
})