import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPagePlus, searchPageMinus } from '../modules/search';

const SearchPage = (props) => {
  const pageNo = useSelector((state) => state.search.PageNo);
  const dispatch = useDispatch();
  const onPlus = useCallback(() => dispatch(searchPagePlus()), [dispatch]);
  const onMinus = useCallback(() => dispatch(searchPageMinus()), [dispatch]);

  return (
    <div>
      {pageNo > 1 && (
        <button
          onClick={() => {
            onMinus();
          }}
        >
          -
        </button>
      )}
      <p>
        {props.pageNo}/{props.pageNoCount}
      </p>
      {pageNo < props.pageNoCount && (
        <button
          onClick={() => {
            onPlus();
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default SearchPage;
