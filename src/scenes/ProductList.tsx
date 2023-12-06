import { View, Text } from 'react-native';
import React from 'react';
import { setProducts } from '../redux/ProductSlice';
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then(async res => {
           const data = await res.json();
           dispatch(setProducts(data.products));
           console.log(data.products.length);
        }).catch((e)=>{
            console.log(e)
        })
      });
  return (
    <View>
      <Text>ProductList</Text>
    </View>
  )
}

export default ProductList