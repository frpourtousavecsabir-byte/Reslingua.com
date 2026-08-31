

const input = document.getElementById('inpuut');
const commencer = document.getElementById('commencer');
const name1 = document.getElementById('input-name');

 
input.classList.add('input');
commencer.disabled = true;
if(commencer.disabled) {
 commencer.classList.add('commencer-disabled');
}
input.addEventListener('input', function() {
    if(input.value.length >= 2) {
      commencer.disabled = false;
      commencer.classList.remove('commencer-disabled');
      let saber = input.value.charAt(0).toUpperCase() +  input.value.slice(1).toLowerCase()
      name1.textContent =`Bonjour, ${saber} 🫡 `;
      commencer.classList.add('active');
      
      
    } else {
      name1.textContent =``;
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




  
 

