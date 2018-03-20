import React from 'react'
import PropTypes from 'prop-types'
import SceneShape from './scene-objects/SceneShape'
import Shape from './scene-objects/Shape'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


/**
 * Draws the scene that we want to manipulate
 * *   
 */
const Scene = ({}) => {

  let shape = new Shape("TestShape");
  let sceneObjects = [];
  sceneObjects.push(shape);

  /**
   *  * Here we will want to add scene objects to render
   */
  let renderSceneObjects  = 
      sceneObjects.map(sceneObject => {
      return <SceneShape shapeName={sceneObject}/>
    });
   


  
    return (
      <div className="Scene">
        {renderSceneObjects}
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
  
  export default connect(mapStateToProps, matchDispatchToProps)(Scene);