import React from "react";
import Card from "./Card";
import '../App.css'

const Home = ({data, setAddtoCartData, addtoCartData}) => {


  return (
    <>
    <div className="container">
      {
        data?.map((element) => {
        return (
          <Card 
            key={element?.id}
            img={element?.image}
            title={element?.title}
            price={element?.price}
            reviews={element?.rating}
            setAddtoCartData={setAddtoCartData}
            element={element}
            addtoCartData={addtoCartData}
          />
        );
      })
      }
    </div>
    </>
  );
 
};

export default Home;
