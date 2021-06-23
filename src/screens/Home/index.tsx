import React from 'react';
import {View } from 'react-native'

import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles} from './styles';
import { useState } from 'react';

export function Home() {
  const [ category, setCategory ] = useState('')
  
  function handleCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />

      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategory}
        />
      </View>
    </View>
  );
}