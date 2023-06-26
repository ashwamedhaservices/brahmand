import React from "react";
import Network_Info from "../../_mock/network_info";
import "./index.css";

const NetworkInfo = () => {
  return (
    <div
        className="k-mt32 k-pl8 k-flex k-fnw scrollbar__container scrollbar"
        style={{ paddingBottom: "23px" }}
      >
      {Network_Info.map((card) => (
        <div className="network-container">
          <div key={card.id} className="symbol-card-container">
            <div className="symbol-container" key={card.id}>
              <img src={card.symbol} alt={card.title} />{" "}
            </div>
            <div className="text-container">
              <h3 className="no-wrap">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkInfo;
