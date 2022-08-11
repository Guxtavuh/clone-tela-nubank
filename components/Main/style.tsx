import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

main:{
    flex:1,
    padding: 10
},
conta:{
    flexDirection: "row",
    justifyContent: "space-between"
},

txtconta:{
    fontSize: 20,
},

saldo:{
    paddingTop: 20,
    fontSize: 25,
    fontWeight:"bold"
},
transacoes:{
padding:10,
flexDirection: "row",
minHeight:150
},
transacao:{
marginRight: 15,
justifyContent:"center",
alignItems:"center"
},

icontransacao:{
padding:20,
backgroundColor:"#d3d3d3",
borderRadius: 100

},
meuscartoes:{
    flexDirection:"row",
    padding:10,
    backgroundColor:"#d3d3d3",
    borderRadius:10


},
descubra:{
    backgroundColor:"silver",
    borderRadius:20,
    padding:20,
    margin:10,
    width:300
},
btndescobrir:{
    backgroundColor:"#5f249f",
    padding:10,
    color: "#fff",
    borderRadius:100,
    textAlign:"center",
    marginTop:20,
    width:100

}

    }
    
)