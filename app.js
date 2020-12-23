const btns = document.querySelectorAll('.button')
const body = document.querySelector('body')

//Mi solución
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        body.style.backgroundColor = btns[i].id
    })
}

//solución Oscar
// btns.forEach(addButtonListener)

// function addButtonListener(button){
//     button.addEventListener('click', (e) => {
//         body.style.backgroundColor = e.target.id
//     })
// }


