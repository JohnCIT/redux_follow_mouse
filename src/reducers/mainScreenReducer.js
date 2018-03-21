

const mainScreenReducer = (state = [], action) => {       
    switch(action.type) {
        case 'MAIN_MENU_START_ACTION' : { 
            console.log("!!!! In reducer");            
            return Object.assign({}, state, {
            });
        }
        
        default : 
            return state;
    }
}

export default mainScreenReducer