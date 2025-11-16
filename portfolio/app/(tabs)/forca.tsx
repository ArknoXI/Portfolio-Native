import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Svg, { Line, Circle } from "react-native-svg";

const palavras = [
  "REACT", "NEXTJS", "JAVASCRIPT", "TAILWIND", "HTML", "CSS",
  "NODE", "PYTHON", "GITHUB", "FRONTEND", "BACKEND", "COMPONENTE",
  "LINK", "STATE", "POO", "WEB", "SITE", "ARRAY", "STRING",
  "BOOLEAN", "INTEGER", "IMPORT", "INPUT", "BUTTON", "ARVORE",
  "FILA", "PILHA", "LISTA", "PROGRAMACAO", "ALGORITMO"
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Forca() {
  const router = useRouter();
  const maxTentativas = 6;

  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [status, setStatus] = useState("jogando");

  const novaPalavra = () => {
    const aleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(aleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setStatus("jogando");
  };

  useEffect(() => {
    novaPalavra();
  }, []);

  useEffect(() => {
    if (!palavra) return;

    const setPalavra = new Set(palavra.split(""));
    const setCorretas = new Set(letrasCorretas);

    if (setPalavra.size === setCorretas.size) {
      setStatus("vitoria");
    }

    if (letrasErradas.length >= maxTentativas) {
      setStatus("derrota");
    }
  }, [letrasCorretas, letrasErradas]);

  const clicarLetra = (letra: string) => {
    if (status !== "jogando") return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  };

  const displayPalavra = palavra
    ? palavra
        .split("")
        .map((l) => (letrasCorretas.includes(l) ? l : "_"))
        .join(" ")
    : "";

  const Boneco = () => (
    <Svg height="220" width="140" style={{ alignSelf: "center", marginBottom: 20 }}>
      <Line x1="20" y1="200" x2="120" y2="200" stroke="#4B5563" strokeWidth="4" />
      <Line x1="40" y1="200" x2="40" y2="20" stroke="#4B5563" strokeWidth="4" />
      <Line x1="40" y1="20" x2="100" y2="20" stroke="#4B5563" strokeWidth="4" />
      <Line x1="100" y1="20" x2="100" y2="40" stroke="#4B5563" strokeWidth="3" />

      {letrasErradas.length > 0 && (
        <Circle cx="100" cy="55" r="12" stroke="#EF4444" strokeWidth="3" fill="transparent" />
      )}
      {letrasErradas.length > 1 && (
        <Line x1="100" y1="67" x2="100" y2="120" stroke="#EF4444" strokeWidth="3" />
      )}
      {letrasErradas.length > 2 && (
        <Line x1="100" y1="80" x2="80" y2="100" stroke="#EF4444" strokeWidth="3" />
      )}
      {letrasErradas.length > 3 && (
        <Line x1="100" y1="80" x2="120" y2="100" stroke="#EF4444" strokeWidth="3" />
      )}
      {letrasErradas.length > 4 && (
        <Line x1="100" y1="120" x2="80" y2="150" stroke="#EF4444" strokeWidth="3" />
      )}
      {letrasErradas.length > 5 && (
        <Line x1="100" y1="120" x2="120" y2="150" stroke="#EF4444" strokeWidth="3" />
      )}
    </Svg>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
        <Text style={styles.voltarTexto}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Jogo da Forca</Text>

      <Boneco />

      <Text style={styles.palavra}>{displayPalavra}</Text>

      <Text style={styles.erradas}>Letras erradas: {letrasErradas.join(", ")}</Text>

      <Text style={styles.tentativas}>
        Tentativas restantes: {maxTentativas - letrasErradas.length}
      </Text>

      {/* Teclado */}
      <View style={styles.grid}>
        {alfabeto.map((letra) => {
          const acertou = letrasCorretas.includes(letra);
          const errou = letrasErradas.includes(letra);
          return (
            <TouchableOpacity
              key={letra}
              onPress={() => clicarLetra(letra)}
              disabled={acertou || errou || status !== "jogando"}
              style={[
                styles.tecla,
                acertou && styles.acertou,
                errou && styles.errou,
              ]}
            >
              <Text style={styles.teclaTexto}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {status === "vitoria" && (
        <Text style={styles.vitoria}>🎉 Parabéns! Você venceu! Palavra: {palavra}</Text>
      )}

      {status === "derrota" && (
        <Text style={styles.derrota}>💀 Você perdeu! Palavra: {palavra}</Text>
      )}

      <TouchableOpacity onPress={novaPalavra} style={styles.reiniciar}>
        <Text style={styles.reiniciarTexto}>Reiniciar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#EEF2FF",
    minHeight: "100%",
    alignItems: "center",
  },

  voltar: {
    alignSelf: "flex-start",
    backgroundColor: "#1F2937",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  voltarTexto: { color: "white", fontSize: 16 },

  titulo: { fontSize: 32, fontWeight: "bold", marginBottom: 10, color: "#111827" },

  palavra: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 8,
    marginBottom: 10,
  },

  erradas: { color: "red", marginBottom: 5, fontSize: 16 },
  tentativas: { color: "#374151", marginBottom: 20, fontSize: 16 },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginBottom: 25,
  },

  tecla: {
    width: 40,
    height: 40,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  teclaTexto: { fontWeight: "bold", color: "#1F2937" },

  acertou: { backgroundColor: "#22C55E" },
  errou: { backgroundColor: "#EF4444" },

  vitoria: { fontSize: 22, color: "#22C55E", marginTop: 10, textAlign: "center" },
  derrota: { fontSize: 22, color: "#EF4444", marginTop: 10, textAlign: "center" },

  reiniciar: {
    backgroundColor: "#16A34A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  reiniciarTexto: { color: "white", fontSize: 18, fontWeight: "bold" },
});
