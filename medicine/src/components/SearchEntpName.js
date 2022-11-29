import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import '../styled/search.scss';
import { searchEntpName } from '../modules/search';

const SearchEntpName = (props) => {
  const dispatch = useDispatch();
  const onEntpName = useCallback(
    (entpName) => dispatch(searchEntpName(entpName)),
    [dispatch],
  );

  return (
    <input
      className="search_input"
      placeholder="업체명을 입력하세요"
      onChange={(e) => {
        onEntpName(e.target.value);
      }}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SearchEntpName;
