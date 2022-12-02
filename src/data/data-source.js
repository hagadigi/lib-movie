class DataSource {
    static searchMovie(keyword){
        const keyAPI = 'eab346566d590748cdabb6a2e31532c1';
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results.length){
                return Promise.resolve(responseJson.results);
            } else{
                return Promise.reject(`"${keyword}" tidak ditemukan.`);
            }
        })
    }
}

export default DataSource;