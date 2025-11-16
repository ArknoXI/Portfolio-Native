import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from "react-native";

const projects = [
  {
    name: "Jogo da Forca",
    description: "Jogo da forca pedido no projeto de Web&Mobile.",
    image: require("../../assets/icons/Forca.png"),
    github: "/Forca",
    Type: "link",
  },
  {
    name: "Extensão WEB",
    description: "Extensão Web para a transição entre jogos diários da WEB. Utilizando JS.",
    image: require("../../assets/icons/JS.png"),
    github: "https://github.com/ArknoXI/Web_Extension_Dailies",
    Type: "a",
  },
  {
    name: "Gods At Dungeon",
    description: "Repositório do meu jogo Gods At Dungeon. Utilizando Godot Engine.",
    image: require("../../assets/icons/Godot.png"),
    github: "https://github.com/ArknoXI/GOD_Repository",
    Type: "a",
  },
];

export default function Projects() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.grid}>
        {projects.map((project, index) => (
          <View key={index} style={styles.card}>
            <Image source={project.image} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.name}>{project.name}</Text>
              <Text style={styles.description}>{project.description}</Text>

              {project.Type === "link" && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => console.log("navigate to", project.github)}
                >
                  <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
              )}

              {project.Type === "a" && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => Linking.openURL(project.github)}
                >
                  <Text style={styles.buttonText}>GitHub</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#444",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});