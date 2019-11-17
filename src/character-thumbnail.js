import styleText from './character-thumbnail.scss';

class CharacterThumbnail extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.template = document.createElement('template');
    this.styleSheet = new CSSStyleSheet();

    this.render();
  }

  render() {
    const image = this.getAttribute('data-image');
    const name = this.getAttribute('data-name');

    this.template.innerHTML = `
      <div class="card">
        <div class="card-image">
          <img src="${image}">
        </div>
        <div class="card-content">
          <span class="card-title">${name}</span>
        </div>
      </div>`;

    this.styleSheet.replaceSync(styleText);
    this.shadow.adoptedStyleSheets = [this.styleSheet];
    this.shadow.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define('character-thumbnail', CharacterThumbnail);
