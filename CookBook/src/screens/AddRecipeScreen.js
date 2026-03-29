import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { styles } from '../styles/AddRecipeStyles';

const AddRecipeScreen = () => {
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = 
      recipeName.trim() !== '' && 
      category.trim() !== '' && 
      preparationTime.trim() !== '' && 
      difficulty.trim() !== '' && 
      ingredients.trim() !== '';
    
    setIsFormValid(isValid);
  }, [recipeName, category, preparationTime, difficulty, ingredients]);

  const handleSave = () => {
    const summary = `Receta: ${recipeName}\nCat: ${category}\nTiempo: ${preparationTime}\nDif: ${difficulty}\nIngr: ${ingredients}`;
    Alert.alert('¡Receta Guardada!', summary);
  };

  const handleClear = () => {
    setRecipeName('');
    setCategory('');
    setPreparationTime('');
    setDifficulty('');
    setIngredients('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nueva Receta</Text>
          <Text style={styles.headerSubtitle}>Completa los campos para registrar tu platillo</Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de la Receta</Text>
            <TextInput 
              style={styles.input} 
              value={recipeName} 
              onChangeText={setRecipeName} 
              placeholder="Ej: Ají de Gallina"
              placeholderTextColor="#a4b0be"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Categoría</Text>
            <TextInput 
              style={styles.input} 
              value={category} 
              onChangeText={setCategory} 
              placeholder="Postre, Entrada, Plato Fuerte..."
              placeholderTextColor="#a4b0be"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Tiempo (min)</Text>
              <TextInput 
                style={styles.input} 
                value={preparationTime} 
                onChangeText={setPreparationTime} 
                keyboardType="numeric"
                placeholder="45"
                placeholderTextColor="#a4b0be"
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Dificultad</Text>
              <TextInput 
                style={styles.input} 
                value={difficulty} 
                onChangeText={setDifficulty} 
                placeholder="Media"
                placeholderTextColor="#a4b0be"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ingredientes</Text>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              value={ingredients} 
              onChangeText={setIngredients} 
              multiline
              numberOfLines={4}
              placeholder="Lista los ingredientes principales..."
              placeholderTextColor="#a4b0be"
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.saveButton, { opacity: isFormValid ? 1 : 0.6 }]} 
            onPress={handleSave}
            disabled={!isFormValid}
          >
            <Text style={styles.saveButtonText}>Guardar Receta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Limpiar Formulario</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddRecipeScreen;