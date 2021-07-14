class Jogoskeeper {
  constructor(containerElement) {
    this.containerElement = containerElement;
    const total = document.createElement('section');
    total.className = 'total';
    this.containerElement.append(total);
    const totaal = document.createElement('h1');
    totaal.textContent = 'Jogos assistidos';
    total.appendChild(totaal);
    const quant = document.createElement('h1');
    quant.id = 'total-games-watched';
    quant.textContent = '0 jogos assistidos';
    total.appendChild(quant);
  }
}