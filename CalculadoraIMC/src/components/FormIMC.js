import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./Result";
import { use, useState } from "react";

const FormIMC = () => {
    //Constante criada para preparar e fazer cálculo do IMC.
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [alturaMetros, setAlturaM] = useState('');

    const calcularIMC = () => {
        //Cálculo do IMC e altura em metros que serão usados em conjunto para o cálculo do peso ideal.
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros).toFixed(2);
            setImc(imcCalculado);
            setAlturaM(alturaMetros);
        }
    };

    return (
        //Retornado para o usuário a interface.
        <View style={styles.formContainer}>
            <TextInput
                //Local onde o usuário escreverá seu peso e essa informação será coletada.
                style={styles.input}
                placeholder="Peso (KG)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                //Igual ao anterior, o usuário irá inserir sua altura e o sistema coletará.
                style={styles.input}
                placeholder="Altura (CM)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
                    //Botão de confirmação do usuário, onde o cálculo será feito e depois exibido pelo Result.js.
            {imc && <Result imc={imc} alturaMetros={alturaMetros} />} //Transferência das variáveis para Result.js que serão usadas para exibir informações para o usuário.
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
//Export para confirmar a existência do FormIMC para o App.js.
export default FormIMC;
