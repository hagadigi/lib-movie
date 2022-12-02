class SearchBar extends HTMLElement{
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchElement').value;
    }

    render(){
        this.innerHTML = `
        <div class="mb-3 justify-content-center">
            <h1 class="text-center">Search Movies</h1>
            <div class="input-group mb-3">
                <input type="search" class="form-control" placeholder="Masukkan judul film" id="searchElement">
                <button class="btn btn-outline-secondary" type="button" id="searchButtonElement">Cari</button>
            </div>
        </div>
        `;
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);