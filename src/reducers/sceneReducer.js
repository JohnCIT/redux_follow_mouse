import {SCENE_MOUSE_MOVE, ADD_BUTTON} from "../actions/sceneActions"
import _ from 'lodash'
import sceneObject from "../components/scene-objects/SceneObject";

const sceneReducer = (state = new sceneObject(), action) => {
    switch(action.type) {
        case SCENE_MOUSE_MOVE : { 
            let newState = _.cloneDeep(state);
            
            console.log("State !!!!", state);
            return newState;
        }
        case ADD_BUTTON: {
            let newState = _.cloneDeep(state);
            newState.sceneObjects = action.sceneObjects;
            return newState;
        }
        
        default : 
            return state;
    }
}

export default sceneReducer