

let img3 = document.getElementById('section-img-3')

window.addEventListener('scroll', () => {
    
    let a=360/1000, b=-198
    let scrolled = window.scrollY * a + b // from 0 to 360
    // x : 555 = scrolled : 360
    // scrolled * 555 = x * 360
    // x = (scrolled*555)/360

    if (scrolled >= 50 && scrolled <= 300) {
        let tmp = (scrolled*555)/360
        // img3.style.left = tmp + 'px'
        // img3.style.transform.translateX = scrolled + 'px'
        img3.style.transform = "translateX(" + scrolled + "px)"
        console.log(tmp)
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
    innerWidth = window.innerWidth
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