import React, { use, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route, navigation }) => {
    const { recipe } = route.params;
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() =>{
        navigation.setOptions({title:recipe.name});

    }, [navigation, recipe.name]);

    return(
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{recipe.emoji} {recipe.name}</Text>

                <Text style={styles.info}>**Categoría:** {recipe.category}</Text>
                <Text style={styles.info}>**Tiempo:** {recipe.time}</Text>
                <Text style={styles.info}>**Dificultad** {recipe.difficulty}</Text>

                <Text style={styles.sectionTittle}>Ingredientes:</Text>
                <Text style={styles.text}>{recipe.steps}</Text>

                // favorites button

                <TouchableOpacity
                style={[styles.backButton, { backgroundColor: isFavorite ? '#f1c40f' : 'bdc3c7'}]}
                onPress={() => setIsFavorite(!isFavorite)}
                >
                    <Text style={styles.buttonText}>
                        {isFavorite ? '⭐ En Favoritos' : '☆ Marcar como Favorito'}
                    </Text>
                </TouchableOpacity>

                // back button

                <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}> Volver </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default RecipeDetailScreen;
