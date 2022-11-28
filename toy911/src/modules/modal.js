const ADD = 'modal/ADD';

export const modalAdd = (
  name,
  atpnQesitm,
  depositMethodQesitm,
  efcyQesitm,
  useMethodQesitm,
) => ({
  type: ADD,
  name: name,
  atpnQesitm: atpnQesitm,
  depositMethodQesitm: depositMethodQesitm,
  efcyQesitm: efcyQesitm,
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
    case ADD:
      return {
        ...state,
        Itemname: action.name,
        AtpnQesitm: action.atpnQesitm,
        DepositMethodQesitm: action.depositMethodQesitm,
        EfcyQesitm: action.efcyQesitm,
        UseMethodQesitm: action.useMethodQesitm,
      };
    default:
      return state;
  }
}

export default modal;
