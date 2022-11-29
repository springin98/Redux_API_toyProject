import { useSelector } from 'react-redux';

const Modal = (props) => {
  const modalItem = useSelector((state) => state.modal);

  return (
    <div>
      <div>{modalItem.Itemname}</div>
      <div>
        <p>효능</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.EfcyQesitm }}></p>
      </div>
      <div>
        <p>사용법</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.UseMethodQesitm }}></p>
      </div>
      <div>
        <p>주의 사항</p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.AtpnWarnQesitm }}></p>
        <p dangerouslySetInnerHTML={{ __html: modalItem.AtpnQesitm }}></p>
      </div>
      <div>
        <p>보관법</p>
        <p
          dangerouslySetInnerHTML={{ __html: modalItem.DepositMethodQesitm }}
        ></p>
      </div>
      {modalItem.IntrcQesitm === '' && (
        <div>
          <p>상호 작용</p>
          <p dangerouslySetInnerHTML={{ __html: modalItem.IntrcQesitm }}></p>
        </div>
      )}
    </div>
  );
};

export default Modal;
