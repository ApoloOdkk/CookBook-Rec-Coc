import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { styles } from '../styles/AddRecipeStyles';

const AddRecipeScreen = () => {
  // independent states for each field
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect 
  useEffect(() => {
    const isValid = 
      recipeName.trim() !== '' && 
      category.trim() !== '' && 
      preparationTime.trim() !== '' && 
      difficulty.trim() !== '' && 
      ingredients.trim() !== '';
    
    setIsFormValid(isValid);
  }, [recipeName, category, preparationTime, difficulty, ingredients]);

  // Save Function
  const handleSave = () => {
    const summary = `Receta: ${recipeName}\nCat: ${category}\nTiempo: ${preparationTime}\nDif: ${difficulty}\nIngr: ${ingredients}`;
    Alert.alert('¡Receta Guardada!', summary);
  };

  //Cleaning Function
  const handleClear = () => {
    setRecipeName('');
    setCategory('');
    setPreparationTime('');
    setDifficulty('');
    setIngredients('');
  };

  return (
    // The keyboard does not cover the fields
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Nombre de la Receta:</Text>
        <TextInput 
          style={styles.input} 
          value={recipeName} 
          onChangeText={setRecipeName} 
          placeholder="Ej: Aji de Gallina"
        />

        <Text style={styles.label}>Categoría:</Text>
        <TextInput 
          style={styles.input} 
          value={category} 
          onChangeText={setCategory} 
          placeholder="Postre, Entrada, Plato Fuerte..."
        />

        <Text style={styles.label}>Tiempo (minutos):</Text>
        <TextInput 
          style={styles.input} 
          value={preparationTime} 
          onChangeText={setPreparationTime} 
          keyboardType="numeric"
          placeholder="Ej: 45"
        />

        <Text style={styles.label}>Dificultad:</Text>
        <TextInput 
          style={styles.input} 
          value={difficulty} 
          onChangeText={setDifficulty} 
          placeholder="Fácil, Media, Difícil"
        />

        <Text style={styles.label}>Ingredientes:</Text>
        <TextInput 
          style={[styles.input, { height: 80 }]} 
          value={ingredients} 
          onChangeText={setIngredients} 
          multiline
          placeholder="Lista de ingredientes principales..."
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.saveButton, { opacity: isFormValid ? 1 : 0.5 }]} 
            onPress={handleSave}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Guardar Receta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.buttonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddRecipeScreen;