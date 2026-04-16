import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useRef } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Githubbrandssolid1 from "../assets/github-brands-solid.svg";
import Instagrambrandssolid1 from "../assets/instagram-brands-solid.svg";
import "../global.css";

export default function Art() {
  const scrollRef = useRef<ScrollView>(null);
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.contentArea}>
      <View style={styles.header}>
        <Link href="/">
          <Text style={styles.logoText}>ZAYYAN A.I</Text>
        </Link>
        <View style={styles.navLinks}>
          <Link href="/links/about">
            <Text style={styles.navItem}>About</Text>
          </Link>
          <Link href="/links/project">
            <Text style={styles.navItem}>Projects</Text>
          </Link>
          <Link href="/links/achievement">
            <Text style={styles.navItem}>Achievement</Text>
          </Link>
          <Link href="/links/contact">
            <Text style={styles.navItem}>Contact</Text>
          </Link>
        </View>
        <View style={styles.socialIcons}>
          <View style={styles.instagramBrandsSolid1Wrapper}>
            <Instagrambrandssolid1
              style={styles.instagramBrandsSolid1Icon}
              width={44}
              height={50}
            />
          </View>
          <View style={styles.githubBrandsSolid1Wrapper}>
            <Link href="https://github.com/ZayyanAI">
              <Githubbrandssolid1
                style={styles.githubBrandsSolid1Icon}
                width={48}
                height={48}
              />
            </Link>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.largeCard}>
          <Image
            source={require("../assets/ld1.png")}
            style={styles.imagePlaceholder}
          />
          <View style={styles.blackBar}>
            <Text style={styles.yearText}>2025</Text>
            <Text style={styles.bannerTitle}>Last Drift Before Death</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Image
              source={require("../assets/ld2.png")}
              style={styles.imagePlaceholder}
            />
          </View>

          <View style={styles.squareCard}>
            <Image
              source={require("../assets/LastDriftBeforeDeath-Logo-removebg-preview.png")}
              resizeMode="contain"
              style={styles.imageLogo}
            />
          </View>

          <View style={styles.smallCard}>
            <Image
              source={require("../assets/ld3.png")}
              style={styles.imagePlaceholder}
            />
            <View style={styles.smallBlackBar}>
              <Text style={styles.idText}>Game Design</Text>
              <Text style={styles.teamText}>NTAH Studio</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ flex: 1, backgroundColor: "#f9f9f7" }}>
        <ScrollView ref={scrollRef}>
          {/* Konten Halaman Anda di sini */}
          <View style={{ height: 1000 }} />
        </ScrollView>

        {/* --- FOOTER START --- */}
        <View style={styles.footerContainer}>
          {/* Garis Horizontal Atas */}
          <View style={styles.topBorderLine} />

          {/* Tombol Segitiga Panah */}
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={scrollToTop}
            activeOpacity={0.7}
          >
            {/* Layer Segitiga Luar (Abu-abu) */}
            <View style={styles.triangleOuter}>
              {/* Layer Segitiga Dalam (Putih/Warna Bg) */}
              <View style={styles.triangleInner} />
            </View>
          </TouchableOpacity>

          {/* Baris Teks Footer */}
          <View style={styles.footerContent}>
            <Link href="/">
              <Text style={styles.copyrightText}>©2026 Zayyan A.I</Text>
            </Link>

            <View style={styles.footerLinks}>
              <Link href="/links/about">
                <Text style={styles.linkText}>About</Text>
              </Link>
              <Link href="/links/project">
                <Text style={styles.linkText}>Projects</Text>
              </Link>
              <Link href="/links/achievement">
                <Text style={styles.linkText}>Achievement</Text>
              </Link>
              <Link href="/links/contact">
                <Text style={styles.linkText}>Contact</Text>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentArea: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Warna background gelap di luar area utama
  },
  header: {
    height: 85,
    backgroundColor: "#1c1c1c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoText: {
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
    marginLeft: 175,
    marginRight: -220,
  },
  navLinks: {
    flexDirection: "row",
    gap: 90,
  },
  navItem: {
    fontFamily: "Inter-Regular",
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    color: "white",
    fontSize: 18,
    height: 30,
    zIndex: 1,
  },
  socialIcons: {
    flexDirection: "row",
    width: 138,
    gap: 46,
    height: 50,
    zIndex: 1,
    marginRight: 350,
    marginLeft: -350,
    marginBottom: 8,
  },
  scrollContent: {
    backgroundColor: "#f9f9f7", // Warna krem pucat seperti di gambar
    minHeight: "100%",
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "600",
    letterSpacing: 2,
    color: "#333",
    fontFamily: "Exo350B",
    opacity: 0.95,
  },
  underline: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 20,
  },
  contentPlaceholder: {
    padding: 20,
    alignItems: "center",
  },
  projectCard: {
    width: "90%",
    height: 200,
    backgroundColor: "white",
    marginVertical: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  //   footer: {
  //     backgroundColor: "#ebebeb",
  //   },
  //   arrowUpContainer: {
  //     alignItems: "center",
  //     marginTop: -20, // Menarik dekorasi ke atas
  //   },
  //   arrowLine: {
  //     width: 40,
  //     height: 40,
  //     backgroundColor: "#ebebeb",
  //     transform: [{ rotate: "45deg" }],
  //     borderTopWidth: 1,
  //     borderLeftWidth: 1,
  //     borderColor: "#ccc",
  //   },
  //   footerBottom: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     padding: 20,
  //     alignItems: "center",
  //   },
  //   footerCopyright: {
  //     fontSize: 18,
  //     color: "#888",
  //     marginLeft: 450,
  //     marginBottom: 15,
  //     fontFamily: "Inter-Light",
  //   },
  //   footerLinks: {
  //     flexDirection: "row",
  //     gap: 50,
  //     marginRight: 300,
  //     marginBottom: 15,
  //   },
  //   footerLinkItem: {
  //     fontSize: 18,
  //     color: "#888",
  //     fontFamily: "Inter-Light",
  //   },
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
  footerContainer: {
    backgroundColor: "#ebebeb", // Warna abu-abu terang footer
    width: "100%",
    paddingBottom: 20,
  },
  topBorderLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#d1d1d1", // Garis pembatas tipis
  },
  arrowContainer: {
    alignSelf: "center",
    marginTop: -21, // Mengangkat segitiga tepat ke tengah garis
    alignItems: "center",
    justifyContent: "center",
  },
  triangleOuter: {
    width: 40,
    height: 40,
    backgroundColor: "#ebebeb",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#d1d1d1",
    transform: [{ rotate: "45deg" }], // Membuat kotak menjadi belah ketupat (segitiga di atas)
  },
  triangleInner: {
    width: 30,
    height: 30,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ffffff", // Garis putih di bagian dalam seperti gambar
    position: "absolute",
    top: 5,
    left: 5,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 15,
  },
  copyrightText: {
    fontSize: 18,
    color: "#8a8a8a",
    paddingBottom: 15,
    marginLeft: 400,
    marginBottom: 20,
  },
  footerLinks: {
    flexDirection: "row",
    gap: 50,
    marginRight: 200,
    paddingBottom: 15,
  },
  linkText: {
    fontSize: 18,
    color: "#8a8a8a",
  },
  largeCard: {
    width: "98.5%",
    height: 750,
    borderWidth: 1.5,
    borderColor: "#000",
    marginBottom: 20,
    marginHorizontal: 15,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: "#d6d6d6",
  },
  blackBar: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    alignItems: "flex-start", // Teks rata kanan seperti di gambar
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
  yearText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-Italic",
  },
  // Style untuk Baris Bawah
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  smallCard: {
    flex: 1,
    height: 275,
    borderWidth: 1.5,
    borderColor: "#000",
    marginHorizontal: 15,
  },
  squareCard: {
    width: 275, // Ukuran spesifik untuk tengah agar terlihat kotak
    height: 275,
    borderWidth: 1.5,
    borderColor: "#000",
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  smallBlackBar: {
    backgroundColor: "#1a1a1a",
    padding: 5,
  },
  idText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-Italic",
  },
  teamText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
  imageLogo: {
    width: "95%",
    height: "80%",
  },
});
