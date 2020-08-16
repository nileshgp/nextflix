const API_KEY = "[API_KEY_HERE]";
// 10751
const requests = {
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=35`,
    fetchActionAdventure: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedy: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_genres=35`,
    fetchCrime: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_genres=80`,
    fetchDrama: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_genres=18`,
    fetchMystery: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_genres=9648`,
    fetchSciFantasy: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_genres=10764`
}

export default requests



