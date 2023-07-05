import { useEffect, useState } from "react";
import "./index.css";

const NetworkInfo = ({ earnings, networkSize, networkWidth, networkLength }) => {
  const [networkInfo, setNetworkInfo] = useState([]);

  useEffect(() => {
    setNetworkInfo(() => ([
      {
        id: 1,
        title: 'Network size',
        content: networkSize,
        symbol: '/assets/theme/network-info/light/network-size.svg',
      },
      {
        id: 2,
        title: 'Current earnings',
        content: earnings,
        symbol: '/assets/theme/network-info/light/current-earnings.svg',
      },
      {
        id: 3,
        title: 'Network width',
        content: networkWidth,
        symbol: 'assets/theme/network-info/light/network-width.svg',
      },
      {
        id: 4,
        title: 'Network length',
        content: networkLength,
        symbol: 'assets/theme/network-info/light/network-length.svg',
      },
    ]))
  }, [networkSize, earnings, networkWidth, networkLength])
  
  return (
    <div
      className="k-mt16 k-flex k-fnw scrollbar__container scrollbar"
      style={{ paddingBottom: "23px" }}
    >
      {networkInfo.map((card) => (
        <div className="network-container" key={card.id}>
          <div key={card.id} className="symbol-card-container">
            <div className="symbol-container" key={card.id}>
              <img src={card.symbol} alt={card.title} />{" "}
            </div>
            <div className="text-container">
              <h3 className="">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkInfo;
