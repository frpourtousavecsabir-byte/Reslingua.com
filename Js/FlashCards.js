 let i = Number(localStorage.getItem('index')) || 0;


 const vocab = JSON.parse(localStorage.getItem('vocabToReviewUniqueWord'));
 const vocabAfterDelete = JSON.parse(localStorage.getItem('vocaAfterDelete'));
 
 const defVocab = JSON.parse(localStorage.getItem('defToReviewUniqueDef'));
 const contextVocab = JSON.parse(localStorage.getItem('contextToReviewUniqueContext'));
 const synonymeVocab = JSON.parse(localStorage.getItem('synonymeToReviewUniqueSynonyme'));
 const localDef = localStorage.getItem('def');
 
 
 const wordToMemorise = document.getElementById('wordToMemorise');
 const afficher = document.getElementById('afficher');
 wordToMemorise.textContent = vocab[i];
 wordToMemorise.classList.add('toMemorise');
 
 
 let value = i+1;
 const numeroMot = document.getElementById('numero-mot');
 numeroMot.textContent = i +1;
 let total = document.getElementById('total');
 total.textContent = vocab.length;
 console.log(total);
 
 document.querySelector('.progress').innerHTML = `<progress class="prog" value="${value}" max='${total.textContent}'></progress>`
 

   

 const wrd = document.createElement('p');
 const audio = document.createElement('p');
 const croixDef =  document.createElement('div');
 const def = document.createElement('p');
 const context = document.createElement('p');
 const contextExample = document.createElement('p');
 const synonyme = document.createElement('p');
 
 const difficulte = document.createElement('div');
 const difficile = document.createElement('button');
 const revoir = document.createElement('button');
 const facile = document.createElement('button');
 
 const fete = document.createElement('p');
 const sessionTermine = document.createElement('p');
 const wordRevise = document.createElement('p');
 const endDiv = document.createElement('div');
 const difficileWord = document.createElement('p');
 const revoirWord = document.createElement('p');
 const facileWord = document.createElement('p');
 const reviewAgain = document.createElement('div');
 const reRead = document.createElement('div');
 
 const defX = document.createElement('div');
 const index = localStorage.getItem('index');
 
 console.log(i);
 
 const delet = document.getElementById('delete');
 afficher.addEventListener('click', () => {
  delet.innerHTML = '<svg class="poubelle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8B1A10"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> <p>Delete</p>';
  delet.className = 'Delete';

   wordToMemorise.textContent ='';
  document.querySelector('.que-signifie').innerHTML = '';
  afficher.textContent ='';
  afficher.classList.remove('afficher-button');
  afficher.classList.remove('afficher-button-after');
  
  defX.className = 'defX';
  
  wrd.innerHTML = `${vocab[i]}`;
  wrd.className = 'wrd';
  
     audio.innerHTML = `<img class="parleur" src="svg/volume_up_24dp_RGB(86, 85, 85);_FILL0_wght400_GRAD0_opsz24.svg">`;
     
     
     
     def.innerHTML = `${defVocab[i]}`;
     def.className = 'def';
     
     context.textContent = 'CONTEXT';
     context.className = 'context';
     
     contextExample.textContent = `${contextVocab[i]}`;
     contextExample.className = 'contextExample';
     
     synonyme.textContent = `Synonyme: ${synonymeVocab[i]}`;
     synonyme.className = 'synonyme';
     
     difficulte.className =  'difficulte';
     
     difficile.innerHTML = `<button class="dif-button">✖</button>Difficult`;
     difficile.className = 'difficile';
     
     revoir.innerHTML = `<button class="rev-button">≈</button>Again`;
     revoir.className = 'revoir';
     
     facile.innerHTML = `<button class="fac-button">✔</button>Easy`;
     facile.className = 'facile';
     
     
     
     
     
     
     audio.addEventListener('click', () => {
       speechSynthesis.cancel();
       const audioWord = new SpeechSynthesisUtterance(wrd.textContent);
       audioWord.lang = "fr-FR";
       speechSynthesis.speak(audioWord);
      });
          
        
        
      
      
        
      
        
        croixDef.appendChild(defX);
        defX.appendChild(wrd);
        defX.appendChild(audio);
        croixDef.appendChild(def);
        croixDef.appendChild(context);
        croixDef.appendChild(contextExample);
        croixDef.appendChild(synonyme);
        croixDef.appendChild(difficulte);
        difficulte.appendChild(difficile);
        difficulte.appendChild(revoir);
        difficulte.appendChild(facile);
        
        
        contDef.appendChild(croixDef);
        
        
      })

      delet.addEventListener('click', ()=> {
        vocab.splice(i, 1);
        defVocab.splice(i, 1);
        contextVocab.splice(i, 1);
        synonymeVocab.splice(i, 1)
        wrd.innerHTML = `${vocab[i]}`;
         def.innerHTML = `${defVocab[i]}`;
         contextExample.textContent = `${contextVocab[i]}`;
         synonyme.textContent = `Synonyme: ${synonymeVocab[i]}`;

         localStorage.setItem('vocaAfterDelete', JSON.stringify(vocab));

        total.textContent = vocab.length ;
        console.log(total.textContent);
        console.log(vocab);

        delet.innerHTML = '';
        delet.classList.remove('Delete');
        contDef.textContent = '';
        wordToMemorise.textContent =vocab[i];
         document.querySelector('.que-signifie').innerHTML = 'What does this mean?';
        afficher.innerHTML = `Show meaning`;
        afficher.classList.add('afficher-button-after');
        end();
      });
      
      
      
      function motSuivant () {
       i++;
        delet.innerHTML = '';
        delet.classList.remove('Delete');
        localStorage.setItem('index', i);
        numeroMot.textContent++;
        value = numeroMot.textContent;
        document.querySelector('.progress').innerHTML = `<progress class="prog" value="${value}" max='${total.textContent}'></progress>`;
        
        
        contDef.textContent = '';
        wordToMemorise.textContent =vocab[i];
        localStorage.setItem('wordToMemorise', wordToMemorise.innerHTML);
        
        document.querySelector('.que-signifie').innerHTML = 'What does this mean?';
        afficher.innerHTML = `Show meaning`;
   afficher.classList.add('afficher-button-after');
   end();
}

