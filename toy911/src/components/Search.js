import { useState } from 'react';
import axios from 'axios';

import SearchEntpName from './SearchEntpName';
import SearchItemName from './SearchItemName';
import SeachEfcyQesitm from './SeachEfcyQesitm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

function Search() {
  const [itemName, setItemName] = useState('');
  const [entpName, setEntpName] = useState('');
  const [efcyQesitm, setEfcyQesitm] = useState('');
  const [numOfRows, setNumOfRows] = useState('100');
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

  const [modalItemName, setModalItemName] = useState('');
  const [modalAtpnQesitm, setModalAtpnQesitm] = useState('');
  const [modalDepositMethodQesitm, setModalDepositMethodQesitm] = useState('');
  const [modalEfcyQesitm, setModalEfcyQesitm] = useState('');
  const [modalUseMethodQesitm, setModalUseMethodQesitm] = useState('');
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <SearchItemName
        itemName={itemName}
        setItemName={setItemName}
        searchItem={searchItem}
      />
      <SearchEntpName
        entpName={entpName}
        setEntpName={setEntpName}
        searchItem={searchItem}
      />
      <SeachEfcyQesitm
        efcyQesitm={efcyQesitm}
        setEfcyQesitm={setEfcyQesitm}
        searchItem={searchItem}
      />
      {Object.keys(result).length !== 0 && (
        <div>
          <div>검색 결과 :{result.data.body.totalCount}</div>
          {result.data.body.items.map((item) => (
            <button
              onClick={() => {
                setModalItemName(item.itemName);
                setModalAtpnQesitm(item.atpnQesitm);
                setModalDepositMethodQesitm(item.depositMethodQesitm);
                setModalEfcyQesitm(item.efcyQesitm);
                setModalUseMethodQesitm(item.useMethodQesitm);
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
          <Modal
            modalItemName={modalItemName}
            modalAtpnQesitm={modalAtpnQesitm}
            modalDepositMethodQesitm={modalDepositMethodQesitm}
            modalEfcyQesitm={modalEfcyQesitm}
            modalUseMethodQesitm={modalUseMethodQesitm}
          />
        </ModalPortal>
      )}
      <div id="root-modal" />
    </div>
  );
}

export default Search;
