import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COOKING_TIPS } from '../data/cookingTipsData'; // Importamos los 6 tips 
import { styles } from '../styles/CookingTipsStyles';

const CookingTipsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tips] = useState(COOKING_TIPS);

  useEffect(() => {
    // We created a 5-second stopwatch
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 5000);

    // We clear the interval if the user leaves the screen
    return () => clearInterval(intervalId);
  }, [tips.length]);

  // console message when changing tip
  useEffect(() => {
    console.log(`Ahora mostrando el tip: ${currentIndex + 1}`);
  }, [currentIndex]);

  // function to advance manually 
  const handleNextTip = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counter}>
          Tip {currentIndex + 1} de {tips.length}
        </Text>
        
        <Text style={styles.tipText}>
          "{tips[currentIndex].text}"
        </Text>

        <TouchableOpacity style={styles.nextButton} onPress={handleNextTip}>
          <Text style={styles.buttonText}>Siguiente Tip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CookingTipsScreen;