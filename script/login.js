const tab = document.querySelectorAll ('main .login > a')
const jo = document.querySelectorAll ('main .script >div')

console.log(tab,jo)

tab.forEach((i,index)=>{
    console.log(i,index)
    i.addEventListener('click', (event)=>{
        event.preventDefault(); //클릭한 대상 a의 이벤트를 막는다. a에 클릭 이벤트, 동적 기능 넣을 때 필수
        for(let j of tab){j.classList.remove('active')}
        i.classList.add('active')
        //내용 추가
        for(let j of jo){j.style.display='none'}
        jo[index].style.display='flex'
    })
})
