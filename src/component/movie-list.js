import './movie-item'

class MovieList extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render(){
        this.innerHTML = '';
        this._movies.forEach (movie => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }

    renderError(message){
        this.innerHTML = `<h4>${message}</h4>`;
    }
}

customElements.define('movie-list', MovieList);
const customList = document.querySelector('movie-list');
customList.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'g-4');
