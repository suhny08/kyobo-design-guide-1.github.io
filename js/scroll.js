

let img3 = document.getElementById('section-img-3')
let img4 = document.getElementById('section-img-4').getElementsByTagName('img');

let inWidth = window.innerWidth

window.addEventListener('scroll', () => {
    
    // 모바일인경우 from 0 to 360 
    // 웹인경우 다시 계산
    let a=360/1000, b=-300
    let scrolled = window.scrollY * a + b

    if (scrolled >= 10 && scrolled <= 200) { 
        let tmp = (scrolled*inWidth)/360
        let x = (tmp/inWidth)*100

        if (x > 49) x = 49
        img3.style.left = x + 'vw'
        img3.style.transition = "all 0.1s"
    }

    // img4 1180 ~ 1700
    let img4_x=360/520, img4_y=-817
    let scrolled2 = window.scrollY * a + b
    
    if (scrolled >= 70 && scrolled <= 300) {
        let tmp = (scrolled*inWidth)/360
        let x = (tmp/inWidth)*100

        img4[0].style.paddingRight = x + 'px'
        img4[0].style.transition = "all 0.1s"

        img4[2].style.paddingLeft = x + 'px'
        img4[2].style.transition = "all 0.1s"
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