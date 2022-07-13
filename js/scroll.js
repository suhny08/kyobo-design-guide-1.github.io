

let img3 = document.getElementById('section-img-3')
let inWidth = window.innerWidth

window.addEventListener('scroll', () => {
    
    let a=360/1000, b=-300
    let scrolled = window.scrollY * a + b // from 0 to 360

    if (scrolled >= 10 && scrolled <= 200) { // 
        let tmp = (scrolled*inWidth)/360
        let x = (tmp/inWidth)*100

        if (x > 47) x = 47
        img3.style.left = x + 'vw'
        // img3.style.transform.translateX = scrolled + 'px'
        // img3.style.transform = "translateX(" + tmp + "px)"
        img3.style.transition = "all 0.1s"
        console.log((tmp/inWidth)*100)
    }
    

    // let rect = img3.getBoundingClientRect();
    // if ( rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // ) {
    //     console.log('is in ')
    // }


})



window.addEventListener('resize', () => {
    inWidth = window.innerWidth
})




// var box = $("header .bar")
// function getProgressBar(){
//     var sectionHeight = $(".wrap-contents").height()
//     var scrollHeight = sectionHeight - $(window).height()
//     var scrollTop = $(window).scrollTop()
//     var scrollPercent = scrollTop / scrollHeight * 100
//     percentText(scrollPercent)
// }

// function percentText(scrollPercent){
//     box.css({
//         width:scrollPercent+"%"
//     })
// }