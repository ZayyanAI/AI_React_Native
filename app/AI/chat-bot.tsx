import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatBot() {
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Feather name="menu" size={30} color="#FFB54E"/>
                    </TouchableOpacity>
                    <View style={styles.profile}/>
                    <Text style={styles.headerTitle}>AI - React Native</Text>
                </View>
                <View style={styles.chatPanel}>
                    <Text style={styles.labelChat}>Ask AI - React Native</Text>
                    <View style={styles.chatIcon}>
                        <Feather name="plus" size={28} color="#000"/>
                        <View style={styles.chatIcon2}>
                            <Feather name="mic" size={26} color="#000" style={styles.iconSpacing}/>
                            <MaterialCommunityIcons name="waveform" size={26} color="#000" />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FFB54E', 
        position: 'absolute',
        left: 40, 
        top: 10,
    },
    headerTitle: {
        color: '#FFB54E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    chatPanel: {
        backgroundColor: "#FFB54E",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingVertical: 25,
        paddingHorizontal: 25,
        paddingBottom: Platform.OS === 'ios' ? 50 : 75,
        width: '110%',
        alignSelf: 'stretch',
        marginLeft: -20,
        marginBottom: -70,
    },
    labelChat: {
        color: "#000",
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chatIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatIcon2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginRight: 20,
    },
})