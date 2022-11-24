const SearchItemName = (props) => {
  return (
    <input
      placeholder="약품명을 입력하세요"
      value={props.itemName}
      onChange={(e) => props.setItemName(e.target.value)}
      type="text"
      onKeyDown={props.searchItem}
    />
  );
};

export default SearchItemName;
