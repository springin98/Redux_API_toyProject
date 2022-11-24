import axios from 'axios';
import { useEffect, useState } from 'react';

const Modal = (props) => {
  const [result, setResult] = useState({});
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${props.API_KEY}&type=json&itemName=${props.modalItem}`;

  const searchItem = async (e) => {
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
  };

  useEffect(() => {
    searchItem();
  }, []);

  return (
    <div>
      test
      {Object.keys(result).length !== 0 && (
        <div>
          <div>{result.data.body.items.itemName}</div>
          <div>{result.data.body.items.entpName}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
