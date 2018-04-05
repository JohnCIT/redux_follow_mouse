import {SCENE_MOUSE_MOVE, ADD_BUTTON_ACTION} from "../actions/sceneActions"
import _ from 'lodash'
import sceneObject from "../components/scene-objects/SceneObject";

const sceneReducer = (state = new sceneObject(), action) => {
    switch(action.type) {
        case SCENE_MOUSE_MOVE : { 
            let newState = _.cloneDeep(state);
            return newState;
        }
        case ADD_BUTTON_ACTION: {
            let newState = _.cloneDeep(state)
            
            action.sceneObjects.forEach(element => {
                console.log("!!!!!!!!!! in");
            });

            newState.sceneObjects = action.sceneObjects;
            return newState;
        }
        
        default : 
            return state;
    }
}

export default sceneReducer