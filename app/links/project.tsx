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

export default function Project() {
  const scrollRef = useRef<ScrollView>(null);
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
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
        <View style={styles.mainContainer}>
          {/* AREA KIRI: Judul dan Deskripsi */}
          <View style={styles.leftSection}>
            <Text style={styles.projectsTitle}>Projects</Text>
            <Text style={styles.descriptionText}>
              Several projects finished since level 9 <br></br> started till
              now.
            </Text>
          </View>

          {/* AREA TENGAH: Garis Vertikal */}
          <View style={styles.verticalLine} />

          {/* AREA KANAN: Gambar */}
          <View style={styles.rightSection}>
            <Image
              source={require("../assets/box-removebg-preview.png")}
              style={styles.boxImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* GARIS BAWAH (Underline) */}
        <View style={styles.bottomUnderline} />
        <View style={styles.imageContainer}>
          <Link href="/projects/science">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Science Project</Text>
              </View>
            </View>
          </Link>
          <Link href="/projects/engineering">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Engineering Project</Text>
              </View>
            </View>
          </Link>
          <Link href="/projects/literacy">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Literacy Project</Text>
              </View>
            </View>
          </Link>
        </View>

        <View style={styles.imageContainer}>
          <Link href="/projects/social">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Social Project</Text>
              </View>
            </View>
          </Link>
          <Link href="/projects/art">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Art Project</Text>
              </View>
            </View>
          </Link>
          <Link href="/projects/personal_project">
            <View style={styles.cardContainer}>
              <View style={styles.whiteSection} />
              <View style={styles.blackSection}>
                <Text style={styles.titleText}>Personal Project</Text>
              </View>
            </View>
          </Link>
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
            activeOpacity={0.6}
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
  iconImage: {},
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
    marginBottom: 10,
  },
  contentPlaceholder: {
    padding: 20,
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
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Membuat item turun ke bawah jika sudah penuh 3 kolom
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginTop: 30,
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
  cardContainer: {
    width: 320, // Tentukan lebar kartu statis agar konsisten
    height: 300, // Tentukan tinggi kartu statis
    backgroundColor: "white", // Pastikan area atas putih
    borderRadius: 25, // Membuat sudut tumpul pada kartu utama
    borderWidth: 2, // Memberikan garis pinggir hitam
    borderColor: "black", // Warna garis pinggir
    overflow: "hidden", // SANGAT PENTING: Agar bagian hitam tidak keluar dari radius sudut kartu putih
  },
  whiteSection: {
    flex: 4, // Mengambil 80% tinggi kartu
    backgroundColor: "white", // Tetap putih
    // Hapus borderRadius di sini, karena sudah diatur di cardContainer
  },
  blackSection: {
    flex: 1, // Mengambil sisa 20% tinggi kartu di bagian bawah
    backgroundColor: "#1c1c1c", // Warna hitam/gelap
    justifyContent: "center", // Teks rata tengah secara vertikal
    alignItems: "center", // Teks rata tengah secara horizontal
    paddingHorizontal: 15,
    // Kita tidak perlu memberikan border radius bawah di sini karena property overflow: 'hidden' di container induknya sudah memotongnya secara otomatis.
  },
  titleText: {
    color: "white", // Teks berwarna putih agar terlihat
    fontSize: 18, // Ukuran teks
    fontWeight: "600", // Ketebalan teks (Semi-Bold)
    textAlign: "center",
    fontFamily: "Inter-SemiBold", // Sesuaikan dengan font jika ada
  },
  mainContainer: {
    width: 1000, // Menggunakan pixel tetap agar tidak berubah-ubah
    height: 300, // Tinggi tetap
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    marginLeft: 500,
  },

  leftSection: {
    paddingTop: 135,
    width: 400, // Lebar area teks tetap
    justifyContent: "center",
    alignItems: "flex-end", // Teks dibuat rata kanan mendekati garis tengah
    paddingRight: 75,
  },
  projectsTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Exo350B",
  },
  descriptionText: {
    fontSize: 18,
    color: "#666",
    textAlign: "right", // Deskripsi rata kanan sesuai gambar
    marginTop: 5,
    fontFamily: "Inter-Light",
  },

  verticalLine: {
    width: 1.5, // Garis sangat tipis
    height: 220, // Tinggi garis tetap
    backgroundColor: "#ccc", // Warna abu-abu pudar
  },

  rightSection: {
    width: 400, // Lebar area gambar tetap
    justifyContent: "center",
    alignItems: "flex-start", // Gambar diletakkan di awal setelah garis
    paddingLeft: 40,
  },
  boxImage: {
    width: 250, // Ukuran gambar tetap
    height: 250,
    opacity: 0.2, // Membuat gambar terlihat pudar/abu-abu
  },

  bottomUnderline: {
    width: 950, // Panjang garis bawah lebih lebar dari konten
    height: 1, // Ketebalan garis 1 pixel
    backgroundColor: "#ccc", // Warna abu-abu tipis
    marginTop: 10,
    marginBottom: 50,
    marginLeft: 500,
  },
});
