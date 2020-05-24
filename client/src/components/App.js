import React, { useState } from "react";
import Header from "./Shared/Header";
import Container from "./Shared/ContainerRow";

const App = () => {
  const [List, setList] = useState({
    Daily: [],
    Weekly: [],
    BiWeekly: [],
    Monthly: []
  });
  const AddItem = (Freq, Item) => {
    const NewList = { ...List };
    NewList[Freq] = [...List[Freq]];
    if (Item.trim().length > 0) {
      NewList[Freq].push(Item);
      setList(NewList);
      return NewList[Freq].length - 1;
    }
  };
  const DeleteItem = (Freq, ItemId) => {
    const NewList = { ...List };
    NewList[Freq] = [...List[Freq]];
    if (!!NewList[Freq][ItemId]) {
      NewList[Freq].splice(ItemId, 1);
      setList(NewList);
    }
  };
  return (
    <div className="App">
      <Header dark={true} className="Header mb-3">
        Shopping Shortlist
      </Header>
      <Container fluid={true}>
        <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3"></div>
      </Container>
    </div>
  );
};

export default App;
