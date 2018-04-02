import {MAIN_MENU_START_ACTION} from "../actions/mainMenuScreenActions"
import Shape from "../components/scene-objects/Shape";

const mainScreenReducer = (state = [], action) => {       
    switch(action.type) {
        case MAIN_MENU_START_ACTION : {             
            let newState = _.cloneDeep(state);

            action.sceneObjects.push(new Shape("new Test Shape"))

            console.log("action", action);
            console.log("!!!!!!!!!!!!!!!!!!!!! State", state);

            
            newState.userName = action.userName;
            return newState;
        }
        
        default : 
            return state;
    }
}

export default mainScreenReducer