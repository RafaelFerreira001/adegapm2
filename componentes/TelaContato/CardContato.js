import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';



const CardContato = ({titulo,icone,info,infotxt})=>{
    return(
        <ImageBackground style={estilo.card}>
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.icone}>{icone}</Text>
            <Text style={estilo.informacao}>{info}</Text>
            <Text style={estilo.informacaotxt}>{infotxt}</Text>
    
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: 'grey'
    },
    titulo:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
       
    },
    icone:{
        textAlign: "center",
    },
    informacao:{
        fontSize: 18,
        padding:5,       
        color: "#400303",
        textAlign: "center",
        
    },
    informacaotxt:{
        fontSize: 16,
        padding:5,      
        color: "#400303",
        textAlign: "center",
        marginBottom: 80
        
        
    },

  });
  
  export default CardContato;