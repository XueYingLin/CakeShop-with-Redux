import bindActionCreators from "redux/src/bindActionCreators"

const BUY_CAKE = 'BUY_CAKE'//declare the type of the action

//define the action

//an action is an Object with a type property
//an action creater is function that returns an action  
function buyCake() {
    return {
        type: BUY_CAKE, //type property
        info: 'First redux action'
    
    }

}

//(previousState, action) => newState
const initialState = {
    numberOFCakes: 10
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, //always good to have more than one state because the initialState is an Object
            numberOFCakes: state.numberOFCakes - 1
        }

        default: return state
    }

}