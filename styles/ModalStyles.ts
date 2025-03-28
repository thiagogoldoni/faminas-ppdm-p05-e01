import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    marginBottom: 10,
  },
  mainButton: {
    marginTop: 10,
  },
  secondaryButton: {
    marginTop: 10,
  },
});