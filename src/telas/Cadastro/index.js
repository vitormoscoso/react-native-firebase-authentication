import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Botao from "../../componentes/Botao";
import { EntradaTexto } from "../../componentes/EntradaTexto";
import estilos from "./estilos";
import { cadastrar } from "../../servicos/requisicoesFirebase";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  async function realizarCadastro() {
    await cadastrar(email, senha, confirmaSenha);
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
  }

  // useEffect(() => {
  //   createUserWithEmailAndPassword(auth, "teste@email.com", "123456")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(userCredential);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }, []);

  return (
    <View style={estilos.container}>
      <EntradaTexto
        label="E-mail"
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={(texto) => setConfirmaSenha(texto)}
        secureTextEntry
      />

      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}
