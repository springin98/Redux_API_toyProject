import { useCallback, useState } from 'react';
import axios from 'axios';

import SearchEntpName from './SearchEntpName';
import SearchItemName from './SearchItemName';
import SeachEfcyQesitm from './SeachEfcyQesitm';

import Modal from './Modal';
import ModalPortal from './ModalPortal';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalItemName,
  modalAtpnQesitm,
  modalDepositMethodQesitm,
  modalEfcyQesitm,
  modalUseMethodQesitm,
} from '../modules/modal';

function Search() {
  //검색 변수 Redux
  const itemName = useSelector((state) => state.search.Itemname);
  const entpName = useSelector((state) => state.search.EntpName);
  const efcyQesitm = useSelector((state) => state.search.Efcyqesitm);

  const numOfRows = '100';
  const [result, setResult] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${API_KEY}&type=json&itemName=${itemName}&entpName=${entpName}&efcyQesitm=${efcyQesitm}&numOfRows=${numOfRows}`;

  const searchItem = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        });
        setResult(data);
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  //modal 창 변수 Redux
  const dispatch = useDispatch();
  const onItemName = useCallback(
    (name) => dispatch(modalItemName(name)),
    [dispatch],
  );
  const onAtpnQesitm = useCallback(
    (atpnQesitm) => dispatch(modalAtpnQesitm(atpnQesitm)),
    [dispatch],
  );
  const onDepositMethodQesitm = useCallback(
    (depositMethodQesitm) =>
      dispatch(modalDepositMethodQesitm(depositMethodQesitm)),
    [dispatch],
  );
  const onEfcyQesitmName = useCallback(
    (efcyQesitm) => dispatch(modalEfcyQesitm(efcyQesitm)),
    [dispatch],
  );
  const onUseMethodQesitm = useCallback(
    (useMethodQesitm) => dispatch(modalUseMethodQesitm(useMethodQesitm)),
    [dispatch],
  );

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
      {Object.keys(result).length !== 0 && (
        <div>
          <div>검색 결과 :{result.data.body.totalCount}</div>
          {result.data.body.items.map((item) => (
            <button
              onClick={() => {
                onItemName(item.itemName);
                onAtpnQesitm(item.atpnQesitm);
                onDepositMethodQesitm(item.depositMethodQesitm);
                onEfcyQesitmName(item.efcyQesitm);
                onUseMethodQesitm(item.useMethodQesitm);
                handleOpen();
              }}
              key={item.itemSeq}
            >
              <div>{item.itemName}</div>
              <div>{item.entpName}</div>
            </button>
          ))}
        </div>
      )}
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
