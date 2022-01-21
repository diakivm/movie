import axios from 'axios'

export default class MovieService {
   
    static async getPopularMovie(page = 1) {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6&language=ru-RU', {
            params: {
                page
            }
        })
        return response
    }

    static async getFilmTrailer(id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6&language=en-US`)
        return response
    }
}