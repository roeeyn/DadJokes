import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Joke() {
  const initialJoke = {
    joke: "haha funny joke"
  };

  const fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" }
      })
      .then(response => setJoke(response.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    console.log("Ayudaaaa");
    axios
      .get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" }
      })
      .then(response => setJoke(response.data))
      .catch(err => console.error(err));
  }, []);

  const [joke, setJoke] = useState(initialJoke);

  return (
    <div className="w-50">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a onClick={fetchJoke} className="btn btn-primary text-white">
            Get Another Joke
          </a>
        </div>
      </div>
    </div>
  );
}
