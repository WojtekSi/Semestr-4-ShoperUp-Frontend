const ListItem = ({ children }) => {
  const handleOnClick = (text) => console.log(text);

  return <li onClick={() => handleOnClick(children)}>{children}</li>;
};

export default ListItem;
