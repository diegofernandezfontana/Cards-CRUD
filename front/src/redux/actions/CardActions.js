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

export const removeCard = (cardID) => {
    return(dispatch,getState) =>{
        dispatch(remove_card_from_state(cardID))
        setLocalStorage(getState())
    }
}
const remove_card_from_state = function (cardID){
    return{
        type: "REMOVE_CARD",
        payload: cardID
    }
}

export const editCard = (card) => {
    return(dispatch, getState) => {
        dispatch(edit_card_from_state(card))
        setLocalStorage(getState())
    }
}

const edit_card_from_state = function(card){
    return {
        type: "UPDATE_CARD",
        payload: card
    }
}

export const orderList = (arrList) => {
    return dispatch => {
        dispatch(order_cards_to_state(arrList))
    }
}
const order_cards_to_state = function(arrCardsOrdered){
    return {
        type: "ORDER_LIST",
        payload: arrCardsOrdered
    }
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