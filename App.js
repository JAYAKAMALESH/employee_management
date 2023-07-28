import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
// import login from "/assets/login";

const { width, height } = Dimensions.get("screen");
export default function App() {
  return (
    // Body
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      {/* logo or Image */}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "30%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("./assets/login.png")}
          style={{ height: "100%", width: "80%" }}
        ></Image>
      </View>
      {/* inputs div */}
      <View
        style={{
          width: "100%",
          height: "65%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
          backgroundColor: "cadetblue",
        }}
      >
        {/* Employeeid input */}
        <TextInput
          style={{
            borderColor: "grey",
            borderWidth: 1,
            width: "80%",
            height: "9%",
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: -60,
          }}
          placeholder="Employee ID"
        ></TextInput>
        {/* passwords  */}
        <View
          style={{
            width: "70%",
            height: "8%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <TextInput
            style={{
              borderColor: "grey",
              borderWidth: 1,
              width: "15%",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
            }}
            placeholder=""
          ></TextInput>

          <TextInput
            style={{
              borderColor: "grey",
              borderWidth: 1,
              width: "15%",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
            }}
            placeholder=""
          ></TextInput>

          <TextInput
            style={{
              borderColor: "grey",
              borderWidth: 1,
              width: "15%",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
            }}
            placeholder=""
          ></TextInput>

          <TextInput
            style={{
              borderColor: "grey",
              borderWidth: 1,
              width: "15%",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
            }}
            placeholder=""
          ></TextInput>
        </View>
        <Text style={{ color: "white", textDecorationLine: "underline" }}>
          Forget Password?
        </Text>

        {/* submit button */}

        <TouchableOpacity
          style={{
            borderColor: "white",
            borderWidth: 1,
            width: "50%",
            height: "8%",
            borderRadius: 10,
            backgroundColor: "cadetblue",
            padding: 10,
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "transparent",
            borderWidth: 1,
            width: "50%",
            height: "8%",
            borderRadius: 10,
            backgroundColor: "white",
            padding: 10,
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <Text style={{ color: "cadetblue" }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    // flexWrap:"wrap",
    alignItems: "center",
    // padding:10
  },
});
