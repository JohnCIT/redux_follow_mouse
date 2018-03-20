// App.js
import React from 'react';
import Scene from './Scene';
import MainMenu from './MainMenu';
import {Provider, connect} from "react-redux";
import {bindActionCreators} from 'redux'


const App = (props) =>
{
  return (
    <div name="MainApp">
      <MainMenu />
      <Scene />
    </div>
  )
};


const mapStateToProps = (store) =>
{
    return {};
};

const matchDispatchToProps = (dispatch) =>
{
    return bindActionCreators({}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
