import { useSelector } from 'react-redux';
import '../modules/modal';
import '../styled/modal.css';

const Modal = (props) => {
  const modalItem = useSelector((state) => state.modal);

  return (
    <div className="Modal_div">
      <div className="Modal_ItemName">{modalItem.Itemname}</div>
      <div className="Modal_div_div">
        <p className="Modal_Title">효능</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.EfcyQesitm }}></p>
      </div>
      <div className="Modal_div_div">
        <p className="Modal_Title">사용법</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.UseMethodQesitm }}></p>
      </div>
      <div className="Modal_div_div">
        <p className="Modal_Title">주의 사항</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.AtpnWarnQesitm }}></p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.AtpnQesitm }}></p>
      </div>
      <div className="Modal_div_div">
        <p className="Modal_Title">보관법</p>
        <p
          dangerouslySetInnerHTML={{ __html: modalItem.DepositMethodQesitm }}
        ></p>
      </div>
      {modalItem.IntrcQesitm === '' && (
        <div className="Modal_div_div">
          <p className="Modal_Title">상호 작용</p>
          <p dangerouslySetInnerHTML={{ __html: modalItem.IntrcQesitm }}></p>
        </div>
      )}
    </div>
  );
};

export default Modal;
