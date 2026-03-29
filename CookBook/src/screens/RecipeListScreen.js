import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/RecipeListStyles';

// example data
const INITIAL_RECIPES = [
    { id: '1', name: 'Ceviche', category: 'Entrada', emoji: '🐟', time: '20 min', difficulty: 'Media', ingredients: 'Pescado, limón, cebolla', steps: 'Marinar el pescado en limón...' },
    { id: '2', name: 'Lomo Saltado', category: 'Plato Fuerte', emoji: '🥘', time: '30 min', difficulty: 'Alta', ingredients: 'Carne, papas, cebolla', steps: 'Saltear la carne a fuego alto...' },
];
const RecipeListScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setRecipes(INITIAL_RECIPES);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    },[]);

    const handlePress = (recipe) => {
        navigation.navigate('RecipeDetail', {recipe});
    };
    // simulate load
    if(loading){
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Cargando Recetas...</Text>
            </View>
        );
    };
    return(
        <View style={styles.container}>
            <FlatList
            data={recipes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style ={styles.card} onPress={() => handlePress(item)}>
                   <Text style={styles.title}>{item.emoji} {item.name}</Text>
                   <Text style={styles.category}>Categoría: {item.category}</Text> 
                </TouchableOpacity>
            )}
            />
        </View>
    );
};

export default RecipeListScreen;