import { StyleSheet,Text, View } from "react-native";
import{styles} from "./style";
import {AntDesign} from "@expo/vector-icons";
export default function Header(){
 
return(

// header
<View style = {styles.Header}>
<View style={styles.iconsheader}>
    <AntDesign name="user" size={30} color={"white"} style={styles.iconuser} ></AntDesign>
    <AntDesign name="eyeo" size={26} color={"white"} style={{margin:10}}></AntDesign>
    <AntDesign name="questioncircleo" size={20} color={"white"}style={{margin:10}}></AntDesign>
    <AntDesign name="mail" size={22} color={"white"}style={{margin:10}}></AntDesign>
</View>

<Text style={styles.nomecliente}>
    Olá, Gustavo Henrique
</Text>


</View>

    )
}