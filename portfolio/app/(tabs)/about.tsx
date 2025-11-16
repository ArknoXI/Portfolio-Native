import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const tools = [
  { name: "React Native", icon: require("../../assets/icons/REACT.png") },
  { name: "VS Code", icon: require("../../assets/icons/VSCODE.png") },
  { name: "Godot Engine", icon: require("../../assets/icons/Godot.png") },
  { name: "Aseprite", icon: require("../../assets/icons/Asesprite.png") },
];

const modulesUsed = [
  { name: "React Native", icon: require("../../assets/icons/REACT.png") },
];

export default function About() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <Text style={styles.title}>Sobre Mim</Text>

      <Text style={styles.description}>
        Sou estudante de <Text style={styles.bold}>Ciência da Computação</Text> e apaixonado por{" "}
        <Text style={styles.bold}>desenvolvimento de jogos e mobile</Text>. Este aplicativo foi
        desenvolvido utilizando <Text style={styles.bold}>React Native</Text> e inclui também um
        jogo criado por mim utilizando <Text style={styles.bold}>Godot Engine</Text>.
      </Text>

      <Text style={styles.sectionTitle}>Ferramentas que Utilizo</Text>
      <View style={styles.grid}>
        {tools.map((tool, index) => (
          <View key={index} style={styles.card}>
            <Image source={tool.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.cardLabel}>{tool.name}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Tecnologias Usadas no App</Text>
      <View style={styles.grid}>
        {modulesUsed.map((tool, index) => (
          <View key={index} style={styles.card}>
            <Image source={tool.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.cardLabel}>{tool.name}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#D1D5DB",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 30,
  },
  bold: {
    fontWeight: "700",
    color: "white",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#1F2937",
    width: 120,
    height: 120,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  cardLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
