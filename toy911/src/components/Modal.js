import axios from 'axios';
import { useEffect, useState } from 'react';

const Modal = (props) => {
  /*
  const [result, setResult] = useState({});
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${props.API_KEY}&type=json&itemName=${props.modalItem}`;

  const searchItem = async (e) => {
    try {
      const data = await axios({
        method: 'get',
        url: url,
      });
      setResult(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    searchItem();
  });

  return (
    <div>
      {Object.keys(result).length !== 0 && (
        <div>
          <div>{result.data.body.items[0].itemName}</div>
          <div>{result.data.body.items[0].entpName}</div>
        </div>
      )}
    </div>
  );
  */

  return (
    <div>
      <div>{props.modalItemName}</div>
      <p dangerouslySetInnerHTML={{ __html: props.modalAtpnQesitm }}></p>
      <p
        dangerouslySetInnerHTML={{ __html: props.modalDepositMethodQesitm }}
      ></p>
      <p dangerouslySetInnerHTML={{ __html: props.modalEfcyQesitm }}></p>
      <p dangerouslySetInnerHTML={{ __html: props.modalUseMethodQesitm }}></p>
    </div>
  );
};

export default Modal;
