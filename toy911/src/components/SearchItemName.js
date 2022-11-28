import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { searchItemName } from '../modules/search';

const SearchItemName = (props) => {
  const dispatch = useDispatch();
  const onItemName = useCallback(
    (name) => dispatch(searchItemName(name)),
    [dispatch],
  );

  return (
    <input
      placeholder="약품명을 입력하세요"
      onChange={(e) => onItemName(e.target.value)}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SearchItemName;
