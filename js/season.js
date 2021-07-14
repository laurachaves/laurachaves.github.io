class Season {
  constructor(containerElement,j) { //j é o time
    this.containerElement = containerElement;
    this.j = j;
    this.temp = document.createElement('div');
    this.temp.className = 'temporada';
    this.temp.classList.add('hidden');
    this.containerElement.appendChild(this.temp);
    const temporada = document.createElement('h2');
    temporada.textContent = `Jogos de ` + TEAMS[this.j].name;
    this.temp.appendChild(temporada);
    this._addJogo = this._addJogo.bind(this);
    this._addJogo();
  }

  _addJogo(){
    for (let n = 0; n < TEAMS[this.j].seasons.length; n++){
      const jogo = new Jogo(this.temp,this.j,n,this.modJogo);
    }
  }

  modJogo(partida,flag) {
    const tempo = document.getElementById('total-games-watched');
    const tempototal = tempo.textContent;
    const jogos_total = tempototal.split(' ');
    var se = null;
    for(let i =0; i < SEEN.length; i++){
      if(partida === SEEN[i]){
        se = i;
      }
    }
    if(se === null){
      if(flag === true){
        SEEN.push(partida)
      }
    }
    else{
      if(flag===false){
        SEEN.splice(se,se)
      }
    }
    if(SEEN.length === 1){
      tempo.textContent = SEEN.length + ' jogo assistido';
    }
    else{
      tempo.textContent = SEEN.length + ' jogos assistidos';
    }
  }

  _marcaTodos(event){
    const status = event.target.checked;
    const marcador = event.currentTarget;
    const team = parseInt(marcador.dataset.seri);
    const seletor = 'input[data-team="'+team+'';
    const episodes = document.querySelectorAll(seletor);
    for (let i = 0; i<episodes.length;i++){
        const ptime = episodes[i].dataset.time;
        const time = parseInt(ptime);
        if (status === true & episodes[i].checked === false){
          episodes[i].checked = true;
          this.modJogo(time,true);
        }  
        else{
          if (status === false & episodes[i].checked === true){
            episodes[i].checked = false;
            this.modJogo(time,false);
          }
        }
    }
  }
}