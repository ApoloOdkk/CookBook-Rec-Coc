import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// screen imports
import RecipeListScreen from '../screens/recipes/RecipeListScreen';
import RecipeDetailScreen from '../screens/recipes/RecipeDetailScreen';
import AddRecipeScreen from '../screens/add-recipe/AddRecipeScreen';
import CookingTipsScreen from '../screens/tips/CookingTipsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Recipe flow stack

function RecipeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "RecipList"
                componente = {RecipeListScreen}
                options = {{tittle: 'Recetario'}}
            />
            <Stack.Screen
            name = "RecipeDetail"
            component = {RecipeDetailScreen}
            />
        </Stack.Navigator>
    );
}

//tab navigation

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="RecipesTab"
                component={RecipeStack}
                options={{ title: 'Recetas', headerShown: false}}
                />
                <Tab.Screen
                name="AddRecipe"
                component={AddRecipeScreen}
                options={{ title: 'Nueva Receta'}}
                />
                <Tab.Screen
                name="Tips"
                component={CookingTipsScreen}
                options={{title:'Tips'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}