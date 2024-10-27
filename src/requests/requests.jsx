
const API_KEY = import.meta.env.VITE_API_KEY;
//"014a05a08ab0b7365bef21a7456608c4"

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTvMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchKids: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchReality: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchTalk: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
};

export default requests;
