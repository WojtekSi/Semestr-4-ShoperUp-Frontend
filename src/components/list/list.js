import React, { useState, useEffect } from "react";
import ListItem from "./list_item/listItem";

const List = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          props.url
        )
          .then((response) => response.json())
          .then((response) => response.splice(0, props.lengthList));

        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Ładowanie danych...</p>;
  }


  return (
    <ul>
      {data.map((value, index) => (
        <ListItem key={`key-${index}`}>{value.title}</ListItem>
      ))}
    </ul>
  );
};

export default List;
