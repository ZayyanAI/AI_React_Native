import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import "./app/global.css";

export default function VoiceAssistant() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="menu" size={30} color="#FFB54E" />
          </TouchableOpacity>
          <View style={styles.profile} />
          <Text style={styles.headerTitle}>AI - React Native</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.aiWave}>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 60 }]} />
              <View style={[styles.bar, { height: 60 }]} />
              <View style={[styles.bar, { height: 60 }]} />
              <View style={[styles.bar, { height: 60 }]} />
            </View>
          </View>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity>
            <Feather
              name="mic"
              size={25}
              color="#000"
              strokeWidth={10}
              style={styles.micIcon}
            />
          </TouchableOpacity>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Feather
                name="x"
                size={25}
                color="#000"
                strokeWidth={10}
                style={styles.xIcon}
              />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#FFB54E",
    position: "absolute",
    left: 40,
    top: 10,
  },
  headerTitle: {
    color: "#FFB54E",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aiWave: {
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: "#FFB54E",
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bar: {
    width: 24,
    backgroundColor: "black",
    borderRadius: 12,
  },
  rowButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: -100,
    marginBottom: 30,
  },
  micIcon: {
    // width: 50,
    // height: 50,
    borderRadius: 50,
    backgroundColor: "#FFB54E",
    marginRight: 115,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  xIcon: {
    // width: 50,
    // height: 50,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#FFB54E",
    marginLeft: 115,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
