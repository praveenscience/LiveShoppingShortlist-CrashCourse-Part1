import React, { useState } from "react";
import Header from "./Shared/Header";
import Container from "./Shared/ContainerRow";

const App = () => {
  const [List, setList] = useState({
    Daily: ["Milk", "Cheese"],
    Weekly: [],
    BiWeekly: [],
    Monthly: ["Rice"]
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
        <div className="col-12">
          <div className="card-deck">
            {Object.keys(List).map((Freq, key) => (
              <div className="card" key={key}>
                <div className="card-header text-center">{Freq}</div>
                <ul className="list-group list-group-flush">
                  {List[Freq].length > 0 ? (
                    List[Freq].map((item, k) => (
                      <li className="list-group-item" key={k}>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item text-center p-5">
                      Nothing to show here, please add one.
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
