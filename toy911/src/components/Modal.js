import { useSelector } from 'react-redux';

const Modal = (props) => {
  const modalItem = useSelector((state) => state.modal);

  return (
    <div>
      <div>{modalItem.Itemname}</div>
      <p dangerouslySetInnerHTML={{ __html: modalItem.AtpnQesitm }}></p>
      <p
        dangerouslySetInnerHTML={{ __html: modalItem.DepositMethodQesitm }}
      ></p>
      <p dangerouslySetInnerHTML={{ __html: modalItem.EfcyQesitm }}></p>
      <p dangerouslySetInnerHTML={{ __html: modalItem.UseMethodQesitm }}></p>
    </div>
  );
};

export default Modal;
