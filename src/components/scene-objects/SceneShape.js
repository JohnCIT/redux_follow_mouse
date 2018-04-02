import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

/**
 * Knows how to draw a shape that is passed in
 * @param {*} props 
 */
const SceneShape = (props) => {
  let shapeName = props.shape.shapeType;

console.log("!!!!!!", props);

  let width = "150";
  let height = "150";

  const divStyle = {
    width: '1920',
    height: '1600'
  };

    
   console.log("!!!!!!!!!!!!!!!!!!!",shapeName);
    return (
      <div id="SceneShape">
        <svg style={divStyle} >
          <rect x={props.shape.xPos} y={props.shape.yPos} width={width} height={height} fill="green"/>
          <text x={props.shape.xPos} y={props.shape.Ypos} fontFamily="Verdana" fontSize="12" fill="blue">TYPE: {shapeName} </text>
        </svg>
      </div>
    )
  }
  
  const mapStateToProps = (store) =>
  {
      return {
          
      };
  };
  
  const matchDispatchToProps = (dispatch) =>
  {
      return bindActionCreators({
        
      }, dispatch)
  };
  
  export default connect(mapStateToProps, matchDispatchToProps)(SceneShape);