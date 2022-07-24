import React from 'react';

export class GenreView extends React.Component {


  render() {
    const genre = this.props.genre;
    return (

      <div>{genre.Name}</div>
    )

  }

}