import React from 'react';

export class DirectorView extends React.Component {


  render() {
    const director = this.props.director;
    return (

      <div>{director.Name}</div>
    )

  }

}