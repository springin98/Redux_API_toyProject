import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPagePlus } from '../modules/search';

const SearchPagePlus = (props) => {
  const pageNo = useSelector((state) => state.search.PageNo);
  const dispatch = useDispatch();
  const onPage = useCallback(() => dispatch(searchPagePlus()), [dispatch]);

  const onPageClick = () => {
    if (pageNo < props.pageNoCount) onPage();
    else {
      alert('끝 페이지 입니다.');
    }
  };

  return (
    <button
      onClick={() => {
        onPageClick();
      }}
    >
      +
    </button>
  );
};

export default SearchPagePlus;
