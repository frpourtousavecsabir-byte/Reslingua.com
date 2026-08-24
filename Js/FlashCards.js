 let i = 0;
 const vocab = JSON.parse(sessionStorage.getItem('vocabToReview'));
 const defVocab = JSON.parse(sessionStorage.getItem('defToReview'));
 const contextVocab = JSON.parse(sessionStorage.getItem('contextToReview'));
 const synonymeVocab = JSON.parse(sessionStorage.getItem('synonymeToReview'));
 const localDef = sessionStorage.getItem('def');
 
 
 const wordToMemorise = document.getElementById('wordToMemorise');
 const afficher = document.getElementById('afficher');
 wordToMemorise.textContent = vocab[0];
 wordToMemorise.classList.add('toMemorise');
 console.log(vocab);
 
 
 let value =1;
 const numeroMot = document.getElementById('numero-mot');
 numeroMot.textContent = 1;
 const total = document.getElementById('total');
 total.textContent = vocab.length;
 
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
 
 
 afficher.addEventListener('click', () => {
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
      
      
      function motSuivant () {
        i++;
        numeroMot.textContent++;
        value = numeroMot.textContent;
        document.querySelector('.progress').innerHTML = `<progress class="prog" value="${value}" max='${total.textContent}'></progress>`;
        
        
        contDef.textContent = '';
        wordToMemorise.textContent =vocab[i];
        sessionStorage.setItem('wordToMemorise', wordToMemorise.innerHTML);
        
        document.querySelector('.que-signifie').innerHTML = 'What does this mean?';
        afficher.innerHTML = `Show meaning`;
   afficher.classList.add('afficher-button-after');
   
   
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
  
  reRead.innerHTML = 'Re-read';
  reRead.className = 'reread';
  
  reRead.addEventListener('click', () => {
    window.location.href='Reading2.html'
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

let facileNum = 0;
facile.addEventListener('click', () => {
  facileNum++;
 motSuivant();
})

let revoirNum = 0;
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


let difficultNum = 0;
difficile.addEventListener('click', () => {
  difficultNum++;

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

