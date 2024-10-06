import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {colors} from '../constants/color';
import {category} from '../Data/categorydata';




const Category = ({selectedCategory,handleUpdateCategory}) => {
  
 

  return (
    <FlatList
      data={category}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            handleUpdateCategory(item.name);
          }}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {
                color: colors.purple,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.underLine} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={{paddingHorizontal: spacing.sm}} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
  },
  underLine: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.sm,
  },
});
