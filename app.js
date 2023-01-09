let div = document.getElementById('div')
let div2 = document.getElementById('div2')

function Params(...params){
    div.innerHTML='Bonjour';
    for( let text of params){
        div.innerHTML+= text
    }
}

Params('à tous ')

function varParams2 (...params) {
    for (let i of params)
        if (!isNaN(i)){
            let newDiv = document.createElement('div')
            newDiv.innerHTML = i
            document.body.appendChild(newDiv)
        }
}

