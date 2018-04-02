import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {mainMenuStart} from '../actions/mainMenuScreenActions'


/**
 * Draws the scene that we want to manipulate
 * *   
 */
const MainMenu = (props) => {

    let userName = "user name";


    let startButtonClicked = (event) => 
    {
        props.mainMenuStart("Test", props.sceneObjects);
    }

    return (
      <div className="Main Menu">
        <div>
            Ready to start?
            <br/>
            <form>
                First name:<br/>
                <input type="text" name="firstname" placeholder={userName}/><br/>
            </form>
            <button  onClick={startButtonClicked}>
                Lets start
            </button>
        </div>
      </div>
    )
  }
  
  const mapStateToProps = (store) =>
  {
    console.log("STORE !!!!", store.sceneReducer);
      return {
        sceneObjects: store.sceneReducer.sceneObjects
      };
  };
  
  const matchDispatchToProps = (dispatch) =>
  {
      return bindActionCreators({
        mainMenuStart : mainMenuStart
      }, dispatch)
  };
  
  export default connect(mapStateToProps, matchDispatchToProps)(MainMenu);