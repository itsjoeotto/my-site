import React, { Component } from 'react';
import '../App.css';
import ShapeTile from './ShapeTile';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {

componentWillMount() {
  if (this.props.reduxState.druidWildShapesReducer.shapes.length === 0) {
    axios.get('/shapes').then(res => {
      this.props.dispatch({ type: 'SET_SHAPES', payload: res.data });
    });
  }
}

  render() {
    return (
      <div>
        {(this.props.reduxState.druidWildShapesReducer) ? this.props.reduxState.druidWildShapesReducer.shapes.map(shape => {
          return <ShapeTile key={shape._id}
                  shape={shape} />
        }) : null}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);