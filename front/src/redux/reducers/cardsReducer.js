
const initialSate ={
    cards:[],
    cardsOrdered: []
};


export default (state = initialSate, action)=>{
    switch (action.type) {
        case "ADD_STORAGE_TO_STATE":
            //Checkea si hay algo en localstorage, si hay lo setea en el store
            return Object.assign({}, state, {cards: action.storage})

        case "ADD_CARD":
            //agregar card al arreglo cards pusheandolo al final
            return Object.assign({}, state, {cards: [...state.cards , action.payload]})

        case "REMOVE_CARD":
            //Chequea el estado con findIndex(card.id)
                //El elemento con id que coincida es eliminado del array. 
            let newState = state.cards;
            let newStateOrdered = state.cardsOrdered;

            let itemToDelete = state.cards.findIndex(elem => elem.id == action.payload);
            newState.splice(itemToDelete, 1)
            itemToDelete = state.cardsOrdered.findIndex(elem => elem.id == action.payload)
            newStateOrdered.splice(itemToDelete, 1)
            return Object.assign({}, state, 
                {
                    cards: newState,
                    cardsOrdered: newStateOrdered
                })
        
        case "UPDATE_CARD":
            // Setea update state a state.cards
                //Se fija en state.cards que elem coinice el id con el que se envio desde la lista
                    //El que coincide se updatea con el action.payload
            let updateState = state.cards;
            let itemToEDIT = state.cards.findIndex(elem => elem.id == action.payload.id)
            updateState[itemToEDIT] = action.payload
            updateState[itemToEDIT].titulo = updateState[itemToEDIT].titulo.toLowerCase()
            
            return Object.assign({}, state, { cards: updateState})

        case "ORDER_LIST":
            return Object.assign({}, state, {cardsOrdered: action.payload})
        
        default:
            return state;
    }
}