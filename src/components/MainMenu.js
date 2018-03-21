import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


/**
 * Draws the scene that we want to manipulate
 * *   
 */
const MainMenu = (props) => {

    let userName = "user name";


    let startButtonClicked = (event) => 
    {
        console.log("!!!! in button action")
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
      return {
          
      };
  };
  
  const matchDispatchToProps = (dispatch) =>
  {
      return bindActionCreators({
        
      }, dispatch)
  };
  
  export default connect(mapStateToProps, matchDispatchToProps)(MainMenu);