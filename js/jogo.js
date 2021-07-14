class Jogo {
  constructor(containerElement,j,n, jogosCallback) { // j é o time, n é o número de jogos
    this.containerElement = containerElement;
    this.jogosCallback = jogosCallback;
    const partida = document.createElement('div');
    partida.className = 'partida';
    this.containerElement.appendChild(partida);
    const jogfoto = document.createElement('img');
    if(TEAMS[j].seasons[n].image === null){
      jogfoto.src = './images/no-image-episode.png'
    }
    else{
      jogfoto.src = TEAMS[j].seasons[n].image;
    }
    partida.appendChild(jogfoto);
    const jogodesc = document.createElement('div');
    jogodesc.className = 'jogodesc';
    partida.appendChild(jogodesc);
    const caixinhazinha = document.createElement('input');
    caixinhazinha.type = "checkbox";
    caixinhazinha.dataset.time = TEAMS[j].seasons[n].code;
    jogodesc.appendChild(caixinhazinha);
    this._marcaVisto = this._marcaVisto.bind(this);
    caixinhazinha.addEventListener('change',this._marcaVisto);
    const nomep = document.createElement('h3');
    nomep.textContent = 'Rodada ' + TEAMS[j].seasons[n].rodada + ': ' + TEAMS[j].seasons[n].name;
    jogodesc.appendChild(nomep);
    const dia = document.createElement('div');
    dia.className = 'dia';
    dia.textContent = TEAMS[j].seasons[n].data;
    jogodesc.appendChild(dia);
    const epidescr = document.createElement('p');
    epidescr.textContent = TEAMS[j].seasons[n].summary;
    jogodesc.appendChild(epidescr);
  }

  _marcaVisto(event){
    const marcador = event.target.checked;
    const info = event.currentTarget;
    const info_partida = info.dataset.time;
    const partida = parseInt(info_partida);
    if (marcador === true) {
        this.jogosCallback(partida,marcador);
    }
    if (marcador === false) {
        this.jogosCallback(partida,marcador);
    }
    const seletor = 'input[data-time="'+partida;
    const matches = document.querySelectorAll(seletor);
    if(marcador === true){
      matches[1].checked = true;
    }
    else{
        matches[1].checked = false;
      }
  }

  

}