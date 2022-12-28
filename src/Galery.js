import React from "react";
import GoodCard from "./GoodCard";

class Galery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          id: 1,
          category: "LEGO Star Wars",
          name: "The Mandalorian",
          image: "https://bi.ua/uploaded-images/products/size_400/571161_1.jpg",
          price: "2699 грн",
          number:"75328"
        },
        {
          id: 2,
          category: "LEGO Star Wars",
          name: "BB-8",
          image: "https://images.prom.ua/4013745750_w640_h640_lego-star-wars.jpg",
          price: "13 799 грн",
          number:"75187"
        },
        {
          id: 3,
          category: "LEGO Star Wars",
          name: "Luke Skywalker's X-Wing Fighter",
          image: "https://bi.ua/uploaded-images/products/size_400/560700_1.jpg",
          price: "1949 грн",
          number:"75301"
        },
        {
          id: 4,
          category: "LEGO Architecture",
          name: "Great Pyramid Of Giza",
          image: "https://bi.ua/uploaded-images/products/size_400/576338_1.jpg",
          price: "5399 грн",
          number:"21058"
        },
        {
          id: 5,
          category: "LEGO Architecture",
          name: "Singapore",
          image: "https://bi.ua/uploaded-images/products/size_400/571106_1.jpg",
          price: "2299 грн",
          number:"21057"
        },
        {
          id: 6,
          category: "LEGO Architecture",
          name: "Taj Mahal",
          image: "https://bi.ua/uploaded-images/products/size_400/564853_1.jpg",
          price: "4599 грн",
          number:"21056"
        }
      ],
    };
  }
  render() {
    return (
      <div className="galery">
        {this.state.goods.map((g) => (
          <GoodCard key={g.id} good={g} />
        ))}
      </div>
    );
  }
}

export default Galery;

