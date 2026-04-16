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

export default function About() {
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
        <View style={styles.profileRow}>
          {/* Sisi Kiri: Foto/Sketsa */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/logo-transparent.png")}
              style={styles.profileImage}
              resizeMode="contain"
            />
          </View>

          {/* Sisi Kanan: Deskripsi */}
          <View style={styles.infoContainer}>
            <Text style={styles.descriptionText}>
              Since 2018, I have followed a coding courses that led me to{" "}
              <br></br>
              learned about the programmings world, since then thats <br></br>{" "}
              the time I have been enjoyed the most until now. Whats im{" "}
              <br></br>gonna took focus for my futures is by Artificial
              Intelligence <br></br> (AI) side.
            </Text>

            <View style={styles.nameSection}>
              <Text style={styles.nameText}>Zayyan A.I</Text>
              <Text style={styles.locationText}>From Karawang, Indonesia</Text>
            </View>

            <Text style={styles.aboutLabel}>About</Text>
          </View>
        </View>

        {/* Garis Horizontal Bawah */}
        <View style={styles.bottomLine} />

        <View style={styles.educationSection}>
          {/* Header Section */}
          <View style={styles.headerRow}>
            <Text style={styles.educationPlanningTitle}>
              Education Planning
            </Text>
          </View>

          {/* Konten Utama: 2 Kolom */}
          <View style={styles.educationGrid}>
            {/* Kolom Kiri: SMA */}
            <View style={styles.leftColumn}>
              <Text style={styles.yearText}>2026 - 2029</Text>
              <Text style={styles.schoolName}>SMAI Al-Azhar 9 Yogyakarta</Text>
            </View>

            {/* Kolom Kanan: Universitas */}
            <View style={styles.rightColumn}>
              {/* ITS */}
              <View style={styles.eduEntry}>
                <Text style={styles.yearText}>2029-2033</Text>
                <Text style={styles.schoolName}>
                  Institut Teknik Sepuluh Nopember
                </Text>
                <Text style={styles.majorText}>
                  Fakultas Teknologi Elektro dan Informatika Cerdas, Rekayasa
                  Kecerdasan Artifisial
                </Text>
              </View>

              {/* RWTH Aachen */}
              <View style={styles.eduEntry}>
                <Text style={styles.yearText}>2033- 2035</Text>
                <Text style={styles.schoolName}>RWTH Aachen University</Text>
                <Text style={styles.majorText}>
                  Faculty of Electrical Engineering and Information Technology,
                  Computer Engineering
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ flex: 1, backgroundColor: "#f9f9f7" }}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
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
  },
  // titleContainer: {
  //   alignItems: "center",
  //   marginTop: 80,
  // },
  // mainTitle: {
  //   fontSize: 32,
  //   fontWeight: "600",
  //   letterSpacing: 2,
  //   color: "#333",
  //   fontFamily: "Exo350B",
  //   opacity: 0.95,
  // },
  // underline: {
  //   width: "80%",
  //   height: 1,
  //   backgroundColor: "#ccc",
  //   marginTop: 20,
  // },
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
  profileRow: {
    flexDirection: "row", // Membagi kiri (gambar) dan kanan (teks)
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginTop: 50,
  },
  imageContainer: {
    flex: 1, // Mengambil porsi lebih kecil untuk gambar
    alignItems: "center",
  },
  profileImage: {
    width: 500,
    height: 300,
    marginLeft: 345,
  },
  infoContainer: {
    flex: 2, // Mengambil porsi lebih besar untuk teks
    paddingLeft: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 20,
    fontFamily: "Inter-Light",
    marginTop: 50,
  },
  nameSection: {
    marginTop: 50,
  },
  nameText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#000",
  },
  locationText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#000",
  },
  aboutLabel: {
    fontSize: 48, // Ukuran besar untuk tulisan "About"
    fontWeight: "bold",
    color: "#444",
    letterSpacing: -2,
    marginLeft: -5,
    fontFamily: "Exo350B",
  },
  bottomLine: {
    height: 1,
    width: "50%",
    backgroundColor: "#000",
    marginHorizontal: 375,
    marginTop: 0, // Pas di bawah tulisan About
    opacity: 0.2,
  },
  educationSection: {
    paddingTop: 50,
    paddingBottom: 80,
    alignItems: "center", // Memastikan seluruh section berada di tengah
  },
  headerRow: {
    width: 1000, // Lebar area header disamakan dengan konten
    alignItems: "flex-end", // "Education Planning's" berada di pojok kanan atas
    marginBottom: 40,
  },
  educationPlanningTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#000",
    fontFamily: "Inter-SemiBoldItalic",
  },
  educationGrid: {
    flexDirection: "row", // Membagi menjadi dua kolom (kiri & kanan)
    width: 1000,
    justifyContent: "space-between",
  },
  leftColumn: {
    width: 350, // Lebar kolom kiri tetap
  },
  rightColumn: {
    width: 550, // Lebar kolom kanan lebih besar untuk teks universitas yang panjang
  },
  eduEntry: {
    marginBottom: 40, // Jarak antar riwayat pendidikan di kolom kanan
  },
  yearText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
    fontFamily: "Inter-Light",
  },
  schoolName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    fontFamily: "Inter-SemiBold",
  },
  majorText: {
    fontSize: 16,
    color: "#444",
    lineHeight: 26, // Jarak antar baris agar penjelasan fakultas mudah dibaca
    fontFamily: "Inter-Light",
  },
});
