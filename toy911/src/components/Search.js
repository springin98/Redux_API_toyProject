import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY =
    'zZ06UXTgj%2Bht%2By4RgEZLeQtepG%2BEn%2FDCQ5tAdVJgYYZh7pAJqZ2MIsQaai9FOlsZEqzVsNnWmTdexKGsZUvXyQ%3D%3D';

  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${API_KEY}&itemName=${location}&type=json`;

  const searchWeather = async (e) => {
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

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="약품명을 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <span>
            {result.data.body.items.map((item) => (
              <span key={item.itemSeq}>{item.itemName}</span>
            ))}
          </span>
        )}
      </div>
    </AppWrap>
  );
}

export default Search;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
`;
