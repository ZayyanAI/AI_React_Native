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

// const CourseCard = ({
//   title,
//   semester,
// }: {
//   title: string;
//   semester: string;
// }) => (
//   <View style={styles.card}>
//     {/* Area Atas (Placeholder Gambar/Warna Abu-abu) */}
//     <View style={styles.imagePlaceholder}>
//       <View style={styles.leftGray} />
//       <View style={styles.rightGray} />
//     </View>

//     {/* Area Bawah (Teks Hitam) */}
//     <View style={styles.textContainer}>
//       <View style={styles.textWrapper}>
//         <Text style={styles.titleText}>{title}</Text>
//         <Text style={styles.semesterText}>{semester}</Text>
//       </View>
//     </View>
//   </View>
// );

export default function Science() {
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
        <View style={styles.row}>
          <View style={styles.card}>
            {/* Area Atas (Placeholder Gambar/Warna Abu-abu) */}
            <View style={styles.imagePlaceholder}>
              <Image
                source={require("../assets/poster.png")}
                style={styles.leftGray}
              />
              <Image
                source={require("../assets/report.png")}
                style={styles.rightGray}
              />
            </View>

            {/* Area Bawah (Teks Hitam) */}
            <View style={styles.textContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>Planning Skills Part 1</Text>
                <Text style={styles.semesterText}>Semester 1</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            {/* Area Atas (Placeholder Gambar/Warna Abu-abu) */}
            <View style={styles.imagePlaceholder}>
              <Image
                source={require("../assets/shortfilm-clip.png")}
                style={styles.leftGray}
              />
              <Image
                source={require("../assets/skript.png")}
                style={styles.rightGray}
              />
            </View>

            {/* Area Bawah (Teks Hitam) */}
            <View style={styles.textContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.titleText}>
                  Independence Day - Short Film
                </Text>
                <Text style={styles.semesterText}>Semester 1</Text>
              </View>
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
    paddingBottom: 100,
    flex: 1,
    justifyContent: "center",
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
  row: {
    flexDirection: "row", // Membuat kartu berjajar ke samping
    gap: 50, // Jarak antar kartu
    paddingHorizontal: 20,
  },
  card: {
    flex: 1, // Agar kedua kartu memiliki lebar yang sama (50/50)
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    overflow: "hidden",
    height: 500, // Sesuaikan tinggi kartu
  },
  imagePlaceholder: {
    flex: 3, // Mengambil 75% tinggi kartu
    flexDirection: "row",
  },
  leftGray: {
    flex: 1,
    backgroundColor: "#ededed", // Abu-abu terang
  },
  rightGray: {
    flex: 1,
    backgroundColor: "#dbdbdb", // Abu-abu sedikit gelap (seperti di gambar)
  },
  textContainer: {
    flex: 0.5, // Mengambil 25% tinggi kartu
    backgroundColor: "#1c1c1c",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textWrapper: {
    alignItems: "flex-start",
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
  },
  semesterText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-Italic",
    marginTop: 2,
    textAlign: "left",
  },
});
