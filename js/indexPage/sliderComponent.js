const slider = `
  <div class="carousel-item active">
                      <a href="article.html">
                        <img
                          src="./images/picture-1.jpg"
                          class="d-block w-100"
                          alt="..."
                        />

                        <div class="carousel-text">
                          <h3>
                            وريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة
                            الطباعة والتنضيد
                          </h3>
                        </div>
                      </a>
                    </div>
`


class SliderComponent extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = slider
        this.querySelector("h1").innerText = this.getAttribute("text")
    }
} 

window.customElements.define("slider-component",SliderComponent)