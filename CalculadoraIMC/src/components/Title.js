import { Text, StyleSheet } from "react-native";
//Titulo que será exibido para o projeto
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;
