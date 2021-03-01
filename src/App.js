import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are Ready!!" }
      </div>
    );
  }
}


export default App;