const MODALITEMNAME = 'modal/ITEMNAME';
const MODALATPNQESITM = 'modal/MODALATPNQESITM';
const MODALDEPOSITMETHODQESITM = 'modal/MODALDEPOSITMETHODQESITM';
const MODALEFCYQESITM = 'modal/MODALEFCYQESITM';
const MODALUSEMETHODQESITM = 'modal/MODALUSEMETHODQESITM';

export const modalItemName = (name) => ({
  type: MODALITEMNAME,
  name: name,
});
export const modalAtpnQesitm = (atpnQesitm) => ({
  type: MODALATPNQESITM,
  atpnQesitm: atpnQesitm,
});
export const modalDepositMethodQesitm = (depositMethodQesitm) => ({
  type: MODALDEPOSITMETHODQESITM,
  depositMethodQesitm: depositMethodQesitm,
});
export const modalEfcyQesitm = (efcyQesitm) => ({
  type: MODALEFCYQESITM,
  efcyQesitm: efcyQesitm,
});
export const modalUseMethodQesitm = (useMethodQesitm) => ({
  type: MODALUSEMETHODQESITM,
  useMethodQesitm: useMethodQesitm,
});

const initialState = {
  Itemname: '',
  AtpnQesitm: '',
  DepositMethodQesitm: '',
  EfcyQesitm: '',
  UseMethodQesitm: '',
};

function modal(state = initialState, action) {
  switch (action.type) {
    case MODALITEMNAME:
      return {
        ...state,
        Itemname: action.name,
      };
    case MODALATPNQESITM:
      return {
        ...state,
        AtpnQesitm: action.atpnQesitm,
      };
    case MODALDEPOSITMETHODQESITM:
      return {
        ...state,
        DepositMethodQesitm: action.depositMethodQesitm,
      };
    case MODALEFCYQESITM:
      return {
        ...state,
        EfcyQesitm: action.efcyQesitm,
      };
    case MODALUSEMETHODQESITM:
      return {
        ...state,
        UseMethodQesitm: action.useMethodQesitm,
      };
    default:
      return state;
  }
}

export default modal;
