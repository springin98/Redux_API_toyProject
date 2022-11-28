const ITEMNAME = 'search/ITEMNAME';
const ENTPNAME = 'search/ENTPNAME';
const EFCYQESITM = 'search/EFCYQESITM';
const PAGEPLUS = 'search/PAGEPLUS';

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
export const searchPagePlus = () => ({
  type: PAGEPLUS,
});

const initialState = {
  Itemname: '',
  EntpName: '',
  Efcyqesitm: '',
  PageNo: 1,
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
    case PAGEPLUS:
      return {
        ...state,
        PageNo: state.PageNo + 1,
      };
    default:
      return state;
  }
}

export default search;
