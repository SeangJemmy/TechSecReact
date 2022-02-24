import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axios";

const ListContext = createContext({
  productData: [],
  setPD: () => {},
});

export function GetProductData() {
  return useContext(ListContext);
}

export const ListContextProvider = ({ children }) => {
  const [productData, setPD] = useState(
    null
    //
    // [
    //   {
    //     product_id: "001",
    //     product_name: "Reload Your Browser",
    //     product_category: "phone",
    //     product_price: "0",
    //     product_discount_price: "0",
    //     image: "./logo512.png",
    //     product_brand: "apple",
    //     product_verified: "true",
    //   },
    // ]
    //
  );

  useEffect(() => {
    api
      .get(`api`)
      .then((res) => {
        setPD(() => res.data.productitems);
        console.log("API Responded: " + Date());
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <ListContext.Provider value={{ productData, setPD }}>
      {children}
    </ListContext.Provider>
  );
};
