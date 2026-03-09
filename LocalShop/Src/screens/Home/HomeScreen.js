import {View, Text, FlatList}from "react-native";
import LojaCard from "../../components/LojaCard";
import {LOJAS} from "../../data/mockData";


export default function HomeScreen(){
    return( 
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Lojas Proximas</Text>
            <FlatList
                data={LOJAS}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><LojaCard LOJAS={item}/>}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}