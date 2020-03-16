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