function end() {
if(Number(numeroMot.textContent) > Number(total.textContent)) {

     document.querySelector('.num-quitter').innerHTML = '';
     console.log('go');
     wordToMemorise.textContent ='';
     document.querySelector('.que-signifie').innerHTML = '';
     afficher.innerHTML ='';
     contDef.textContent = '';
     
     afficher.classList.remove('afficher-button');
     afficher.classList.remove('afficher-button-after');
     
     
   
   fete.textContent = '🎉';
   fete.className = 'fete'
   
  sessionTermine.textContent = 'Session completed!';
  sessionTermine.className= 'sessionTermine';

  wordRevise.textContent = total.textContent + ' ' + 'word reviewed';
  wordRevise.className = 'wordRevise'
  
  endDiv.className = 'endDiv';
  
  difficileWord.innerHTML = `<button class="difficultNum">${difficultNum}</button> <p class='wordNumDifficulty'>difficult</p>`;
  
  revoirWord.innerHTML = `<button class="revoirNum">${revoirNum}</button> <p class='wordNumDifficulty'>to review</p>`;
  
  facileWord.innerHTML = `<button class="facileNum">${facileNum}</button> <p class='wordNumDifficulty'>easy</p>`;
  
  reviewAgain.innerHTML = 'Review again';
  reviewAgain.className = 'reviewAgain';
  reviewAgain.addEventListener('click', () => {
    removeIndex();
  });
  
  reRead.innerHTML = 'Re-read';
  reRead.className = 'reread';
  
  reRead.addEventListener('click', () => {
    window.location.href='Reading2.html';
    removeIndex();
  })

  contDef.append(fete);
  contDef.append(sessionTermine);
  contDef.append(wordRevise);
  contDef.append(endDiv);
  endDiv.append(difficileWord);
  endDiv.append(revoirWord);
  endDiv.append(facileWord);
  contDef.append(reviewAgain);
  contDef.append(reRead);
}
}


