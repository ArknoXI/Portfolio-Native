import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Hero() {
return (
<View style={styles.container}>
{/* Icones decorativos */}
<Image
source={require('../../assets/icons/Godot.png')}
style={[styles.icon, styles.iconTopLeft]}
/>
<Image
source={require('../../assets/icons/Godot.png')}
style={[styles.icon, styles.iconBottomRight]}
/>
<Image
source={require('../../assets/icons/Asesprite.png')}
style={[styles.icon, styles.iconRight]}
/>
<Image
source={require('../../assets/icons/VSCODE.png')}
style={[styles.icon, styles.iconBottomLeft]}
/>


{/* Texto principal */}
<Text style={styles.title}>Leandro Lima</Text>
<Text style={styles.subtitle}>Desenvolvedor de jogos digitais | <Text style={styles.bold}>Godot</Text></Text>
<Text style={styles.subtitle}>Artista de pixelart | <Text style={styles.bold}>Asesprite</Text></Text>


{/* Botão */}
<Link href="/forca" asChild>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Jogar Forca 🎮</Text>
</TouchableOpacity>
</Link>
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f5f5f5',
},
icon: {
position: 'absolute',
width: 60,
height: 60,
opacity: 0.2,
},
iconTopLeft: {
top: 120,
left: 100,
},
iconBottomRight: {
bottom: 120,
right: 80,
},
iconRight: {
top: '33%',
right: '25%',
opacity: 0.8,
},
iconBottomLeft: {
bottom: 80,
left: '25%',
},
title: {
fontSize: 32,
fontWeight: 'bold',
},
subtitle: {
fontSize: 18,
color: '#555',
marginTop: 6,
},
bold: {
fontWeight: 'bold',
},
button: {
backgroundColor: '#555',
paddingVertical: 12,
paddingHorizontal: 24,
borderRadius: 10,
marginTop: 16,
},
buttonText: {
color: 'white',
fontSize: 18,
},
});