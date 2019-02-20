export const addCard = card => {
    return dispatch =>
        dispatch({
            type: "ADD_CARD",
            payload: card
        })
};
