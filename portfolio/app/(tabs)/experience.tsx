import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const experiences = [
  {
    title: "Desenvolvimento de Jogos — Godot Engine",
    period: "Atualmente",
    description:
      "Criação de jogos 2D utilizando Godot Engine, trabalhando com sprites, lógica de jogo, animações, física e design de fases.",
  },
  {
    title: "Estágio - TI",
    period: "Atualmente",
    description:
      "Manipulação pacote Office.",
  },
];

export default function Experience() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Experiência</Text>

      {experiences.map((exp, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{exp.title}</Text>
          <Text style={styles.period}>{exp.period}</Text>
          <Text style={styles.description}>{exp.description}</Text>
        </View>
      ))}
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
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#1F2937",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  period: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#D1D5DB",
    lineHeight: 22,
  },
});
