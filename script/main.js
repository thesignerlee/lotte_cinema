//첫 번째 슬라이더

const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 3,
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
//모바일 버전
const m_swiper = new Swiper(".m_swiper", {
    spaceBetween: 30,
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


//세 번째

    const swiper3 = new Swiper(".swiper3", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    //a를 누르면 img의 src가 바뀌는 구조, jpg, png 통합시키고 이름도 통합시키고 숫자만 다르게 만들기 인텍스로 처리할 것이기 때문에 숫자도 통일성없이 만들면 안 됨
//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)

const big = document.querySelector('.special_btm .big img')
const thum = document.querySelectorAll('.special_btm .list a')
console.log(big,thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기
        console.log(target)
        console.log(index)
        big.src =`./images/movie_tm/special_0${index}.jpg` /* ++는 안됨 */
    })
})
let active = true
for(let i of thum){
    i.addEventListener('mouseover',()=>{
        for(let j of thum){
            j.classList.remove('active')
        }
        i.classList.add('active')
    })
}