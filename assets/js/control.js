export default function control(){
    const listItens = document.querySelectorAll('li')
    const body = document.querySelector('body')

    function page1(){
                    listItens[0].classList.add('focus')
                    listItens[1].classList.remove('focus')
                    listItens[2].classList.remove('focus')
                    body.classList.add('page1')
                    body.classList.remove('page2')
                    body.classList.remove('page3')
    }
    function page2(){
                listItens[0].classList.remove('focus')
                listItens[1].classList.add('focus')
                listItens[2].classList.remove('focus')
                body.classList.remove('page1')
                body.classList.add('page2')
                body.classList.remove('page3')
    }
    function page3(){
                listItens[0].classList.remove('focus')
                listItens[1].classList.remove('focus')
                listItens[2].classList.add('focus')
                body.classList.remove('page1')
                body.classList.remove('page2')
                body.classList.add('page3')
    }
    return{page1, page2, page3}
}