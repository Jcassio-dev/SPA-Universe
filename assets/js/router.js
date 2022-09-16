import control from "./control.js";
export class Router{
    routes= {}
    add(routeName, page){
        this.routes[routeName] = page
    }


    route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
    }


    handle(){
        const { pathname } = window.location
        

        const route = this.routes[pathname] || this.routes[404]

        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html

            switch(pathname){
                case '/':
                    control().page1()
                    break;
                case '/universe':
                    control().page2()
                    break;
                case '/exploration':
                    control().page3()
                    break;
            }
        })
    }

}