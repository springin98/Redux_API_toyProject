import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import SearchEntpName from './SearchEntpName';
import SearchItemName from './SearchItemName';
import SeachEfcyQesitm from './SeachEfcyQesitm';
import SearchPagePlus from './SearchPagePlus';

import Modal from './Modal';
import ModalPortal from './ModalPortal';
import { useDispatch, useSelector } from 'react-redux';
import { modalAdd } from '../modules/modal';

function Search() {
  //검색 변수 Redux
  const itemName = useSelector((state) => state.search.Itemname);
  const entpName = useSelector((state) => state.search.EntpName);
  const efcyQesitm = useSelector((state) => state.search.Efcyqesitm);

  const numOfRows = '100';
  const [result, setResult] = useState({});

  //페이지 이동
  const pageNo = useSelector((state) => state.search.PageNo);
  const [pageNoCount, setPageNoCount] = useState(10);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        });
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
    if (pageNo <= pageNoCount) {
      fetchAndSetUser();
    }
  }, [pageNo]);

  //API 호출
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${API_KEY}&type=json&itemName=${itemName}&entpName=${entpName}&efcyQesitm=${efcyQesitm}&numOfRows=${numOfRows}&pageNo=${pageNo}`;

  const searchItem = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        });
        setResult(data);
        console.log(data);
        setPageNoCount(Math.ceil(data.data.body.totalCount / 100));
      } catch (err) {
        alert(err);
      }
    }
  };

  //modal 창 변수 Redux
  const dispatch = useDispatch;
  const onModalAdd = useCallback(
    (name, atpnQesitm, depositMethodQesitm, efcyQesitm, useMethodQesitm) =>
      dispatch(
        modalAdd(
          name,
          atpnQesitm,
          depositMethodQesitm,
          efcyQesitm,
          useMethodQesitm,
        ),
      ),
    [dispatch],
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
    <div>
      <SearchItemName searchItem={searchItem} />
      <SearchEntpName searchItem={searchItem} />
      <SeachEfcyQesitm searchItem={searchItem} />
      {Object.keys(result).length !== 0 && result.data.body.totalCount !== 0 && (
        <div>
          <div>검색 결과 :{result.data.body.totalCount}</div>
          {result.data.body.items.map((item) => (
            <button
              onClick={() => {
                onModalAdd(
                  item.itemName,
                  item.atpnQesitm,
                  item.depositMethodQesitm,
                  item.efcyQesitm,
                  item.useMethodQesitm,
                );
                handleOpen();
              }}
              key={item.itemSeq}
            >
              <div>{item.itemName}</div>
              <div>{item.entpName}</div>
            </button>
          ))}
          {/* {pageNoCount > 1 && (
            <div>
              <span>현재 페이지 : {pageNo}</span>
              <button onClick={() => {}}>+</button>
            </div>
          )} */}
          <SearchPagePlus pageNoCount={pageNoCount} />
          <div>현재 페이지 : {pageNo}</div>
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
