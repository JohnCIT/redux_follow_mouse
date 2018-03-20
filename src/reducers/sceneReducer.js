const sceneReducer = (state = [], action) => {
    switch(action.type) {
        case 'TODO' : { 
            return Object.assign({}, state, {
               
            });
        }
        
        default : 
            return state;
    }
}

export default sceneReducer