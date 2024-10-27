import React from "react";

import "./App.css";
import Row from "./Row";
import requests from "./requests/requests";
import Banner from "./Banner";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="App">
  
      <Header />
    <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchAdventure} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamily} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="History" fetchUrl={requests.fetchHistory} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKids} />
      <Row title="Music" fetchUrl={requests.fetchMusic} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="Reality" fetchUrl={requests.fetchReality} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="Talk Show" fetchUrl={requests.fetchTalk} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThriller} />
      <Row title="TV Movies" fetchUrl={requests.fetchTvMovie} />
      <Row title="TV Show" fetchUrl={requests.fetchTvShow} />
      <Row title="War" fetchUrl={requests.fetchWar} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Footer />
    </div>
  );
}

export default App;
