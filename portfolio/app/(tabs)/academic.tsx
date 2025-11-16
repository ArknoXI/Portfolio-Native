import { View, Text, StyleSheet, FlatList } from "react-native";

const experiences = [
  {
    title: "Graduação - Ciência da Computação",
    institution: "Universidade Catolica de Pernambuco",
    period: "Em andamento",
    description:
      "Estudo focado em algoritmos, estruturas de dados, inteligência artificial e desenvolvimento de sistemas.",
  },
  {
    title: "Curso - Desenvolvimento de Jogos Digitais",
    institution: "SENAC",
    period: "2021 - 2022",
    description:
      "Aprendizado em Unity3D, curso para a introdução ao mundo de desenvolvimento de jogos.",
  },
];

export default function Academic() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <FlatList
        data={experiences}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.institution}</Text>
            <Text style={styles.cardPeriod}>{item.period}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#111827",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1f2937",
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#9ca3af",
  },
  cardPeriod: {
    color: "#60a5fa",
    marginBottom: 10,
  },
  cardDescription: {
    color: "#e5e7eb",
    fontSize: 16,
    lineHeight: 22,
  },
});
