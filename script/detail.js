// 썸네일 동영상용 

    const swiper = new Swiper(".thum_s", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".big_s", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

//    플립 포스터용

    const swiper3 = new Swiper(".swiper_3", {
      effect: "flip",
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const swiper4 = new Swiper(".swiper_4", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
    disableOnInteraction: false,
  },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const a_d = document.querySelectorAll('.campaign_s_5 .gwanram .g_right > a')
    for(let i of a_d){
      i.addEventListener('click',(e)=>{
        e.preventDefault()
        alert('로그인이 필요한 서비스입니다.')
      })
    }
    
    const star1 = document.querySelectorAll('.campaign_s_5 .gwanram .g_right .star a:nth-child(odd)')
    const star2 = document.querySelectorAll('.campaign_s_5 .gwanram .g_right .star a:nth-child(even)')
    console.log(star1, star2)
    for(let i of star1){
      i.addEventListener('mouseover',()=>{
        i.style.background = 'url(./images/detail/star_02.png)'
      })
    }
    for(let i of star2){
      i.addEventListener('mouseover',()=>{
        i.style.background = 'url(./images/detail/star_03.png)'
      })
    }

    // 크게
    const view = document.querySelector('.project_view')
    const view2 = document.querySelector('.project_view2')
    const steal = document.querySelectorAll('.campaign_s_4 .swiper_3 .swiper-wrapper .swiper-slide a')
    const poster = document.querySelectorAll('.campaign_s_4 .swiper_4 .swiper-wrapper .swiper-slide a')
    let imgT = document.createElement('img')
    console.log(steal,poster,imgT)
    view.style.display = 'none'
    view2.style.display = 'none'
    view.addEventListener('click',()=>{
      view.style.display = 'none'
  })
    view2.addEventListener('click',()=>{
      view2.style.display = 'none'
  })
  steal.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()//href 링크막기
        imgT.src = `./images/steal_cut/image0${i}.jpg` /* 이미지 이름 통일시키고 숫자만 바꿔서 관리하기 */
        console.log(imgT)
        view.style.display = 'block'
        view.children[0].appendChild(imgT)
    })
})
  poster.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()//href 링크막기
        imgT.src = `./images/poster/image0${i}.jpg` /* 이미지 이름 통일시키고 숫자만 바꿔서 관리하기 */
        console.log(imgT)
        view2.style.display = 'block'
        view2.children[0].appendChild(imgT)
    })
})