import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.imageView}>
        <Image
          source={require("./assets/chatAppLogo.png")}
          style={styles.image1}
        />
      </View>

      <View style={styles.SignInView}>
        <Text style={styles.SignInText}>Mobile</Text>
        <TextInput style={styles.SignInTextInput} autoCorrect={false} />
      </View>
      <View style={styles.SignInView}>
        <Text style={styles.SignInText}>Password</Text>
        <TextInput
          style={styles.SignInTextInput}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View style={styles.SignInView}>
        <Pressable
          onPress={() => Alert.alert("SignIn Button pressed")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>SignIn</Text>
        </Pressable>
      </View>
      <View style={styles.SignInView}>
        <Button
          title="New to here?"
          fontSize="16"
          onPress={() => Alert.alert("Create New Account")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "flex-start",
    justifyContent: "center",
  },
  SignInView: {
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  imageView: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 60,
  },
  image1: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  SignInText: {
    fontSize: 18,
  },
  SignInTextInput: {
    fontSize: 18,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btn: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#03A9F4",
    paddingVertical: 15,
    marginVertical: 30,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
  },
});
