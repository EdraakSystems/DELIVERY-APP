import { StyleSheet } from "react-native";
import {RF} from "../../shared/theme/responsive";
import colors from "../../assets/colors/colors";
const tabStyles = StyleSheet.create({
   iconStyle:{
       height:RF(20),
       width:RF(20),
       resizeMode:'contain'
   },
   addProductStyles:{
       backgroundColor:colors.APP_GOLD,
       height:RF(45),
       width:RF(45),
       borderRadius:RF(22.5),
       justifyContent:'center',
       alignItems:"center",
       position:'absolute',
       bottom:RF(2),
       shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.5,
shadowRadius: 3.84,

elevation: 5,

   },
   tabBarStyles:{
       backgroundColor:colors.WHITE,
       // borderWidth:1,
       // paddingBottom:RF(10),
       height:"100%",
       // borderTopRightRadius:RF(15),
       // borderTopLeftRadius:RF(15),
       shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.5,
shadowRadius: 3.84,

elevation: 5,

   },
   tabBarItem:{
       height:"100%",
       width:"70%",
       justifyContent:'center',
       alignItems:"center",
   },
   topBorStyes:{
       height:RF(3.5),
       width:"100%",
       position:"absolute",
       top:0,
       borderBottomLeftRadius:RF(12),
       borderBottomRightRadius:RF(12),
   }
});

export default tabStyles;
