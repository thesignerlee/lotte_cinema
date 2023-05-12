const nav = document.querySelector('header nav')
const nav_sub = document.querySelectorAll('header nav ul li .sub')
const bg_nav = document.querySelector('header nav .bg_nav')
const bg_nav_a = document.querySelector('header nav .bg_nav a')
console.log(nav, nav_sub, bg_nav, bg_nav_a)
for(let i of nav_sub){
    i.style.display = 'none'
}
bg_nav.style.height = '0px'
bg_nav_a.style.opacity = '0'

nav.addEventListener('mouseover',()=>{
    for(let i of nav_sub){
        i.style.display = 'block'
    }
    bg_nav.style.height = '480px'
    bg_nav_a.style.opacity = '1'
})
nav.addEventListener('mouseout',()=>{
    for(let i of nav_sub){
        i.style.display = 'none'
    }
    bg_nav.style.height = '0'
    bg_nav_a.style.opacity = '0'
})

// 내비게이션 모바일 메뉴
// 데이터 변수 하나를 추가해서 true false 조정할 수 있게 만들기
let bol = true
const hamburger = document.querySelector('.hamburger')
const m_nav = document.querySelector('header .m_nav')
const nav_m_li = document.querySelectorAll('header .m_nav ul li')
const nav_m_sub = document.querySelectorAll('header .m_nav ul li .sub')
console.log(m_nav)
//클릭
hamburger.addEventListener('click',()=>{
    if(bol==true){
        //메뉴열림
            m_nav.style.display = 'block'
        bol=false
    }else{
        //메뉴닫기
            m_nav.style.display = 'none'
        bol=true
    }
})
for(let i of nav_m_sub){
    i.style.display = 'none'
}
//m_nav a 의 모든 변수
const m_nav_a = document.querySelectorAll('.m_nav > ul > li > a')
console.log(m_nav_a)
let bool = true
for(let i of m_nav_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(i)
        console.log(i.nextElementSibling)
        if(bool==true){
            for(let j of m_nav_a){
                    j.nextElementSibling.style.display = 'none'
            }
            i.nextElementSibling.style.display ='block'
            bool=false
        }else{
            for(let j of m_nav_a){
                j.nextElementSibling.style.display = 'none'
        }
        i.nextElementSibling.style.display ='none'
        bool=true
        }
    })
}