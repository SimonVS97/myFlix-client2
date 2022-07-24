import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/LoginView';
import { RegisterView } from '../register-view/register-view.jsx';
import { Menubar } from '../navbar/navbar.jsx'
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../user-view/user-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main-view.scss';

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
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }
  /*  componentDidMount() {
      axios.get('https://movie-app-svs.herokuapp.com/movies')
        .then(response => {
          this.setState({
            movies: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    } */

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  // Logging out function
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  getMovies(token) {
    axios.get('https://movie-app-svs.herokuapp.com/movies', {
      header: { Authorization: 'Bearer ${token}' }
    })
      .then(response => {
        //Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
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

    // Log-out button needs to be placed right
    //<button onClick={() => { this.onLoggedOut() }}>Logout</button>

    /* if displayRegisterForm is true, the RegisterView is rendered
    if (displayRegisterForm) return <RegisterView OnLogInClick={() => { this.toLogIn() }} />*/

    /* If there is no user, the LoginView is rendered.
    if (!user) {
      return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegisterClick={() => { this.toRegister() }} />;
    } */

    //if (movies.length === 0) return <div className='main-view'></div>;

    return (
      <Router>
        <Menubar user={user}></Menubar>
        <Row className="main-view justify-content-md-center">

          <Route exact path="/" render={() => {
            /* If there is no user, the LoginView is rendered. */
            if (!user) {
              return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegisterClick={() => { this.toRegister() }} />;
            }
            // Before the movies have been loaded
            if (movies.length === 0) return <div className='main-view'></div>;
            // mapping the movie cards
            return movies.map(m => (
              <Col md={4} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />

          <Route path="/register" render={() => {
            // register view
            if (user) return <Redirect to="/" />
            return <RegisterView OnLogInClick={() => { this.toLogIn() }}></RegisterView>
          }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            // movie view
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col >
              <DirectorView
                movies={movies}
                director={movies.find(m => m.Director.Name === match.params.name).Director}
                directormovies={movies.filter(movie => movie.Director.Name === match.params.name)}
                onBackClick={() => history.goBack()} />
            </Col>
          }
          } />

          <Route path="/genres/:name" render={({ match, history }) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <GenreView
                genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                genremovies={movies.filter(movie => movie.Genre.Name === match.params.name)}
                onBackClick={() => history.goBack()} />
            </Col>
          }
          } />



        </Row>
      </Router>
    );





    /*if (selectedMovie) return (
      <Row className="justify-content-md-center main-view">
        <Col md={4}>
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        </Col>
      </Row>
    )
    else {
      return (
        <Row className="justify-content-md-center main-view">
          {movies.map((movie) => ( //When returning jsx, one needs () not {}
            <Col className="movieCardContainer" md={4} >
              <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie); }} />
            </Col>
          ))
          }
        </Row>
      );
    } */
  }
}