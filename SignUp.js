import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

const countries = ["Sri Lanka", "Australia", "USA", "Ireland"];

export function SignUp() {
  const [getImgURI, setImgURI] = useState(require("./assets/user.png"));
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView style={{ paddingHorizontal: 40, width: "100%" }}>
        <View style={styles.imageView}>
          <Image source={getImgURI} style={styles.profileImage} />
        </View>

        <View style={styles.SignInView}>
          <Button
            title="Select Profile Picture"
            onPress={async () => {
              const result = await ImagePicker.launchCameraAsync({
              // const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
              });
              if (!result.canceled) {
                setImgURI({
                  uri: result.assets[0].uri,
                });
              } else {
                Alert.alert("You did not select any image.");
              }
            }}
          />
        </View>

        <View style={styles.SignInView}>
          <Text style={styles.SignInText}>First Name</Text>
          <TextInput style={styles.SignInTextInput} autoCorrect={false} />
        </View>
        <View style={styles.SignInView}>
          <Text style={styles.SignInText}>Last Name</Text>
          <TextInput style={styles.SignInTextInput} autoCorrect={false} />
        </View>
        <View style={styles.SignInView}>
          <Text style={styles.SignInText}>Mobile</Text>
          <TextInput
            style={styles.SignInTextInput}
            autoCorrect={false}
            keyboardType="number-pad"
            placeholder="07* *** ****"
          />
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
          <Text style={styles.SignInText}>Country</Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultButtonText="Select Your Country"
            buttonStyle={{
              width: "100%",
              marginTop: 5,
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 1,
            }}
            dropdownOverlayColor="rgba(125, 222, 251, 0.05)"
            dropdownStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              borderWidth: 0,
            }}
            showsVerticalScrollIndicator={true}
            selectedRowStyle={{ backgroundColor: "rgba(125, 221, 250, 0.6)" }}
            search={true}
            searchInputStyle={{
              backgroundColor: "rgba(125, 221, 250, 0.6)",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
            }}
            searchInputTxtStyle={{ fontSize: 16 }}
            searchPlaceHolder="Search & Select Your Country"
            searchPlaceHolderColor="grey"
          />
        </View>

        <View style={styles.SignInView}>
          <Pressable
            onPress={() => Alert.alert("SignUp Button pressed")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>SignUp</Text>
          </Pressable>
        </View>
        <View style={styles.BackToSignIn}>
          <Button
            title="Already Have an Account?"
            fontSize="16"
            onPress={() => Alert.alert("Go to SignIn")}
            color={"red"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  SignInView: {
    width: "100%",
    paddingVertical: 10,
  },
  BackToSignIn: {
    width: "100%",
    paddingBottom: 50,
  },
  imageView: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 0,
    marginTop: 20,
    marginBottom: 0,
  },
  profileImage: {
    borderRadius:100,
    width: 120,
    height: 120,
    objectFit: "contain",
  },
  SignInText: {
    fontSize: 16,
  },
  SignInTextInput: {
    fontSize: 16,
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
