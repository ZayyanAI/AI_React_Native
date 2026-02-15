import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
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
          <Text style={styles.aiTitle}>YOUR PERSONAL AI-ASSISTANT</Text>
          <Link href="/AI/voice-assistant" asChild>
            <TouchableOpacity style={styles.aiWave}>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { height: 60 }]} />
                <View style={[styles.bar, { height: 120 }]} />
                <View style={[styles.bar, { height: 80 }]} />
                <View style={[styles.bar, { height: 50 }]} />
              </View>
            </TouchableOpacity>
          </Link>
        </View>
        <Link href="/AI/chat-bot" asChild>
          <TouchableOpacity style={styles.askButton}>
            <Feather
              name="search"
              size={20}
              color="#000"
              strokeWidth={5}
              style={styles.askButtonIcon}
            />
            <Text style={styles.askButtonText}>Ask AI - React Native</Text>
          </TouchableOpacity>
        </Link>
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
  aiTitle: {
    color: "#FFB54E",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: -80,
    marginBottom: 20,
    letterSpacing: 1,
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
  askButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFB54E",
    paddingVertical: 15,
    borderRadius: 15,
    // marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
    width: 350,
  },
  askButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  askButtonIcon: {
    marginLeft: -100,
    marginRight: 10,
  },
});

// export default function Index() {
//   return (
//     <SafeAreaView>
//       <FlatList
//         data={[]}
//         renderItem={({item, index}) => {
//           return(
//             <View>

//             </View>
//           )
//         }}
//       />
//     </SafeAreaView>
//   );
// }
