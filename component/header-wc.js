class Headercomponent extends HTMLElement {
    constructor() {
      super();
      this.#render();
    }
  
    connectedCallback() {}
  
    #render() {
      this.innerHTML = `
      <header>
     <a class="logo"  href="homepage.html" ><img class="logoImg" src="/accest/logo.svg" alt="logoImg"></a>
      <nav class="nevtreh">
          <button type="button" class="nevtreh">Нэвтрэх</button>
      </nav>  
  </header>
      `;
    }
  }
  
  window.customElements.define("header-component", Headercomponent);
  class HeaderWc extends HTMLElement {
    constructor() {
      super();
      //implementation
    }
  
    connectedCallback() {
      //implementation
    }
  
  }
  
  window.customElements.define('header-wc', HeaderWc);
  