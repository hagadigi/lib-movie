class NavBar extends HTMLElement{
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg" style="background-color: #FAF7F0;">
            <div class="container-fluid">
                <a href="#" class="navbar-brand">
                    Libvie
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);