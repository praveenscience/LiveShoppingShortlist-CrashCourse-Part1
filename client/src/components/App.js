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
    NewList[Freq].push(Item);
    setList(NewList);
  };
  return (
    <div className="App">
      <Header dark={true} className="Header mb-3">
        Shopping Shortlist
      </Header>
      <Container fluid={true}>
        <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3">
          <pre className="border p-3 bg-light">
            {JSON.stringify(List, null, 2)}
          </pre>
          <button
            className="btn btn-primary"
            onClick={e => {
              e.preventDefault();
              AddItem("Daily", "Cheese");
            }}
          >
            Add Cheese to Daily List
          </button>
          <button
            className="btn btn-primary ml-3"
            onClick={e => {
              e.preventDefault();
              AddItem("Daily", "Milk");
            }}
          >
            Add Milk to Daily List
          </button>
        </div>
      </Container>
    </div>
  );
};

export default App;