reviewAgain.addEventListener('click', ()=> {
  window.location.href ='FlashCards.html'
});

let facileNum = i;
facile.addEventListener('click', () => {
  facileNum++;
 motSuivant();
})

let revoirNum = i;
revoir.addEventListener('click', () => {
  revoirNum++;
 motSuivant();
})



const missingWord = document.createElement('p');
const defEng = document.createElement('p');
const defEngDiv = document.createElement('div');
const defEngBUtton1 = document.createElement('button');
const defEngBUtton2 = document.createElement('button');
const defEngBUtton3 = document.createElement('button');
const pass = document.createElement('div');

let randomButton = Math.random();
let randomOthers = [...vocab];
randomOthers.splice(i, 1);
randomOthers.sort((random1, random2)=> {
return Math.random() - 0.5;
})
console.log(randomOthers);
console.log(vocab[i]);
console.log(randomOthers[0]);
console.log(randomOthers[1]);


let difficultNum = i;
difficile.addEventListener('click', () => {
  difficultNum++;

delet.innerHTML = '';
delet.classList.remove('Delete');

 contDef.textContent = '';
 missingWord.textContent = 'Choose the correct word';
 missingWord.className = 'choose';
 
 defEng.textContent = `${defVocab[i]}`;
 defEng.className = 'defEng';
 
 defEngBUtton1.className ='defEngBUtton1'
 defEngBUtton2.className ='defEngBUtton2'
 defEngBUtton3.className ='defEngBUtton3'
 
 pass.innerHTML = 'Pass';
 pass.classList.add('pass');

 defEngDiv.className = 'defEngDiv';

 defEngBUtton1.addEventListener('click', () => {
    if(defEngBUtton1.innerHTML === vocab[i]) {
      defEngBUtton1.className = 'defEngBUtton-right';
      motSuivant();
  } else {
    defEngBUtton1.className = 'defEngBUtton-wrong';
  }
 });

 defEngBUtton2.addEventListener('click', () => {
    if(defEngBUtton2.innerHTML === vocab[i]) {
      defEngBUtton2.className = 'defEngBUtton-right';
      motSuivant();
  } else {
    defEngBUtton2.className = 'defEngBUtton-wrong';
  }
 });

 defEngBUtton3.addEventListener('click', () => {
    if(defEngBUtton3.innerHTML === vocab[i]) {
      defEngBUtton3.className = 'defEngBUtton-right';
      motSuivant();
  } else {
    defEngBUtton3.className = 'defEngBUtton-wrong';
  }
 });

 if(randomButton >= 0 && randomButton <1/3) {
   defEngBUtton1.innerHTML = `${vocab[i]}`;
    defEngBUtton2.innerHTML =  `${randomOthers[0]}`;
    defEngBUtton3.innerHTML =  `${randomOthers[1]}`;
 } else if (randomButton >= 0 && randomButton <2/3) {
   defEngBUtton2.innerHTML =  `${vocab[i]}`;
   defEngBUtton1.innerHTML =  `${randomOthers[0]}`;
  defEngBUtton3.innerHTML =  `${randomOthers[1]}`;
 } else {
   defEngBUtton3.innerHTML = `${vocab[i]}`;
   defEngBUtton1.innerHTML =  `${randomOthers[0]}`;
  defEngBUtton2.innerHTML =  `${randomOthers[1]}`;
 }

 

 contDef.appendChild(missingWord);
 contDef.appendChild(defEng);
 contDef.appendChild(defEngDiv);
 defEngDiv.appendChild(defEngBUtton1);
 defEngDiv.appendChild(defEngBUtton2);
 defEngDiv.appendChild(defEngBUtton3);
 contDef.appendChild(pass);

})

pass.addEventListener('click', ()=> {
  motSuivant();
});

function removeIndex() {
  i=0;
  localStorage.removeItem('index');
}
document.getElementById('quit').addEventListener('click', ()=> {
 removeIndex();
})

