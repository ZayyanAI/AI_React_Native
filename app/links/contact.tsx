import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Githubbrandssolid1 from "../assets/github-brands-solid.svg";
import Instagrambrandssolid1 from "../assets/instagram-brands-solid.svg";

import GithubBlack from "../assets/github-brands-solid (1).svg";
import InstagramBlack from "../assets/instagram-brands-solid (1).svg";
import "../global.css";

export default function Contact() {
  const scrollRef = useRef<ScrollView>(null);

  // PINDAHKAN STATE KE SINI
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  // PINDAHKAN FUNGSI SUBMIT KE SINI
  const handleSubmit = async () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Tolong isi semua bidang ya!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/myklkaaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Alert.alert("Sukses", "Pesan kamu berhasil terkirim!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        Alert.alert("Error", "Gagal mengirim pesan.");
      }
    } catch (error) {
      Alert.alert("Error", "Terjadi kesalahan koneksi.");
    } finally {
      setIsSubmitting(false);
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
        {/* --- SECTION 1: SOCIAL ICONS --- */}
        <View style={styles.socialContainer}>
          <View style={styles.socialRow}>
            <View style={styles.socialItem}>
              <Text style={styles.socialText}>Instagram</Text>
              <InstagramBlack width={48} height={48} />
            </View>
            <View style={styles.socialItem}>
              <Text style={styles.socialText}>Instagram</Text>
              <InstagramBlack width={48} height={48} />
            </View>
          </View>
          <View style={styles.socialRow}>
            <View style={styles.socialItem}>
              <Text style={styles.socialText}>Github</Text>
              <Link href="https://github.com/ZayyanAI">
                <GithubBlack width={48} height={48} />
              </Link>
            </View>
            <View style={styles.socialItem}>
              <Text style={styles.socialText}>Github</Text>
              <Link href="https://github.com/ZayyanAI">
                <GithubBlack width={48} height={48} />
              </Link>
            </View>
          </View>
        </View>

        {/* --- SECTION 2: HEADER --- */}
        <View style={styles.headerContainer}>
          <Text style={styles.subHeaderText}>
            If you want to know more about me, {"\n"}let me know from you!
          </Text>
          <Text style={styles.contactTitle}>Contact</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sendEmailTitle}>Send the Email</Text>

        {/* --- SECTION 3: FORM --- */}
        <View style={styles.formRow}>
          {/* Kolom Kiri */}
          <View style={styles.leftColumn}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Kolom Kanan */}
          <View style={styles.rightColumn}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              multiline
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
            />
          </View>
        </View>

        {/* --- SECTION 4: BUTTON --- */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {isSubmitting ? "Sending..." : "Send e-mail"}
            </Text>
          </TouchableOpacity>
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
  // Social Styles
  socialContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 450,
    marginTop: 30,
  },
  socialRow: { flexDirection: "row", gap: 40, marginBottom: 15 },
  socialItem: { flexDirection: "row", alignItems: "center", gap: 40 },
  socialText: { fontWeight: "bold", fontSize: 18 },

  // Header Styles
  headerContainer: { alignItems: "flex-end", marginBottom: 10 },
  subHeaderText: {
    fontSize: 18,
    color: "#444",
    textAlign: "right",
    width: "60%",
    fontFamily: "Inter-Light",
    marginRight: 450,
  },
  contactTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#444",
    marginTop: -5,
    fontFamily: "Exo350B",
    marginRight: 450,
  },
  divider: { height: 1, backgroundColor: "#999", marginBottom: 20 },
  sendEmailTitle: {
    fontSize: 24,
    fontFamily: "Inter-SemiBoldItalic",
    marginBottom: 25,
    marginLeft: 450,
  },

  // Form Styles
  formRow: { flexDirection: "row" },
  leftColumn: { flex: 1, marginLeft: 450 },
  rightColumn: { flex: 1 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, color: "#555", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 2,
    backgroundColor: "#fff",
    width: "45%",
  },
  textArea: { height: 120, textAlignVertical: "top" },

  // Button Styles
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 20,
    marginHorizontal: 400,
  },
  button: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 2,
  },
  buttonText: { color: "#fff", fontSize: 14, fontFamily: "Inter-Regular" },
});
