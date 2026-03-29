import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CookingTipsScreen from '../screens/CookingTipsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="RecipeList" 
        component={RecipeListScreen} 
        options={{ title: 'Recetario' }} 
      />
      <Stack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen} 
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon;
            if (route.name === 'RecipesTab') icon = '📖';
            else if (route.name === 'AddRecipe') icon = '➕';
            else if (route.name === 'Tips') icon = '💡';
            return <Text style={{ fontSize: size, color }}>{icon}</Text>;
          },
          tabBarActiveTintColor: '#e67e22',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="RecipesTab" 
          component={RecipeStack} 
          options={{ title: 'Recetas', headerShown: false }} 
        />
        <Tab.Screen 
          name="AddRecipe" 
          component={AddRecipeScreen} 
          options={{ title: 'Nueva Receta' }} 
        />
        <Tab.Screen 
          name="Tips" 
          component={CookingTipsScreen} 
          options={{ title: 'Tips' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}