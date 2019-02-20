import CardsList from "../../components/CardsList";

export const addCard = card => {
    return (dispatch, getState) => {
        dispatch(add_card_to_state(card))
        setLocalStorage(getState())
    }
};

const add_card_to_state = function (card) {
    return {
        type: "ADD_CARD",
        payload: card
    }
}

export const removeCard = (cardIdx) => {
    return dispatch =>
        dispatch({
            type: "REMOVE_CARD",
            payload: cardIdx
        })
}


//SETEO DE LOCALSTORAGE

export const setLocalStorage = (state) => {
    //Usado para setear el a medida que se usa el programa
    let allCards = state
    let setCards = JSON.stringify(allCards)
    localStorage.setItem("cardsList", setCards)
}
export const getLocalStorage = () => {
    let cardsListInStorageJSON = localStorage.getItem('cardsList')
    let cardsArray = JSON.parse(cardsListInStorageJSON)
}

export const setStateByStorage = (storage) =>{
    //USADO PARA SETEAR EL STATE CUANDO INICIA EL PROGRAMA
    return (dispatch) =>{
        dispatch(add_store_to_state(storage))
    }
}

const add_store_to_state = function(storage){
    return{
        type:"ADD_STORAGE_TO_STATE",
        storage
    }
}