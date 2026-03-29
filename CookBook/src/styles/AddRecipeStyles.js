import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
  header: {
    padding: 24,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f3542',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#a4b0be',
    marginTop: 4,
  },
  formCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#57606f',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#2f3542',
  },
  row: {
    flexDirection: 'row',
  },
  textArea: {
    height: 100,
  },
  footer: {
    padding: 24,
    gap: 12,
  },
  saveButton: {
    backgroundColor: '#2ed573',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#2ed573',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    padding: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ff4757',
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});