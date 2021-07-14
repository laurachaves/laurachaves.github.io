class Header {
  constructor(containerElement) {
    this.containerElement = containerElement;
    const header = document.createElement('header');
    this.containerElement.append(header);
    const title = document.createElement('h1');
    title.textContent = 'Times do Brasileirão 2021';
    header.appendChild(title);
    const profile = document.createElement('section')
    profile.id = 'profile-pic';
    this.containerElement.append(profile);
    const profilepic = document.createElement('img');
    profilepic.src = "./images/icon.png";
    profile.appendChild(profilepic);
    const breik = document.createElement('br');
    profile.appendChild(breik);
    const nome = document.createElement('strong');
    nome.textContent = 'Seu nome';
    profile.appendChild(nome);
  }
}