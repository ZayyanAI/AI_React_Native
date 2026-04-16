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

export default function Achievement() {
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
        <View style={styles.iconWrapper}>
          <Image
            source={require("../assets/medal.png")}
            style={styles.achievementIcon}
            resizeMode="contain"
          />
        </View>

        {/* TEKS DESKRIPSI */}
        <Text style={styles.descriptionTextHeader}>
          Certificate that i have got since I was at{"\n"}primary schools until
          recently.
        </Text>

        {/* JUDUL UTAMA */}
        <Text style={styles.mainTitleAchievement}>Achievement</Text>

        {/* GARIS BAWAH PANJANG */}
        <View style={styles.bottomLineAchievement} />

        <View style={styles.textView}>
          <Text style={styles.textModel}>Timedoor Academy</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/beginner.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Beginner - Kids</Text>
              <Text style={styles.year}>2021</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/intermediate.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Intermediate - Kids</Text>
              <Text style={styles.year}>2021</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/advanced.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Advanced - Kids</Text>
              <Text style={styles.year}>2022</Text>
            </View>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/appdev.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>App Developer - Kids</Text>
              <Text style={styles.year}>2023</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/webdev.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Web Developer - Kids</Text>
              <Text style={styles.year}>2024</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/python.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Python Coder - Kids</Text>
              <Text style={styles.year}>2024</Text>
            </View>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/pythongame.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Python Game Developer - Kids</Text>
              <Text style={styles.year}>2024</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/pythonai.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>Python AI-Developer - Kids</Text>
              <Text style={styles.year}>2025</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/beginner.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>JavaScript Programming - Teens</Text>
              <Text style={styles.year}>2025</Text>
            </View>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.textModel}>FIRST Tech Challenge (FTC)</Text>
        </View>

        <View style={[styles.imageContainer, { marginRight: 545 }]}>
          <View style={styles.card}>
            <Image
              source={require("../assets/centerstage.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>FTC - Centerstage</Text>
              <Text style={styles.year}>2023</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/intothe.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>FTC - Into The Deep</Text>
              <Text style={styles.year}>2024</Text>
            </View>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.textModel}>
            Kompetisi Matematika Nalaria Realistik (KMNR) - 14
          </Text>
        </View>

        <View style={[styles.imageContainer, { marginRight: 1080 }]}>
          <View style={styles.card}>
            <Image
              source={require("../assets/kmnr14.jpeg")}
              style={styles.topSection}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.title}>KMNR - 14</Text>
              <Text style={styles.year}>2019</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ flex: 1, backgroundColor: "#f9f9f7" }}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          {/* Konten Halaman Anda di sini */}
          <View style={{ height: 1000 }} />
          sc
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
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Membuat item turun ke bawah jika sudah penuh 3 kolom
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 50,
    gap: 250, // Jarak antar kotak
  },
  projectCard: {
    width: 200,
    marginBottom: 20,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: "100%",
    aspectRatio: 1, // Membuat kotak persegi sempurna
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  placeholderText: {
    fontSize: 10,
    color: "#999",
  },
  projectTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
    fontFamily: "Inter-Bold",
  },
  card: {
    width: 300,
    height: 280,
    backgroundColor: "#fff",
    borderRadius: 30, // Membuat sudut tumpul
    borderWidth: 2,
    borderColor: "#000",
    overflow: "hidden", // Penting: agar bagian dalam tidak keluar dari border radius
  },
  topSection: {
    flex: 2, // Mengambil 2 bagian dari ruang yang ada
    backgroundColor: "#ffffff",
  },
  bottomSection: {
    flex: 1, // Mengambil 1 bagian dari ruang yang ada
    backgroundColor: "#1a1a1a", // Warna hitam/gelap
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  year: {
    color: "#ffffff",
    fontSize: 16,
    fontStyle: "italic",
  },
  textView: {
    width: "100%", // Memastikan teks mengambil satu baris penuh
    paddingHorizontal: 250, // Memberi jarak dari pinggir layar
    marginTop: 40,
    marginBottom: 10, // Jarak antara teks dengan kartu di bawahnya
  },
  textModel: {
    fontSize: 22,
    fontFamily: "Inter-SemiBoldItalic",
    color: "#1c1c1c",
    textAlign: "left", // Memastikan teks rata kiri di atas gambar
  },
  iconWrapper: {
    marginBottom: 20, // Jarak antara ikon dan teks di bawahnya
    justifyContent: "center",
    alignItems: "center",
  },
  achievementIcon: {
    width: 120, // Ukuran ikon tetap
    height: 120,
    opacity: 0.3, // Membuat ikon terlihat abu-abu pudar seperti di gambar
  },
  descriptionTextHeader: {
    fontSize: 18,
    color: "#333",
    textAlign: "center", // Teks rata tengah
    lineHeight: 24, // Jarak antar baris teks
    marginBottom: 10,
    fontFamily: "Inter-Light",
  },
  mainTitleAchievement: {
    fontSize: 48, // Ukuran teks "Achievement" yang besar
    fontWeight: "bold",
    color: "#1c1c1c",
    letterSpacing: 1, // Memberi jarak sedikit antar huruf
    marginBottom: 10, // Jarak ke garis bawah
    fontFamily: "Exo350B",
    textTransform: "capitalize",
    textAlign: "center",
  },
  bottomLineAchievement: {
    width: 1100, // Panjang garis tetap (pixel)
    height: 1.5, // Ketebalan garis
    backgroundColor: "#ccc", // Warna abu-abu pudar
    alignSelf: "center",
  },
});
