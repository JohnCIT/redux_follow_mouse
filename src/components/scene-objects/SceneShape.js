import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

/**
 * Knows how to draw a shape that is passed in
 * @param {*} props 
 */
const SceneShape = (props) => {
  let shapeName = props.shapeName.shapeType;

  let x = "50";
  let y = "20";

  let width = "150";
  let height = "150";

    
   console.log("!!!!!!!!!!!!!!!!!!!",shapeName);
    return (
      <div id="SceneShape">
        <svg>
          <rect x={x} y={y} width={width} height={height} fill="green"/>
          <text x={x} y={y} fontFamily="Verdana" fontSize="12" fill="blue">TYPE: {shapeName} </text>
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