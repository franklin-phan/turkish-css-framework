class ClickHighlight extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    this._text = this.innerHTML
    this._splitWords = this._text.split(" ")
    console.log(this._splitWords)

    for (let i = 0; i < this._splitWords.length; i += 1) {
      this._splitWords[i] = ' ' + this._splitWords[i] + ' ';
      const highlightWord = document.createElement('span')
      highlightWord.innerHTML = this._splitWords[i]

      highlightWord.addEventListener('click',function(e){
        highlightWord.style.backgroundColor = "yellow"
      })
      highlightWord.addEventListener('dblclick',function(e){
        highlightWord.style.backgroundColor = "transparent"
      })
      this._shadowRoot.appendChild(highlightWord)

    }

  
  }
}
customElements.define('click-highlight', ClickHighlight);