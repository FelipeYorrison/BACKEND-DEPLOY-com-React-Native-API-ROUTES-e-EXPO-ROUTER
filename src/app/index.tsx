import { useState } from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native"

import { api } from "@/server/api"
import { isAxiosError } from "axios"


export default function Home() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignin() {

     try {
        const response = await api.post("/user", {
            email,
            password
            })

         Alert.alert("Login com " + response.data.name)   
        } catch (error) {
         if(isAxiosError(error)){
            return Alert.alert(error.response?.data)
         }
        }
    }
    return (
        <View style={styles.container}>
            <Image
             source={require("./img/R.png")}
            style={{width: 210, height: 70}}
             />
            <TextInput style={styles.input} placeholder="E-mail" 
            onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password"
                secureTextEntry onChangeText={setPassword} />

            <TouchableOpacity style={styles.button} onPress={handleSignin}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        gap: 16,
        backgroundColor: "#161616"
    },
    input: {
        height: 54,
        width: "100%",
        backgroundColor: "#E3E3E3E3",
        borderRadius: 5,
        padding: 16,
    },
    button: {
        height: 54,
        width: "100%",
        backgroundColor: "#CECECE",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    }
})