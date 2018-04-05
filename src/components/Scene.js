import React from 'react'
import PropTypes from 'prop-types'
import SceneShape from './scene-objects/SceneShape'
import Shape from './scene-objects/Shape'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sceneMouseMove, addButtonClicked} from '../actions/sceneActions' 


/**
 * Draws the scene that we want to manipulate
 * *   
 */
const Scene = (props) => {



  const sceneCanvasStyle = {
    width: '1920',
    height: '1200'
  };


  /**
   *  * Here we will want to add scene objects to render
   */
  let renderSceneObjects  = 

      props.sceneObjects.map(sceneObject => {
      return <SceneShape shape={sceneObject}/>
    });

    
   

  let mouseMoveAction = (event) =>
  {
    props.sceneMouseMove(props.sceneObjects, event.pageX, event.pageY);
  }

  let addButtonClicked = () => 
  {
    props.addButtonClicked(props.sceneObjects);
  }


    return (
      <div id="Scene" >
         <button  onClick={addButtonClicked}>
               Add shape
        </button>
        <svg id="sceneCanvas" style={sceneCanvasStyle} onMouseMove={mouseMoveAction}>
          {renderSceneObjects}
        </svg>
      </div>
    )
  }
  
  const mapStateToProps = (store) =>
  {
      return {
        sceneObjects: store.sceneReducer.sceneObjects
      };
  };
  
  const matchDispatchToProps = (dispatch) =>
  {
      return bindActionCreators({
        sceneMouseMove: sceneMouseMove,
        addButtonClicked: addButtonClicked
      }, dispatch)
  };
  
  export default connect(mapStateToProps, matchDispatchToProps)(Scene);