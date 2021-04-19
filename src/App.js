import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import PokeDetails from "./Components/PokeDetails";
import PokeGrid from "./Components/PokeGrid";
import Footer from './Components/Footer'
import "./App.css";

const App = () => {
  const [pokemons, setPokemon] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetchDetails("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  async function fetchDetails(url) {
    const res = await fetch(url);
    const json = await res.json();
    json.results.map(async (element) => {
      const res = await fetch(element.url);
      const json = await res.json();
      let next = {
        number: json.id,
        name: json.name,
        imgSrc: json.sprites.other.dream_world.front_default,
        types: json.types,
      };
      setPokemon((prev) => [ ...prev, next]);
    });

    setPagination({
      prev: json.previous,
      next: json.next,
    });
  }

  return (
    <HashRouter>
      <Link to="/" className="Link">
        <Header />
      </Link>
      <Switch>
        <Route path="/" exact>
          <PokeGrid pokemons={pokemons} />
          <Pagination
            fetchDetails={fetchDetails}
            pagination={pagination}
            setPokemon={setPokemon}
          />
        </Route>
        <Route path="/:name" exact component={PokeDetails} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
