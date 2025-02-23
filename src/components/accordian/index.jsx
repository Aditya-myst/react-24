import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let updatedMultiple = [...multiple];
    const index = updatedMultiple.indexOf(getCurrentId);

    if (index === -1) updatedMultiple.push(getCurrentId);
    else updatedMultiple.splice(index, 1);

    setMultiple(updatedMultiple);
  }

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{(enableMultiSelection && multiple.includes(dataItem.id)) || selected === dataItem.id ? "−" : "+"}</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && <div className="acc-content">{dataItem.answer}</div>
                : selected === dataItem.id && <div className="acc-content">{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
