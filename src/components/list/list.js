import ListItem from "./list_item/listItem";

const List = () => {
  const table = [
    "Lorem",
    "ipsum",
    "dolor sit",
    "amet consectetur",
    "adipiscing elit",
  ];

  return (
    <ul>
      {table.map((value, index) => (
        <ListItem key={`key-${index}`}>{value}</ListItem>
      ))}
    </ul>
  );
};

export default List;
