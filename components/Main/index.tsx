import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import {AntDesign} from "@expo/vector-icons";

export default function main(){
return(
    <View style={styles.main}>
<View style={styles.conta}>
    <Text style={styles.txtconta}>
        Conta
    </Text>
    <AntDesign name="right" size={20} color="black"/>

</View>
    <Text style={styles.saldo}>
        R$ 608,450,34
    </Text>
    <ScrollView horizontal={true} style={styles.transacoes}>
        {/* PIX */}
        <View style={styles.transacao}>
            <AntDesign name="antdesign" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Pix</Text>
        </View>

        {/* Pagar */}
        <View style={styles.transacao}>
            <AntDesign name="barcode" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Pagar</Text>
        </View>

       {/* Pagar emprestando */}
       <View style={styles.transacao}>
            <AntDesign name="doubleright" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Emprestar</Text>
        </View>
       {/* Transferir */}

       <View style={styles.transacao}>
            <AntDesign name="upload" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Transferir</Text>
        </View>
       {/* Depositar */}

       <View style={styles.transacao}>
            <AntDesign name="download" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Depositar</Text>
        </View>
       {/* Recarga de celular  */}

       <View style={styles.transacao}>
            <AntDesign name="scan1" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Recarga celular</Text>
        </View>
       {/* Cobrar */}

       <View style={styles.transacao}>
            <AntDesign name="exception1" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Cobrar</Text>
        </View>
       {/* Doação */}

       <View style={styles.transacao}>
            <AntDesign name="downcircle" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Doar</Text>
        </View>

       {/* Transferir internac */}
       <View style={styles.transacao}>
            <AntDesign name="indent-right" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Transferir inter</Text>
        </View>
       {/* Investir */}

       <View style={styles.transacao}>
            <AntDesign name="rightsquare" size={20} color={"black"} style={styles.icontransacao}/>
            <Text>Investir</Text>
        </View>        
    </ScrollView>
<View style={styles.meuscartoes}>
    <AntDesign name="creditcard" size={20} color={"black"} style={{paddingRight:10}}></AntDesign>
    <Text>Meus cartões</Text>
</View>
    <View style={{borderBottomColor:"black", borderWidth:0.4, marginTop: 15, borderColor:"#d3d3d3"}}>

    </View>
</View>


    )

}