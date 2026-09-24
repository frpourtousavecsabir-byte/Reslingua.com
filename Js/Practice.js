


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
      <p class="word-auto"><span class="auto">Personal</span><svg class='js-threePoint' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#6a5417"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></p>
      </div>
      <p class="sub">${element.Description}</p>
           </div>
           <div class="allWordNumber">
           <div class="word-number">
           <button class="num" id="wordsNum">${element.wordMeaningCarts.length}</button>
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
              
              <div class="parcticeAdd" id="start">

              <button class="commencerPersonal1 PracticeWordMean">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9e7e28"><path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"/></svg>
               <span>&nbsp;Practice &nbsp;</span>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9e7e28"><path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/></svg>
              </button>
              
              <button class="commencerPersonal2 js-commencerPersonal">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9e7e28"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
              <span>&nbsp;Add word</span>
              </button>
              </div>`
              
              cartesToAdd.appendChild(allCart);

              
            });
            const threePoint = document.querySelectorAll('.js-threePoint');
            threePoint.forEach((element, index) => {

                element.addEventListener('click', () => {
                  localStorage.setItem('index', index);
                  cartes.splice(index, 1);
                  console.log(cartes);
                  localStorage.setItem('cartes', JSON.stringify(cartes));
                   
                  location.reload();

                }) 
            });
    const addd =  document.querySelectorAll('.js-commencerPersonal');
    addd.forEach((element, index) => {

                element.addEventListener('click', () => {
                  localStorage.setItem('index', index);
                  
                  console.log(index);
                  window.location.href = 'AddWordsToCart.html';
                }) 
            });
    const practice =  document.querySelectorAll('.PracticeWordMean');
    practice.forEach((element, index) => {
                 element.addEventListener('click', () => {
                   localStorage.setItem('index', index);
                   console.log(index);
                  if(cartes[index].wordMeaningCarts.length <1) {
                    alert('Add some words first!');
                  } else {
                    window.location.href = 'PracticeWordMean.html';
                  }
                 
      });
    })
     


const wordsNumId = document.getElementById('wordsNum');
const commencer = document.getElementById('start');
const add = document.getElementById('add');

wordsNumId.textContent = wordsNum;



commencer.addEventListener('click', ()=> {
  if(wordsNum === 0) {
       alert('Add some words first!');
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
     const vocaNameSvg = document.createElement('div');
     const vocaName = document.createElement('div');
     const vide = document.createElement('div');
     const vocaDescriptionSvg = document.createElement('div');
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
        
        groupVocab.className = 'groupVocab'
        
        
        vocaNameSvg.innerHTML= `<p style="margin-left:3rem; display:flex; align-items:center;"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#531607"><path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z"/></svg> <span>Name</span>`;

        vocaName.innerHTML= `<input id="vocaNameInput" class="vocaNameInput1" placeHolder="Ex: Vocabulaire, Grammaire...">`;
        
        vocaDescriptionSvg.innerHTML= `<p style="margin-left:3rem; display:flex; align-items:center;" ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#531607"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg> <span>Description</span></p>`;
        vocaDescription.innerHTML= `<input id="vocaDescriptionInput" class="vocaNameInput2" placeHolder="Add a small description(optional)">`;
        
        contCart.appendChild(page);
        mainBlurr.appendChild(contBlurr);
        mainBlurr.appendChild(contCart);
        page.appendChild(doneCancel);
        doneCancel.appendChild(cancel);
        doneCancel.appendChild(done);
        page.appendChild(groupVocab);
        groupVocab.appendChild(vocaNameSvg);
        groupVocab.appendChild(vocaName);
        groupVocab.appendChild(vide);
        groupVocab.appendChild(vocaDescriptionSvg);
        groupVocab.appendChild(vocaDescription);
        
        const vocaNameInput = document.getElementById('vocaNameInput');
        const vocaDescriptionInput = document.getElementById('vocaDescriptionInput');
        
        cancel.onclick = ()=> {
          localStorage.removeItem('add')
          contBlurr.remove();
          contCart.remove();
          add.className = 'add';
          add.textContent = '+'
        };
        
        
        
      done.onclick = ()=> {
        if(vocaNameInput.value.trim() === ''.trim()) {
         console.log('hello');
        vocaNameInput.classList.add('vocaNameAfter1');
         vide.className= 'vide';
         vide.textContent= 'The name can not be empty!'
         return  cartes;
        } else {
          localStorage.removeItem('add')
          contBlurr.remove();
          contCart.remove();
          add.className = 'add';
         add.textContent = '+';
         cartes = JSON.parse(localStorage.getItem('cartes')) ||  [];
         let cartObject = {};
          cartObject.cartName = `${vocaNameInput.value}`;
           cartObject.Description = `${vocaDescriptionInput.value}`;
           cartObject.wordMeaningCarts = [];
           cartes.unshift(cartObject);
           console.log(cartes);
           localStorage.setItem('cartes', JSON.stringify(cartes));
           location.reload();

        }
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
       
   
   const menu = document.querySelector('.menu');
   const menuList = document.getElementById('menuList');
   menuList.classList.add('menuList');
   const  documentAll = document.getElementById('documentAll'); 
   menu.addEventListener('click', ()=> {
     documentAll.classList.add('documentAll');
     menuList.classList.add('menuList-ouvert');

      menuList.innerHTML = `
         <li class="X"><svg onclick="location.reload()" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#531607"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
  
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg> <span class="listElementName">My profile</span></li>
  
         <a class='menuElement' href="Reading2.html"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/></svg> <span class="listElementName">Reading</span></a>
  
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"/></svg> <span class="listElementName">Listening</span></li>
  
         <li class='menuElement'><a href="Practice.html"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#531607"><path d="M480-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-160q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Zm141.5 141.5Q680-397 680-480t-58.5-141.5Q563-680 480-680t-141.5 58.5Q280-563 280-480t58.5 141.5Q397-280 480-280t141.5-58.5Z"/></svg> <span class="listElementName">Practice</a></span></li>
  
         <li class='menuElement'><a href="Progress.html"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/></svg> <span class="listElementName">Progress</a></span></li>
  
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M338-241q16 0 23-10.5t9-24.5q2-10 3.5-20t3.5-22q2-11 4.5-24t5.5-30q23-5 45-8.5t43-5.5q23-3 45.5-4.5T564-394q5 24 10.5 43t11.5 36q8 23 17.5 38t23.5 26q14 11 30.5 12t28.5-9q9-7 9-21t-8-35q-5-11-8.5-22.5T670-350q-5-14-9-25.5t-7-22.5q13-1 23.5-4.5T695-412q7-6 10.5-14.5T709-445q0-11-4.5-18.5T691-476q-9-5-22.5-6.5t-30.5.5q-2-18-4-35.5t-5-35.5q-3-17-5.5-35t-7.5-35q-6-26-17-44.5T574-698q-13-11-28.5-16.5T511-720q-22 0-42 9t-40 27q-11 11-22 23.5T386-631q-8-6-14.5-8t-14.5-2q-11 0-18.5 6t-7.5 20q0 18-2 36t-6 36q-5 26-11 51.5T301-440q-11 2-19.5 5.5T267-427q-8 5-11.5 12.5T252-399q0 7 2 13t7 11q5 5 12 7.5t16 3.5q-1 12-1.5 22.5T287-321q0 21 3 36t9 25q6 10 15.5 14.5T338-241Zm71-223q6-23 14-44.5t18-44.5q16-37 34-59t32-22q11 0 19 17t13 51q3 20 5 43t4 43q-17 1-35 2.5t-35 3.5q-17 2-34.5 4.5T409-464ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z"/></svg> <span class="listElementName">Teacher Profile</span></li>
         
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg> <span class="listElementName">Settings</span></li>
         
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> <span class="listElementName">Help</span></li>
         
         <li class='menuElement'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#531607"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg> <span class="listElementName">Log out</span></li>
          `
         menuList.classList.add('menuList');
    });
