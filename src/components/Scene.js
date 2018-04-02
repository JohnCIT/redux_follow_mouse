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

  /**
   *  * Here we will want to add scene objects to render
   */
  let renderSceneObjects  = 

      props.sceneObjects.map(sceneObject => {
      return <SceneShape shape={sceneObject}/>
    });

    
   

  let mouseMoveAction = (event) =>
  {
    console.log("Mouse is moving", event.clientY);
    props.sceneMouseMove(props.sceneObjects, event.clientX, event.clientY);
  }

  let addButtonClicked = () => 
  {
    props.addButtonClicked(props.sceneObjects);
  }


    return (
      <div className="Scene" onMouseMove={mouseMoveAction}>
         <button  onClick={addButtonClicked}>
               Add shape
        </button>
        {renderSceneObjects}
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