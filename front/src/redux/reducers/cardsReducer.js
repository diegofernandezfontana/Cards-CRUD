
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
            var cardsArr = state.cards;
            var editedItem = action.payload; 
            editedItem.titulo = editedItem.titulo.toLowerCase()
            // itemToEDIT = indice en cardsArr donde el El item a editar conicida el id 
            let itemToEDIT = cardsArr.findIndex(elem => elem.id == editedItem.id)

            //updateState toma el state.cards y se edita el subindice por el item editado (editedItem)
            var updatedState = cardsArr;
            updatedState[itemToEDIT] = editedItem;
            
            return Object.assign(
                {},
                state,
                {
                    cards: updatedState,
                    cardsOrdered: [] //#Si hay un update en una carta se setea el orden a [] asi no hay un display anterior
                })

        case "ORDER_LIST":
            return Object.assign({}, state, {cardsOrdered: action.payload})
        
        default:
            return state;
    }
}