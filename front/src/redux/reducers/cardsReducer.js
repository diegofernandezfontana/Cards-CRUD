
const initialSate ={
    cards:[]
};


export default (state = initialSate, action)=>{
    switch (action.type) {
        case "ADD_CARD":
            return Object.assign({}, state, {cards: [...state.cards , action.payload]})
        default:
            return state;
    }
}