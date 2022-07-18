import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/LoginView';
import { RegisterView } from '../register-view/register-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      displayRegisterForm: false
    }
  }

  componentDidMount() {
    axios.get('https://movie-app-svs.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  // a function that will set displayRegisterForm on true
  toRegister() {
    this.setState({
      displayRegisterForm: true
    });
  }

  // Function that will set displayRegisterForm to false
  toLogIn() {
    this.setState({
      displayRegisterForm: false
    })
  }

  render() {
    const movies = this.state.movies;
    const selectedMovie = this.state.selectedMovie;
    const user = this.state.user;
    const displayRegisterForm = this.state.displayRegisterForm;

    // if displayRegisterForm is true, the RegisterView is rendered
    if (displayRegisterForm) return <RegisterView OnLogInClick={() => { this.toLogIn() }} />

    /* If there is no user, the LoginView is rendered. */
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegisterClick={() => { this.toRegister() }} />;

    if (movies.length === 0) return <div className='main-view'></div>;

    if (selectedMovie) return (
      <Row className="justify-contennt-md-center main-view">
        <Col md={8} >
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        </Col>
      </Row>
    )
    else {
      return (
        <Row className="justify-content-md-center main-view">
          {movies.map((movie) => {
            <Col md={3} >
              <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie); }} />
            </Col>
          })}
        </Row>
      );
    }
  }
}