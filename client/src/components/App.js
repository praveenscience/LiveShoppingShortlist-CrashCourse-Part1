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
  const [FormItem, SetFormItem] = useState("");
  const [FormFreq, SetFormFreq] = useState("");
  const [Import, setImport] = useState("");
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
  const handleAddForm = e => {
    e.preventDefault();
    AddItem(FormFreq, FormItem);
    SetFormItem("");
  };
  return (
    <div className="App">
      <Header dark={true} className="Header mb-3">
        Shopping Shortlist
      </Header>
      <Container fluid={true}>
        <div className="col-12">
          <form className="form-inline" onSubmit={handleAddForm}>
            <div className="form-group mr-sm-3 mb-2">
              <label htmlFor="ItemName" className="sr-only">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                id="ItemName"
                placeholder="Item Name"
                value={FormItem}
                onChange={e => SetFormItem(e.target.value)}
              />
            </div>
            <div className="form-group mr-sm-3 mb-2">
              <select
                className="custom-select"
                value={FormFreq}
                onChange={e => SetFormFreq(e.target.value)}
              >
                <option disabled value="">
                  Frequency
                </option>
                {Object.keys(List).map((Freq, key) => (
                  <option value={Freq} key={key}>
                    {Freq}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mr-sm-3 mb-2"
              disabled={
                FormItem.trim().length === 0 || FormFreq.trim().length === 0
              }
            >
              <i className="fa fa-cart-plus"></i> Add Item
            </button>
            <button className="btn btn-info mb-2">
              <i className="fa fa-refresh"></i> Import / Export
            </button>
          </form>
        </div>
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-refresh"></i> Import / Export
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h5>Current State to Export</h5>
                  <pre className="border rounded bg-light p-2">
                    {JSON.stringify(List, null, 2)}
                  </pre>
                </div>
                <div className="col-6">
                  <h5>Enter JSON to Import</h5>
                  <textarea
                    className="border rounded bg-light p-2 w-100"
                    value={Import}
                    onChange={e => setImport(e.target.value)}
                  />
                  <div className="text-right">
                    <button
                      className="btn btn-danger"
                      onClick={e => {
                        e.preventDefault();
                        setList(JSON.parse(Import));
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card-deck">
            {Object.keys(List).map((Freq, key) => (
              <div className="card" key={key}>
                <div className="card-header text-center">{Freq}</div>
                <ul className="list-group list-group-flush">
                  {List[Freq].length > 0 ? (
                    List[Freq].map((item, k) => (
                      <li
                        className="list-group-item list-group-item-action"
                        key={k}
                      >
                        {item}
                        <button
                          className="btn btn-danger float-right btn-sm"
                          onClick={e => {
                            e.preventDefault();
                            DeleteItem(Freq, k);
                          }}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
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
