import { StyleSheet,Text, View } from "react-native";
import{styles} from "./style";
import {AntDesign} from "@expo/vector-icons";
export default function Header(){
 
return(


<View style = {styles.Header}>
<View style={styles.iconsheader}>
    <AntDesign name="user" size={30} color={"white"} style={styles.iconuser} ></AntDesign>
    <AntDesign name="eyeo" size={30} color={"white"}></AntDesign>
    <AntDesign name="questioncircleo" size={30} color={"white"}></AntDesign>
    <AntDesign name="mail" size={30} color={"white"}></AntDesign>
</View>
</View>

    )
}