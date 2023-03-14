//  capturamos los inputs
 const names = document.querySelector('#name');
  const number = document.querySelector('#phone');
  const adress = document.querySelector('#adress');
  const btnRemove = document.getElementsByClassName('btnRemove')
      
  
  
  // agregar contactos
  const btn = document.querySelector('#btnAgregar');
  btn.addEventListener('click', function() {
    window.location.href = `agregar/${names.value}/${number.value}/${adress.value}`;
    console.log('Funciona');
  });
      


// eliminar contactos

const remove = Array.from(btnRemove).forEach((button) =>{
button.addEventListener('click',()=>{
  let id = event.target.getAttribute('id')
  window.location.href = `borrar/${id}`
  console.log("hola mundo")
})
})


// Selecciona todos los elementos con el id 'contact'
const container = document.querySelectorAll('#contact');

// Itera a través de cada contacto
container.forEach(e => {
  // Añade un evento 'click' a cada contacto
  e.addEventListener('click', () => {
    // Añade o remueve la clase 'selected' cuando se selecciona/deselecciona un contacto
    e.classList.toggle('selected');
  });
});
