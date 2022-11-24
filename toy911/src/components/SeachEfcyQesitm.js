const SeachEfcyQesitm = (props) => {
  return (
    <input
      placeholder="증상을 입력하세요"
      value={props.efcyQesitm}
      onChange={(e) => props.setEfcyQesitm(e.target.value)}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SeachEfcyQesitm;
