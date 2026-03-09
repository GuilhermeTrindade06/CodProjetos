import { View,Text, Image, Button } from "react-native";
import {styles} from "./StyleDetalhes";

export default function LojaDetalhes({route, navigation}) {
    const {loja}=route.params;
    return(
        <View style={styles.container}>
            <Image source={{uri: loja.imagem}} style={styles.image}/>
        <View style={styles.content}>
            <Text style={styles.nome}>{loja.nome}</Text>
            <Text style={styles.categoria}>{loja.nome}</Text>
            <Text style={styles.descricao}>Bem-Vindo à {loja.nome}! 
                aqui você encontra os melhores produtos da região com entrega rapida</Text>

            <Button
                title="Voltar para Home"
                onPress={()=> navigation.goBack()}
                color={"#27ae60"}
            />
            </View>
            </View>
    );
}