import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Githubbrandssolid1 from "../assets/github-brands-solid.svg";
import Instagrambrandssolid1 from "../assets/instagram-brands-solid.svg";

import "../global.css";

export default function FrameComponents() {
  return (
    <View style={styles.navbarParent}>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <View style={[styles.navbarChild, styles.navbarLayout]} />
        <View style={[styles.navLinks, styles.linksSpaceBlock]}>
          <Link href="/">
            <Text style={styles.zayyanAi}>ZAYYAN A.I</Text>
          </Link>
        </View>
        <View style={[styles.navigationMenu, styles.navbarFlexBox]}>
          <View style={[styles.aboutWrapper, styles.linksSpaceBlock]}>
            <Link href="/links/about">
              <Text style={[styles.about, styles.aboutTypo]}>About</Text>
            </Link>
          </View>
          <View style={[styles.pageLinks, styles.linksSpaceBlock]}>
            <View style={styles.pageLinkContainer}>
              <Link href="/links/project">
                <Text style={[styles.projects, styles.aboutTypo]}>
                  Projects
                </Text>
              </Link>
              <Link href="/links/achievement">
                <Text style={[styles.achievement, styles.aboutTypo]}>
                  Achievement
                </Text>
              </Link>
              <Link href="/links/contact">
                <Text style={[styles.contact, styles.aboutTypo]}>Contact</Text>
              </Link>
            </View>
          </View>
          <View style={styles.socialMedia}>
            <View style={styles.instagramBrandsSolid1Wrapper}>
              <Instagrambrandssolid1
                style={styles.instagramBrandsSolid1Icon}
                width={44}
                height={50}
              />
            </View>
            <View style={styles.githubBrandsSolid1Wrapper}>
              <Githubbrandssolid1
                style={styles.githubBrandsSolid1Icon}
                width={48}
                height={48}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbarFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  navbarLayout: {
    backgroundColor: "#1c1c1c",
    height: 85,
    width: 1913,
  },
  linksSpaceBlock: {
    paddingBottom: 7,
    justifyContent: "flex-end",
    height: 37,
  },
  aboutTypo: {
    fontFamily: "Inter-Regular",
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    color: "white",
    fontSize: 18,
    height: 30,
    zIndex: 1,
  },
  navbarParent: {
    height: 428,
    paddingBottom: 342,
    flexDirection: "row",
    width: "100%",
  },
  navbar: {
    paddingHorizontal: 194,
    paddingTop: 15,
    paddingBottom: 20,
    gap: 325,
    zIndex: 1,
    backgroundColor: "#1c1c1c",
    height: 85,
    width: "100%",
    // justifyContent: "space-between",
  },
  navbarChild: {
    display: "none",
  },
  navLinks: {
    width: 146,
    zIndex: 1,
  },
  zayyanAi: {
    width: 149,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "white",
    fontSize: 18,
    height: 30,
    zIndex: 1,
  },
  navigationMenu: {
    width: 895,
    gap: 66,
    zIndex: undefined,
    height: 50,
  },
  aboutWrapper: {
    width: 71,
    zIndex: 1,
  },
  about: {
    width: 74,
  },
  pageLinks: {
    width: 554,
    paddingRight: 77,
    zIndex: undefined,
  },
  pageLinkContainer: {
    width: 477,
    gap: 62,
    height: 30,
    zIndex: 1,
    flexDirection: "row",
  },
  projects: {
    width: 100,
  },
  achievement: {
    width: 158,
  },
  contact: {
    width: 97,
  },
  socialMedia: {
    width: 138,
    gap: 46,
    height: 50,
    zIndex: 1,
    flexDirection: "row",
  },
  instagramBrandsSolid1Icon: {
    width: 38,
    height: 38,
    zIndex: 1,
  },
  instagramBrandsSolid1Wrapper: {
    height: 38,
    width: 38,
    paddingTop: 0,
    marginTop: 8,
  },
  githubBrandsSolid1Wrapper: {
    height: 38,
    paddingTop: 0,
    marginTop: 8,
    width: 38,
  },
  githubBrandsSolid1Icon: {
    height: 38,
    width: 38,
    zIndex: 1,
  },
  image: {
    height: 721,
    width: 782,
    position: "absolute",
    bottom: -444,
    left: 555,
    zIndex: 1,
  },
});
