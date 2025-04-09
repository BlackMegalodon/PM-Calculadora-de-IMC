import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import FormIMC from "./src/components/FormIMC";
//importação das informações dos arquivos de componente

export default function App() {
  return (
    <View style={styles.container}>
    //execução do Title e do FormIMC, o Result.js é iniciado a partir do momento que o IMC é calculado para exibir o resultado por tanto não precisa estar aqui
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
});
