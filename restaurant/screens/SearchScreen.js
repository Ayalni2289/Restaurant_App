import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'

export default function SearchScreen() {
  const [searchApi,result] = useResult();
  console.log(result);
  return (
    <View>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({})