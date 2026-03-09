import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
  },
headerTitle:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:20,
    marginBottom:20,
    color: '#333',
},
list:{
    paddingHorizontal:20,
}
})


// export const styles = StyleSheet.create({
//     card:{
//         flexDirection:"row",
//         backgroundColor:"#fff",
//         borderRadius:8,
//         padding:10,
//         marginBottom:15,
//         elevation:3, //sombra no android
//         shadowColor:"#000",//sombra no ios
//         shadowOffset:{width: 0, height:2},
//         shadowOpacity:0.1,
//         shadowRadius:4,
//     },
//     image:{
//         width:80,
//         height:80,
//         borderRadius:8,
//     },
//     info:{
//         marginLeft:15,
//         justifyContent:"center",
//     },
//     nome:{
//         fontSize:18,
//         fontWeight:"bold",
//     },
//     categoria:{
//         color: "#666",
//         fontSize:14,
//     },
//     distancia:{
//         color:"#27ae60",
//         fontSize:12,
//         marginTop:5,
//     }
// });