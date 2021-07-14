class App {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this._createPage();
  }

  _createPage() {
    const header = new Header(this.containerElement);
    const jogos = new Jogoskeeper(this.containerElement);
    this.items = document.createElement('section');
    this.items.className = 'items';
    this.containerElement.append(this.items);
    this._addTeams = this._addTeams.bind(this);
    this._addTeams();
  }

  _addTeams(){
    for (let j = 0; j<TEAMS.length; j++){
      const team = new Team(this.items,j);
    }
  }
}
const container = document.querySelector('#app');
const app = new App(container);