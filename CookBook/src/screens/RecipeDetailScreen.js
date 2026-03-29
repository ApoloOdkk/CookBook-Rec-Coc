import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route, navigation }) => {
    const { recipe } = route.params;
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() =>{
        navigation.setOptions({title:recipe.name, headerLeft: undefined,});

    }, [navigation, recipe.name]);

    return(
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{recipe.emoji} {recipe.name}</Text>
                
                <View style={styles.badgeContainer}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeIcon}>📁</Text>
                        <Text style={styles.badgeLabel}>Categoría</Text>
                        <Text style={styles.badgeValue}>{recipe.category}</Text>
                    </View>

                    <View style={styles.badge}>
                        <Text style={styles.badgeIcon}>⏱️</Text>
                        <Text style={styles.badgeLabel}>Tiempo</Text>
                        <Text style={styles.badgeValue}>{recipe.time}</Text>
                    </View>

                    <View style={styles.badge}>
                        <Text style={styles.badgeIcon}>📊</Text>
                        <Text style={styles.badgeLabel}>Dificultad</Text>
                        <Text style={styles.badgeValue}>{recipe.difficulty}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredientes</Text>
                <Text style={styles.descriptionText}>{recipe.ingredients}</Text>
                </View>

                <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preparación</Text>
                <Text style={styles.descriptionText}>{recipe.steps}</Text>
                </View>

                <View style={styles.actions}>
                <TouchableOpacity 
                    style={[styles.favoriteButton, { backgroundColor: isFavorite ? '#f1c40f' : '#bdc3c7' }]} 
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <Text style={styles.buttonText}>
                    {isFavorite ? '⭐ En Favoritos' : '☆ Marcar como Favorito'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
    );
};

export default RecipeDetailScreen;
