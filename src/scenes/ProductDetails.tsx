import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';

interface Product {
  brand: string;
  category: string;
  description: string;
  images: Array<string>;
  price: string;
}

const ProductDetails = () => {
  const route = useRoute();
  const products = useSelector((state: RootState) => state.product);
  const [product, setProduct] = React.useState<Product>();

  useEffect(() => {
    const singleProduct = products.products.find(
      (prod: any) => prod.id === route.params?.id,
    );
    console.log(singleProduct.images);
    setProduct(singleProduct);
  }, [route.params?.id]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {product === null ? (
        <View style={{flex: 1}}>
          <Text>loading</Text>
        </View>
      ) : (
        <>
          <View style={styles.card}>
            <View style={{height: '30%', padding: 5, borderRadius: 10}}>
              <Image source={{uri: product?.images[0]}} style={styles.image} />
            </View>
            <View style={styles.detail}>
              <View>
                <Text style={[styles.brand, styles.branddesc]}>Brand</Text>
                <Text style={styles.brand}>{product?.brand}</Text>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={[styles.brand, styles.branddesc]}>Price</Text>
                <Text
                  style={[
                    styles.brand,
                    {fontSize: Platform.OS === 'ios' ? 20 : 15},
                  ]}>
                  {product?.price} Rs
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.desctext, {color: '#f4511e'}]}>
                Description :-
              </Text>
              <Text style={[styles.desctext, styles.extradesc]}>
                {product?.description}
                {product?.description}
                {product?.description}
                {product?.description}
                {product?.description}
              </Text>
            </View>
          </View>
          <View style={styles.buy}>
            <Text style={styles.text}>Buy Now</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '80%',
    padding: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation: 8,
    borderRadius: 50,
    marginBottom: 10,
  },
  brand: {
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    // paddingTop: 5,
    color: '#333',
  },
  buy: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#f4511e',
    width: '90%',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    alignContent: 'center',
    padding: 0,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#f4511e',
  },
  text: {
    width: '90%',
    margin: 10,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    fontWeight: '500',
    color: '#fff',
  },
  desctext: {
    marginLeft: 10,
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    fontWeight: '500',
    color: '#333',
  },
  extradesc: {
    fontSize: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 5,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  branddesc: {
    fontSize: Platform.OS === 'ios' ? 20 : 15,
    color: '#f4511e',
  },
});
