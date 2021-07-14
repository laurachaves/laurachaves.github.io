class Team {
  constructor(containerElement,j) {
    this.containerElement = containerElement;
    this.j = j;
    const newGamebox= document.createElement('div');
    newGamebox.className = 'gamebox';
    this.containerElement.appendChild(newGamebox);
    const imagens = document.createElement('div');
    imagens.className = 'imagens';
    newGamebox.appendChild(imagens);
    const foto = document.createElement('img');
    foto.src = TEAMS[this.j].image;
    imagens.appendChild(foto);
    const caixatemp = document.createElement('select');
    imagens.appendChild(caixatemp);
    const opcao0 = document.createElement('option');
    opcao0.textContent = "Jogos";
    caixatemp.dataset.time = j;
    caixatemp.appendChild(opcao0);
    const opcao = document.createElement('option');
    opcao.textContent = 'Ver jogos de ' + TEAMS[this.j].name;
    opcao.dataset.time= j;
    caixatemp.appendChild(opcao);
    caixatemp.addEventListener('change', this._seasonSelector);
    this.descricao = document.createElement('div');
    this.descricao.className = 'description';
    newGamebox.appendChild(this.descricao);
    const nome = document.createElement('h1');
    nome.textContent = TEAMS[this.j].name;
    this.descricao.appendChild(nome);
    const linque = document.createElement('a');
    linque.href = TEAMS[this.j].officialSite;
    linque.textContent = `Site oficial`
    this.descricao.appendChild(linque);
    const sobre = document.createElement('p');
    sobre.textContent = TEAMS[this.j].sobre;
    this.descricao.appendChild(sobre);
    const titulo = document.createElement('strong');
    titulo.textContent = 'Títulos do Brasileirão série A:';
    this.descricao.appendChild(titulo);
    if(TEAMS[this.j].titulos.length > 0){
      for (let i = 0; i < TEAMS[this.j].titulos.length; i++) {
        const titulos = document.createElement('span');
        titulos.className = 'titulos';
        titulos.textContent = TEAMS[this.j].titulos[i];
        titulo.appendChild(titulos);
      }
    }
    else{
      const titulos = document.createElement('span');
      titulos.className = 'titulos';
      titulos.className = 'nenhum';
      titulos.textContent = 'Nenhum';
      titulo.appendChild(titulos);
    }
    this._addSeason = this._addSeason.bind(this);
    this._addSeason();
  }


  _addSeason() {
    const season = new Season(this.descricao,this.j);
  }

  _seasonSelector(event){
    const choice = event.currentTarget;
    const flag = choice.value[0];
    const timeh = choice.dataset.time;
    const especifico = document.querySelectorAll('.temporada');
    if(flag === 'V'){
      especifico[timeh].classList.remove('hidden');
    }
    else{
      especifico[timeh].classList.add('hidden')
    }
  }
}