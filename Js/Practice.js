const wordsNum = JSON.parse(localStorage.getItem('vocabToReviewUniqueWord')).length;


let cartes = JSON.parse(localStorage.getItem('cartes')) ||  [];
console.log(cartes);

const cartesToAdd = document.getElementById('cartesToAdd');


cartes.forEach((element, index) => {

      const allCart = document.createElement('div');
      allCart.className = 'allCart'
      allCart.innerHTML = `<div class="div" style="margin-top:1rem">
      <div>
      <div id="threePointCart"></div>
      <div class="word-auto">
      <span class="myWords">${element.cartName}</span>
      <p class="word-auto"><span class="auto">Personal</span><svg id="threePoint" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6a5417"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></p>
      </div>
      <p class="sub">${element.Description}</p>
           </div>
           <div class="allWordNumber">
           <div class="word-number">
           <button class="num" id="wordsNum">0</button>
           <span class="word" >Words</span>
              </div>
              <div class="word-number">
              <button  class="num2" >0</button>
              <span class="word2" >To review</span>
              </div>
              <div class="word-number">
              <button class="num3" >0</button>
              <span class="word3" >Mastered</span>
              </div>
              </div>
              <a class="parcticeAdd" id="start"><button class="commencerPersonal"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff9e9"><path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"/></svg> Practice</button ><button class="commencerPersonal"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff9e9"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg><span>add word</button></span></a>
              </div>`
              
              cartesToAdd.appendChild(allCart);
              const threePoint = document.getElementById('threePoint');
      threePoint.onclick = () => {
        cartes.splice(0, 1);
        localStorage.setItem('cartes', JSON.stringify(cartes));
        location.reload();
      };
    });
    



const wordsNumId = document.getElementById('wordsNum');
const commencer = document.getElementById('start');
const add = document.getElementById('add');

wordsNumId.textContent = wordsNum;



commencer.addEventListener('click', ()=> {
  if(wordsNum === 0) {
       alert('Add new words');
      } else {
        window.location.href = 'FlashCards.html'
      }
     });
     
     const contBlurr = document.getElementById('contBlurr');
     const mainBlurr = document.getElementById('mainBlurr');
     const contCart = document.getElementById('contCart');
     const page = document.createElement('div');
     const doneCancel = document.createElement('div');
     const done = document.createElement('button');
     const cancel = document.createElement('button');
     const groupVocab = document.createElement('div');
     const vocaName = document.createElement('div');
     const vocaDescription = document.createElement('div');
     
     
     
     
     add.textContent = '+';
     add.classList.add('add');
     
     function addFunc() {
       
     

       
       
       
       add.classList.remove('add');
       add.textContent = ''
       
        contBlurr.className = 'contBlurr';
        page.className = 'page';
        
        doneCancel.className = 'doneCancel';
        
        done.className = 'done';
        done.innerHTML = '✔'
        
        cancel.className = 'cancel';
        cancel.innerHTML = '✘'
        
        
        vocaName.innerHTML= `<input id="vocaNameInput" class="vocaNameInput1" placeHolder="Name">`;
        const vocaNameInput = document.getElementById('vocaNameInput');

        vocaDescription.innerHTML= `<input id="vocaDescriptionInput" class="vocaNameInput2" placeHolder="Description">`;
        const vocaDescriptionInput = document.getElementById('vocaDescriptionInput');
        
        
        
        contCart.appendChild(page);
        mainBlurr.appendChild(contBlurr);
        mainBlurr.appendChild(contCart);
        page.appendChild(doneCancel);
        doneCancel.appendChild(cancel);
        doneCancel.appendChild(done);
        page.appendChild(groupVocab);
        groupVocab.appendChild(vocaName);
        groupVocab.appendChild(vocaDescription);
        
        
        cancel.onclick = ()=> {
          localStorage.removeItem('add')
          contBlurr.remove();
          contCart.remove();
          add.className = 'add';
          add.textContent = '+'
       };

       
       done.onclick = ()=> {
           localStorage.removeItem('add')
           contBlurr.remove();
            contCart.remove();
            add.className = 'add';
         add.textContent = '+'
         let cartObject = {};
         cartObject.cartName = `${vocaNameInput.value}`;
         cartObject.Description = `${vocaDescriptionInput.value}`;
         console.log(cartObject);
         cartes.push(cartObject);
         console.log(cartes);
         localStorage.setItem('cartes', JSON.stringify(cartes));
         location.reload();

         }
      };
    
    add.addEventListener('click', () => {
       cartes = JSON.parse(localStorage.getItem('cartes'));
       addFunc();
       localStorage.setItem('add', addFunc());
      });
      
   if( localStorage.getItem('add')) {
   addFunc();
   console.log('saber');
   }
       
   
   
