const ITEMNAME = 'search/ITEMNAME';
const ENTPNAME = 'search/ENTPNAME';
const EFCYQESITM = 'search/EFCYQESITM';

export const searchItemName = (name) => ({
  type: ITEMNAME,
  name: name,
});
export const searchEntpName = (entpName) => ({
  type: ENTPNAME,
  entpName: entpName,
});
export const searchEfcyQesitm = (efcyqesitm) => ({
  type: EFCYQESITM,
  efcyqesitm: efcyqesitm,
});

const initialState = {
  Itemname: '',
  EntpName: '',
  Efcyqesitm: '',
};

function search(state = initialState, action) {
  switch (action.type) {
    case ITEMNAME:
      return {
        ...state,
        Itemname: action.name,
      };
    case ENTPNAME:
      return {
        ...state,
        EntpName: action.entpName,
      };
    case EFCYQESITM:
      return {
        ...state,
        Efcyqesitm: action.efcyqesitm,
      };
    default:
      return state;
  }
}

export default search;
