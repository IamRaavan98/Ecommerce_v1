import React from "react";
import { useState, useEffect } from "react";
import { random, commerce } from "faker";
import Axios from "axios";
import Carditem from "./Carditem";

const BuyPage = ({ addInCart }) => {

  const URL = "https://api.jsonserve.com/MmYhr5";

  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(
      `https://mocki.io/v1/9716851d-1830-45d0-8ec8-b133358a84bc`
    );
 const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: photo.id,
    }));

    setProduct(allProduct);
  };
  

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Buy Page</h1>
    <div>
        <div className="grid grid-cols-3 ">
        {product.map((product) => (
                <div key={product.id} >
                  <Carditem className="" product={product} addInCart={addInCart} />
                </div>     
          ))}
        </div>
    </div>



      <tr>
        <td >
     
        </td>
      </tr>
    </div>
  );
};

export default BuyPage;
