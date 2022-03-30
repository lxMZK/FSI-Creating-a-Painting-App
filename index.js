const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
let selectedColor = 'white'

painting.addEventListener('click',function(e){
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick',function(e){
    e.target.style.backgroundColor = 'white'
})

palette.addEventListener('click',function(e){
    selectedColor = e.target.id
})

let purp = palette.querySelector('#green').cloneNode()
purp.id = "purple"
purp.append(palette.querySelector('#green').textContent)
palette.append(purp)

let btn = document.createElement('h3')
btn.append('Clear Painting')
btn.addEventListener('click',function(){
    for(let i = 0; i < palette.childNodes.length; i++){
        palette.childNodes[i].style.backgroundColor = 'white'
    }
})
document.body.append(btn)