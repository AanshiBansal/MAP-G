export const PILE_CHOOSEN = 'pile_choosen';

export const addPileChoosen = ()=> (dispatch)=>{
    dispatch({type: PILE_CHOOSEN, payload: ""});
}