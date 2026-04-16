import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";

export default function ContentArea() {
  return (
    <View style={styles.contentArea}>
      <View style={styles.developerProfileParent}>
        <Image
          style={styles.image}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.developerProfile, styles.roleDesignationLayout]}>
          <View style={[styles.roleDesignation, styles.roleDesignationLayout]}>
            <Text style={[styles.designer, styles.designerTypo]}>designer</Text>
            <Text style={[styles.aiDeveloper, styles.designerTypo]}>
              AI-developer
            </Text>
          </View>
        </View>
        <View style={[styles.divider, styles.dividerFlexBox]}>
          <View style={styles.garisPembatas} />
        </View>
        {/* <View style={styles.portfolioDisplayParent}>
          <View style={[styles.portfolioDisplay, styles.dividerFlexBox]}>
            <View style={styles.portfolioElements}>
              <View style={styles.image3Shape} />
            </View>
            <View style={styles.portfolioElements2}>
              <View style={styles.image3Shape} />
            </View>
            <View style={styles.image3Shape} />
          </View>
          <View style={styles.contentDescription}>
            <View style={[styles.descriptionContent, styles.dividerFlexBox]}>
              <Text style={styles.fillText}>Fill text</Text>
              <Text style={styles.fillText}>Fill text</Text>
              <Text style={styles.fillText}>Fill text</Text>
            </View>
          </View> */}
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  roleDesignationLayout: {
    height: 88,
    flexDirection: "row",
  },
  designerTypo: {
    zIndex: 2,
    color: "rgba(0, 0, 0, 0.75)",
    fontFamily: "Exo350B",
    fontWeight: "700",
    fontSize: 45,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    height: 88,
  },
  dividerFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  contentArea: {
    width: 1762,
    paddingRight: 150,
    justifyContent: "flex-end",
    flexDirection: "row",
    height: 534,
  },
  developerProfileParent: {
    alignItems: "flex-end",
    gap: 66,
    zIndex: undefined,
    width: 1612,
    height: 534,
  },
  developerProfile: {
    width: 1256,
    paddingRight: 256,
    zIndex: undefined,
    justifyContent: "flex-end",
  },
  roleDesignation: {
    width: 1000,
    zIndex: 2,
    gap: 100,
  },
  designer: {
    width: 481,
  },
  aiDeveloper: {
    width: 422,
  },
  divider: {
    width: 1510,
    height: 2,
    paddingRight: 103,
    justifyContent: "flex-end",
  },
  garisPembatas: {
    height: 1,
    width: 1408,
    borderStyle: "solid",
    borderColor: "black",
    borderTopWidth: 1,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    zIndex: 1,
  },
  portfolioDisplayParent: {
    height: 311,
    gap: 21,
    zIndex: undefined,
    width: 1612,
  },
  portfolioDisplay: {
    gap: 200,
    height: 263,
    width: 1612,
  },
  portfolioElements: {
    paddingTop: 14,
    width: 404,
    height: 263,
  },
  image3Shape: {
    height: 249,
    backgroundColor: "#d9d9d9",
    width: 404,
    zIndex: 1,
  },
  portfolioElements2: {
    height: 256,
    paddingTop: 7,
    width: 404,
  },
  contentDescription: {
    width: 1447,
    paddingLeft: 165,
    height: 27,
    zIndex: undefined,
    flexDirection: "row",
  },
  descriptionContent: {
    width: 1282,
    gap: 527,
    height: 27,
  },
  fillText: {
    width: 77,
    fontSize: 22,
    fontWeight: "300",
    fontFamily: "Inter-Light",
    color: "black",
    height: 27,
    zIndex: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  image: {
    height: 721,
    width: 782,
    position: "absolute",
    bottom: 450,
    left: 400,
    zIndex: 0,
  },
});
