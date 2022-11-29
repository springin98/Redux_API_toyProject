const ADD = 'modal/ADD';

export const modalAdd = (
  name,
  atpnQesitm,
  depositMethodQesitm,
  efcyQesitm,
  useMethodQesitm,
  atpnWarnQesitm,
  intrcQesitm,
) => ({
  type: ADD,
  name: name,
  atpnQesitm: atpnQesitm,
  depositMethodQesitm: depositMethodQesitm,
  efcyQesitm: efcyQesitm,
  useMethodQesitm: useMethodQesitm,
  atpnWarnQesitm: atpnWarnQesitm,
  intrcQesitm: intrcQesitm,
});

const initialState = {
  Itemname: '',
  AtpnQesitm: '',
  DepositMethodQesitm: '',
  EfcyQesitm: '',
  UseMethodQesitm: '',
  AtpnWarnQesitm: '',
  IntrcQesitm: '',
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
        AtpnWarnQesitm: action.atpnWarnQesitm,
        IntrcQesitm: action.intrcQesitm,
      };
    default:
      return state;
  }
}

export default modal;
