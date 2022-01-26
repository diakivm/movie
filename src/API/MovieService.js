import axios from 'axios'

const _defaultLanguange = "ru-RU"

export default class MovieService {
   
    static async getPopularMovie(_page = 1) {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6', {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getNowPlayingMovie(_page = 1) {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6', {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    

    static async getFilmTrailer(id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6`, {
            params: {
                language: _defaultLanguange
            }
        })
        return response
    }

    static async getFilmsByTitle(title) {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6`, {
            params: {
                language: _defaultLanguange,
                query: title
            }
        })
        return response
    }

    static async getFilmById(id) {
        const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=61535d35d8f1f0f5cd6bcb40fd8046f6`, {
            params: {
                language: _defaultLanguange
            }
        })
        return response
    }
}