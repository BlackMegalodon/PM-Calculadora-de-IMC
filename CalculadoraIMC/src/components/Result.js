import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ imc, alturaMetros }) => {
    let classification = ''; //Lógica para filtrar os resultados do IMC inserindo uma variavel de classificação
    let pesoideal = '';
    let pesoidealmax = '';

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classification = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classification = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classification = "Obesidade grau 2";
    } else {
        classification = "Obesidade grau 3 (obesidade mórbida)";
    }


    if (imc < 18.5) {
        pesoideal = "Aumente um pouco seu peso para 18,5 ou mais mas não passe de 24,9";
    } else if (imc >= 18.5 && imc < 24.9) {
        pesoideal = 18.5 * (alturaMetros * alturaMetros);
        pesoidealmax = 24.9 * (alturaMetros * alturaMetros);
    } else {
        pesoideal = "voce pode estar em risco abaixe um pouco seu peso"
    }

    return (
        //Textos que serão exibidos para o usuario explicando o resultado
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
            <Text style={styles.resultText}>Sua Classificação é emitida de acordo com essa lista:
                Abaixo de 18,5 "Abaixo do Peso"
                Entre 18,5 e 25 "Peso normal"
                Entre 25 e 30 "Sobrepeso"
                Entre 30 e 35 "Obesidade Grau 1"
                Entre 35 e 40 "Obesidade Grau 2"</Text>
            <Text style={styles.resultText}>Classificação: {classification}</Text>
            <Text style={styles.resultText}>Seu IMC ideal foi classificado como: {pesoideal} a {pesoidealmax}</Text>
        </View>
    );
};
//Estilização do texto
const styles = StyleSheet.create({
    resultContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;