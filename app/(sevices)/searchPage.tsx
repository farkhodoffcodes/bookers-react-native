import { View, Text } from 'react-native'
import React from 'react'
import Navbar from './../(navigation)/navbar';

const SearchPage = () => {
  return (
    <View>
      <Navbar name='Здоровье и красота волос' icons={false} centerName={true} back={true} />
      <View>
        {/* filter button                  checkbox text */}
      </View>
      <View>
        {/* search input */}
      </View>
    </View>
  )
}

export default SearchPage