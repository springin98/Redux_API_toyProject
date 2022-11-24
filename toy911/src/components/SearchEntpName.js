const SearchEntpName = (props) => {
  return (
    <input
      placeholder="업체명을 입력하세요"
      value={props.entpName}
      onChange={(e) => {
        props.setEntpName(e.target.value);
      }}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SearchEntpName;
