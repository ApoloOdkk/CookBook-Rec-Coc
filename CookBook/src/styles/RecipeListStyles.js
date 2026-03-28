import { StyleSheet } from 'react-native';

// Usamos StyleSheet.create como pide el manual 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    // Sombreado para que parezca tarjeta [cite: 51]
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    color: '#666',
    marginTop: 5,
  },
});