import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPagePlus, searchPageMinus } from '../modules/search';
import '../styled/search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const SearchPage = (props) => {
  const pageNo = useSelector((state) => state.search.PageNo);
  const dispatch = useDispatch();
  const onPlus = useCallback(() => dispatch(searchPagePlus()), [dispatch]);
  const onMinus = useCallback(() => dispatch(searchPageMinus()), [dispatch]);

  return (
    <div className="SearchPage_div">
      {pageNo > 1 && (
        <button
          className="SearchPage_Btn"
          onClick={() => {
            onMinus();
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
      )}
      {pageNo === 1 && <div className="SearchPage_Btn" />}
      <p className="SearchPage_p">
        {props.pageNo}/{props.pageNoCount}
      </p>
      {pageNo < props.pageNoCount && (
        <button
          className="SearchPage_Btn"
          onClick={() => {
            onPlus();
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      )}
    </div>
  );
};

export default SearchPage;
