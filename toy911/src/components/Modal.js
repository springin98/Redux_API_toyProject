import { useSelector } from 'react-redux';

const Modal = (props) => {
  const modalItemName = useSelector((state) => state.modal.Itemname);
  const modalAtpnQesitm = useSelector((state) => state.modal.AtpnQesitm);
  const modalDepositMethodQesitm = useSelector(
    (state) => state.modal.DepositMethodQesitm,
  );
  const modalEfcyQesitm = useSelector((state) => state.modal.EfcyQesitm);
  const modalUseMethodQesitm = useSelector(
    (state) => state.modal.UseMethodQesitm,
  );

  return (
    <div>
      <div>{modalItemName}</div>
      <p dangerouslySetInnerHTML={{ __html: modalAtpnQesitm }}></p>
      <p dangerouslySetInnerHTML={{ __html: modalDepositMethodQesitm }}></p>
      <p dangerouslySetInnerHTML={{ __html: modalEfcyQesitm }}></p>
      <p dangerouslySetInnerHTML={{ __html: modalUseMethodQesitm }}></p>
    </div>
  );
};

export default Modal;
