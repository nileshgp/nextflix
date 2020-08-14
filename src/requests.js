const API_KEY = "[TMDB_API_KEY_HERE]";

const requests = {
    fetchTrending: `trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchActionAdventure: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
    fetchComedy: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchCrime: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchDrama: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchMystery: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
    fetchSciFantasy: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764`
}

export default requests

