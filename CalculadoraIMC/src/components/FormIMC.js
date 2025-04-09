import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Result";
import { use, useState } from "react";

const FormIMC = () => {
    //constante criada para preparar e fazer calculo do IMC
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [alturaMetros, setAlturaM] = useState('');

    const calcularIMC = () => {
        //Calculo do IMC e Altura em Metros que serão usados em conjunto para o calculo do peso ideial
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros).toFixed(2);
            setImc(imcCalculado);
            setAlturaM(alturaMetros);
        }
    };

    return (
        //retornado para o usuário a interface
        <View style={styles.formContainer}>
            <TextInput
                //local onde o usuário escrevera seu peso e essa informação será coletada
                style={styles.input}
                placeholder="Peso (KG)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                //igual ao anterior o usuário irá inserir sua altura e o sistema coletara
                style={styles.input}
                placeholder="Altura (CM)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
                    //botão de confirmação do usuário onde o calculo será feito e depois exibido pelo Result.js
            {imc && <Result imc={imc} alturaMetros={alturaMetros} />} //transferencia das variaveis para Result.js que serão usadas para exibir informações para o usuário
        </View>
    );
};
//Estilização
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});
//export para confirmar a existencia do FormIMC para o App.js
export default FormIMC;
