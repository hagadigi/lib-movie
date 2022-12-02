class MovieItem extends HTMLElement{

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        const {poster_path, title, release_date, popularity, vote_average} = this._movie;
        this.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="poster" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <div class="card-text">${release_date}</div>
                        <div class="card-text">Popularity: ${popularity}</div>
                        <div class="card-text">Vote Average: ${vote_average}</div>
                   </div>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);