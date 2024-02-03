import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultList({title,result}) {
    console.log(result);
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={()=>navigation.navigate("ResultShow",{id:item.id})}>
              <ResultDetail result={item}/>
            </TouchableOpacity>
          )
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    }
})