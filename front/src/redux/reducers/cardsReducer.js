
const initialSate ={
    cards:[]
};


export default (state = initialSate, action)=>{
    switch (action.type) {
        case "ADD_CARD":
            return Object.assign({}, state, {cards: [...state.cards , action.payload]})
        case "REMOVE_CARD":
            let currentState = state.cards;
            let newState = currentState.splice(action.payload)
            return Object.assign({}, state, {cards: currentState})
        case "ADD_STORAGE_TO_STATE":
            console.log("EMTRRO AL REDUCER")
            return Object.assign({}, state, {cards: action.storage})
        default:
            return state;
    }
}