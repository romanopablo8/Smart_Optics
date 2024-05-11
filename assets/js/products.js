const divs = document.getElementsByClassName('bg-slate-50')
const body =document.getElementsByTagName('body') [0]
const boton =document.getElementById('boton')
const item3 =document.getElementById('item2')

//const divs1 = divs.style.backgroundColor('lightgreen')
console.log(divs)
console.log(boton)
const item2= botonHandleClick =()=>{
   
    const item2 =document.getElementById('item2')
    item2.style.backgroundColor ='red'
    const item3 =document.getElementById('item3')
    item3.style.backgroundColor ='red'
}
for( let div of divs) {
    console.log(div.backgroundColor('red'))
}
boton.addEventListener('clic',botonH)