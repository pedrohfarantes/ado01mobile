import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Tarefa = ({idUsuario,idTarefa,titulo,estado}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={estado}/>
      
      <Pressable onPress={mudaModal}>
        <Text style={styles.paragraph}>{titulo}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": "Fazendo"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": "Feita"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": "Não iniciada"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": "Cancelada"
  },
];


export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){

    return(
      <Tarefa idUsuario={item.userId} 
              idTarefa={item.id}
              titulo={item.title}
              estado={item.completed}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00FA9A',
    color: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ddd",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
