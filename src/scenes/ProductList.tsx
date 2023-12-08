import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import {setProducts} from '../redux/ProductSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product);
  const [filterProduct, setFilterProduct] = React.useState(products.products);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const getData = () => {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(async res => {
        setLoading(false);
        const data = await res.json();
        dispatch(setProducts(data.products));
        setFilterProduct(data.products);
        console.log(data.products.length);
        // console.log(products.products);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const search = (val: string) => {
    const filteredProducts = products.products.filter((prod: any) =>
      prod.brand.includes(val),
    );
    setFilterProduct(filteredProducts);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#f8f9fa'}}>
      <View style={styles.container}>
        <View style={{width: '100%', height: 50, marginBottom: 10}}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter brand to search"
            onChangeText={(v: string) => search(v)}
          />
        </View>
        <FlatList
          data={filterProduct}
          showsVerticalScrollIndicator={false}
          onRefresh={() => getData()}
          refreshing={loading}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ProductDetails', {id: item.id})
              }
              style={{backgroundColor: 'white'}}>
              <View style={styles.card}>
                <View style={styles.imageview}>
                  <Image source={{uri: item.images[0]}} style={styles.image} />
                </View>
                <View>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <Text
                    style={[
                      styles.brand,
                      {fontSize: Platform.OS === 'ios' ? 15 : 13},
                    ]}>
                    {item.price} Rs
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#f4511e',
    padding: 5,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  brand: {
    fontSize: Platform.OS === 'ios' ? 20 : 15,
    marginLeft: 10,
    paddingTop: 5,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#f4511e',
  },
  container: {
    flex: 1,
    margin: 10,
    marginBottom: Platform.OS === 'ios' ? 50 : 0,
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageview: {height: '100%', padding: 5, borderRadius: 10},
});
