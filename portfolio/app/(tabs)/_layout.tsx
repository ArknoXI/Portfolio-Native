import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="academic"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experiência',
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="layers-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="forca"
        options={{
          title: 'Forca',
          tabBarIcon: ({ color, size = 28 }) => (
            <Ionicons name="game-controller-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
