let color = document.querySelector('#color-1')
let place =  document.querySelector('#place')
let ritual = document.querySelector('#ritual')


function handleColor(e) {
    alert('Black is my favorite color')
}


const handlePlace = (e) => {
    alert('Dubai is one of my favorite places')
}


const handleRitual = e => alert('Eid adha is my favorite ritual')





color.addEventListener('click', handleColor)
place.addEventListener('click', handlePlace)
ritual.addEventListener('click', handleRitual)
