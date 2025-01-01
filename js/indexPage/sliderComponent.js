
class SliderComponent extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `<h1> welcome word  </h1>`
        this.querySelector("h1").innerText = this.getAttribute("text")
    }
} 

window.customElements.define("slider-component",SliderComponent)