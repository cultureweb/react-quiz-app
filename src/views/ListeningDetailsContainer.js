import React, { useState, useEffect } from "react";

function ListeningDetailsContainer({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `https://cwb-server.herokuapp.com/api/v1/posts/${match.params.id}`
      );
      const data = await response.json();
      setItem(data.item);
    };
    fetchItem();
  }, [match]);

  if (!item) {
    return "loading...";
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
}

export default ListeningDetailsContainer;
