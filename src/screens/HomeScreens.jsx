import {StyleSheet, Text, View, Image, TextInput, FlatList} from 'react-native';
import React ,{useState} from 'react';
import {colors} from '../constants/color';
import {spacing, fontSize, iconSize} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../Data/smartwatch';
import { headphones } from '../Data/headPhone';
import { category } from '../Data/categorydata';
const HomeScreens = () => {
  
  const [data, setData] = useState(smartWatch);

  const [selectedCategory, setSelectedCategory] = useState("Smart Watch");

  
   
    const handleUpdateCategory = (newCategory) => {
      if (newCategory === "Smart Watch") {
        setData(smartWatch);
      } else if (newCategory === "Headphones") {
        setData(headphones);
      }
      setSelectedCategory(newCategory);
    };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            {/* search Input  */}
            <View style={styles.mainInputcontainer}>
              <View style={styles.searchinputWrapper}>
                <Image
                  source={require('../assets/Search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textinput}
                  placeholder="search product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              <View style={styles.category}>
                <Image
                  source={require('../assets/Category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />         
             </>
        }
        data={data}
        renderItem={({ item, index }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 500,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.sm,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  searchinputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textinput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    color: colors.black,
    fontFamily: fontFamily.Medium,
  },
});
