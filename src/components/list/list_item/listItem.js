import { useState } from "react";

const ListItem = ({ children }) => {
  const [className, setClassName] = useState(null);

  const handleOnClick = () => {
    setClassName(className == null ? "colorRed" : null);
    document.title = children;
  };

  return (
    <li className={className} onClick={() => handleOnClick()}>
      {children}
    </li>
  );
};

export default ListItem;
