

const input = document.getElementById('inpuut');
const commencer = document.getElementById('commencer');
const name = document.getElementById('input-name');

 
input.classList.add('input');
commencer.disabled = true;
if(commencer.disabled) {
 commencer.classList.add('commencer-disabled');
}
input.addEventListener('input', function() {
    if(input.value.length >= 2) {
      commencer.disabled = false;
      commencer.classList.remove('commencer-disabled');
      name.textContent =`Bonjour, ${input.value} 🫡 `;
      commencer.classList.add('active');
      
    } else {
      name.textContent =``;
      commencer.classList.remove('active');
      commencer.classList.add('commencer-disabled');
    }
    localStorage.setItem('name', input.value);
    console.log(localStorage.getItem('name'));
  }) 

  commencer.addEventListener('click', () => {
    if (commencer.classList.contains('active')) {
     
      window.location.href = 'Reading2.html';
    }
  }) 

function profileLink() {
  window.location.href = 'https://preply.com/fr/tuteur/6178301'
}


  
 

