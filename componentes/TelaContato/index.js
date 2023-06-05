import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardContato from './CardContato';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';


export default function TelaContato() {

  const produtos = [
    {
      id:"1",
      titulo: "Entre em contato conosco para comprar nossos produtos",
    },
    {
      id:"2",
      icone: <FontAwesome name="phone" size={50} color="#400303" />,
      info: "Telefone:",
      infotxt: "+55 21 000000000",
    },
    {
      id:"3",
      icone: <Entypo name="location-pin" size={50} color="#400303" />,
      info: "Endereço:",
      infotxt:  "Av. 123, 222 - Rio de Janeiro RJ ",
    },
    {
      id:"4",
      icone: <MaterialIcons name="email" size={50} color="#400303" />,
      info: "Email:",
      infotxt:"preferida@adega.com.br",
    },
    {
        id:"5",
        icone: <FontAwesome name="instagram" size={50} color="#400303" />,
        info: "Instagram:",
        infotxt:"@adegapreferida",
      }
  ];
 
  return (
    <ScrollView>
  

        <View style={estilo.container2}>
          <FlatList
            data={produtos}
            renderItem={({item})=>
              <CardContato 
                  titulo={item.titulo}
                  icone={item.icone}
                  info={item.info}
                  infotxt={item.infotxt}
              />
            }
            keyExtractor={item => item.id}
          />        
        </View>
        
      </ScrollView>


  );
}