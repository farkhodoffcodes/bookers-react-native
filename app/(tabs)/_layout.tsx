import { Link, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function TabLayout() {

  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index" // Dastlab ochiladigan ekran
      screenOptions={{
        tabBarActiveTintColor: '#9C0A35',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#1C1C1E',
          paddingTop: 15,
          paddingBottom: 10,
          height: 70
         },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <TabBarIcon style={tw`mb-3`} name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={tw`mb-3`} name={focused ? 'construct' : 'construct-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="master"
        options={{
          title: 'Master',
          tabBarIcon: ({ color, focused }) => (
            <SimpleLineIcons style={tw`mb-3 text-3xl`} name={'graduation'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={tw`mb-3`} name={focused ? 'chatbubble' : 'chatbubble-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={tw`mb-3`} name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}