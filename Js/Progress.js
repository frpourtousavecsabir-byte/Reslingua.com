const storeminLu = Number(localStorage.getItem('minLu'));
      const storehourLu = Number(localStorage.getItem('hourLu'));
      const storeTexteLu = Number(localStorage.getItem('texteLu'));
      const storeMinProgress = Number(localStorage.getItem('minProgress'));
      const storeSerieLu = Number(localStorage.getItem('serie'));
      const storeWeekHour = Number(localStorage.getItem('weekHour'));
      const storeWeekMinutes = Number(localStorage.getItem('weekMinutes'));
      const storeDates = JSON.parse(localStorage.getItem('dates')) || [];
     console.log(storeDates);

      const tempsLu = document.getElementById('tempsLu');
      const texteLu = document.getElementById('texteLu');
      const progressBarre = document.getElementById('prog');
      const minProg = document.getElementById('minProg');
      const pourcentage = document.getElementById('pourcentage');
      const serieLu = document.getElementById('serieLu');
      const weekLu = document.getElementById('weekLu');
      const todayActi = document.getElementById('todayActi');
      const yesterdayActi = document.getElementById('yesterdayActi');
      const dayBeforeActi = document.getElementById('dayBeforeActi');
      const dayBefore = document.getElementById('dayBefore');

      
      let aujourdhui = new Date();
      let avantHier = new Date(aujourdhui);
      avantHier.setDate(avantHier.getDate() - 2);

    let go =  avantHier.toLocaleDateString('en-US', {
        day: 'numeric',
        month : "long"
      });;
      
      console.log(go);

      tempsLu.textContent =`00 h 00 min`;
      weekLu.textContent =`00 h 00 min`;
      tempsLu.classList.add('tempsLu');
      texteLu.textContent =`0 texts`;
      texteLu.classList.add('texteLu');
      progressBarre.value =`0`;
      serieLu.textContent = `0 days`;
      dayBefore.textContent = `${go}`
      
      



      if(storeminLu ) {
        tempsLu.innerHTML =`${String(storehourLu).padStart(2, '0')} h ${String(storeminLu).padStart(2, '0')} min`;
      }
      if(storeTexteLu) {
        if(storeTexteLu === 1) {
          texteLu.textContent =`${storeTexteLu} text`;
        } else {
          texteLu.textContent =`${storeTexteLu} texts`;
        }
       
      }
      
      if(storeMinProgress) {
        progressBarre.max = 30;
       progressBarre.value = storeMinProgress;
       minProg.textContent = storeMinProgress;
       pourcentage.textContent = `${Math.floor((storeMinProgress * 100) /30) }`
       console.log(progressBarre.value);
      }
      
      if(storeSerieLu) {
      console.log(storeSerieLu === 1);
        if(storeSerieLu === 1) {
          serieLu.textContent = `${storeSerieLu} day`
        }else {
          serieLu.textContent = `${storeSerieLu} days`
        }
      }
     
      if(storeWeekMinutes || storeWeekHour) {
        weekLu.textContent = `${String(storeWeekHour).padStart(2, '0')} h ${String(storeWeekMinutes).padStart(2, '0')} min`
      }

      if(storeDates) {
        todayActi.textContent = `${String(storeDates[0].minutos).padStart(2, '0')} min`;
        yesterdayActi.textContent = `${String(storeDates[1].minutos).padStart(2, '0')} min`;
        dayBeforeActi.textContent = `${String(storeDates[2].minutos).padStart(2, '0')} min`;
        
      }
      

      
      