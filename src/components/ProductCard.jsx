import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../constants/color';
import {fontSize, spacing} from '../constants/dimensions';
import { fontFamily } from '../constants/fonts';
import { smartWatch } from '../Data/smartwatch';
const imageUrl =
  'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694712318/Croma%20Assets/Communication/Wearable%20Devices/Images/300676_0_logazn.png';
  const ProductCard = ({item}) => {
  
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri :item.image}} style={styles.productImage} />
      </View>
      {/* content like name price */}
      <View style={styles.contentContainer}>
        <Text style={styles.ProductModel} numberOfLines={2}> {item.name} </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.ProductPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    elevation: 5,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginVertical: spacing.md,
  },
  imageWrapper: {
    borderRadius: 12,
    backgroundColor: '#FFC8B7',
    margin: spacing.sm,
  },
  productImage: {
    height: 120,
    width: '100%',
    resizeMode: 'center',
  },
  contentContainer:{
    paddingHorizontal:spacing.md,
    paddingBottom:spacing.md
  },
  ProductModel:{
    color:colors.black,
    fontSize:fontSize.md,
    fontFamily:fontFamily.SemiBold
  },
  brand:{
    color:colors.gray,
    fontSize:fontSize.sm,
    fontFamily:fontFamily.Medium,
    paddingVertical:spacing.xs
  },
  ProductPrice:{
    color:colors.purple,
    fontSize:fontSize.md,
    fontFamily:fontFamily.Medium,
    
  }
});
