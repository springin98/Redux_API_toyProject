import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { searchEfcyQesitm } from '../modules/search';

const SeachEfcyQesitm = (props) => {
  const dispatch = useDispatch();
  const onEfcyQesitm = useCallback(
    (efcyqesitm) => dispatch(searchEfcyQesitm(efcyqesitm)),
    [dispatch],
  );

  return (
    <input
      placeholder="증상을 입력하세요"
      onChange={(e) => onEfcyQesitm(e.target.value)}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SeachEfcyQesitm;
