const tab_m = document.querySelectorAll('main .tab_m a')
const cam_d = document.querySelectorAll('main .campaign_d')
const cam_1 = document.querySelector('main .campaign_d_1')
const cam_2 = document.querySelector('main .campaign_d_2')
const cam_3 = document.querySelector('main .campaign_d_3')
const cam_4 = document.querySelector('main .campaign_d_4')
const open_a = document.querySelector('main .campaign_d_1 > a')
const movie_wrap_3 = document.querySelector('main .campaign_d_1 .movie_wrap_3')
const movie_wrap_4 = document.querySelector('main .campaign_d_1 .movie_wrap_4')

cam_2.style.display = 'none'
cam_3.style.display = 'none'
cam_4.style.display = 'none'
movie_wrap_3.style.display = 'none'
movie_wrap_4.style.display = 'none'
let booooooool = true
open_a.addEventListener('click',(e)=>{
    e.preventDefault()
    if(bol == true){
        movie_wrap_3.style.display = 'flex'
        movie_wrap_4.style.display = 'flex'
        bol = false
    }else{
        movie_wrap_3.style.display = 'none'
        movie_wrap_4.style.display = 'none'
        bol = true
    }
})

//안내, 사용방법 클릭한 대상에 밑줄 표시
    tab_m.forEach((i,index)=>{
        console.log(i,index)
        i.addEventListener('click', (event)=>{
            event.preventDefault();
            for(let j of tab_m){j.classList.remove('active')}
            i.classList.add('active')
            //내용 추가
            for(let j of cam_d){j.style.display='none'}
            cam_d[index].style.display='block'
        })
    })

//스와이프
const swiper1 = new Swiper(".swiperd_1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
            delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
const swiper2 = new Swiper(".swiperd_4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
            delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });