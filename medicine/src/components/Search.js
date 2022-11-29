import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../styled/search.scss';

import SearchEntpName from './SearchEntpName';
import SearchItemName from './SearchItemName';
import SeachEfcyQesitm from './SeachEfcyQesitm';
import SearchPage from './SearchPage';

import Modal from './Modal';
import ModalPortal from './ModalPortal';
import { useDispatch, useSelector } from 'react-redux';
import { modalAdd } from '../modules/modal';
import { searchPageClear } from '../modules/search';

function Search() {
  //검색 변수 Redux
  const itemName = useSelector((state) => state.search.Itemname);
  const entpName = useSelector((state) => state.search.EntpName);
  const efcyQesitm = useSelector((state) => state.search.Efcyqesitm);

  const numOfRows = '30';
  const [result, setResult] = useState({});

  //페이지 이동
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.search.PageNo);
  const onPageClear = useCallback(
    () => dispatch(searchPageClear()),
    [dispatch],
  );

  const [pageNoCount, setPageNoCount] = useState(10);
  useEffect(() => {
    if (pageNo <= pageNoCount) {
      apiGet();
    }
  }, [pageNo, pageNoCount]);

  //API 호출
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${API_KEY}&type=json&itemName=${itemName}&entpName=${entpName}&efcyQesitm=${efcyQesitm}&numOfRows=${numOfRows}&pageNo=${pageNo}`;

  const apiGet = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: url,
      });
      setResult(data);
      // console.log(data);
      setPageNoCount(Math.ceil(data.data.body.totalCount / numOfRows));
    } catch (err) {
      alert(err);
    }
  };
  const searchItem = (e) => {
    if (e.key === 'Enter') {
      apiGet();
      onPageClear();
    }
  };

  //modal 창 변수 Redux
  const onModalAdd = (
    name,
    atpnQesitm,
    depositMethodQesitm,
    efcyQesitm,
    useMethodQesitm,
    atpnWarnQesitm,
    intrcQesitm,
    itemImage,
  ) =>
    dispatch(
      modalAdd(
        name,
        atpnQesitm,
        depositMethodQesitm,
        efcyQesitm,
        useMethodQesitm,
        atpnWarnQesitm,
        intrcQesitm,
      ),
    );

  //모달창 보이게&사라지게 하기
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="Search_div">
      <div className="Search_input_div">
        <SearchItemName searchItem={searchItem} />
        <SearchEntpName searchItem={searchItem} />
        <SeachEfcyQesitm searchItem={searchItem} />
      </div>
      {Object.keys(result).length !== 0 && result.data.body.totalCount !== 0 && (
        <div className="Search_Result_div">
          <div className="Search_ResultCount">
            검색 결과 :{result.data.body.totalCount}
          </div>
          <div className="Search_Result_Btn_div">
            <ul className="Search_Result_Btn_ul">
              {result.data.body.items.map((item) => (
                <li className="Search_Result_Btn_li">
                  <button
                    key={item.itemSeq}
                    className="Search_Result_Btn"
                    onClick={() => {
                      onModalAdd(
                        item.itemName,
                        item.atpnQesitm,
                        item.depositMethodQesitm,
                        item.efcyQesitm,
                        item.useMethodQesitm,
                        item.atpnWarnQesitm,
                        item.intrcQesitm,
                      );
                      handleOpen();
                    }}
                  >
                    <div className="Search_Result_Name">{item.itemName}</div>
                    <div className="Search_Result_Entp">{item.entpName}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {pageNoCount > 1 && (
            <SearchPage pageNoCount={pageNoCount} pageNo={pageNo} />
          )}
        </div>
      )}
      {Object.keys(result).length !== 0 &&
        result.data.body.totalCount === 0 && <div>검색 결과 없음</div>}
      {modal && (
        <ModalPortal closePortal={handleClose}>
          <Modal />
        </ModalPortal>
      )}
      <div id="root-modal" />
    </div>
  );
}

export default Search;
