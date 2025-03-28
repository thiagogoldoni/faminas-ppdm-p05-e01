import React from 'react';
import { Text } from 'react-native';
import { Portal, Modal, TextInput, Button } from 'react-native-paper';
import { modalStyles } from '../styles/ModalStyles';

/**
 * Conjunto de propriedades (valores e funcionalidades) passadas para
 * o componente, para que ele possa utilizá-las no layout e na lógica.
 */
interface AddItemModalProps {
  visible: boolean;
  onDismiss: () => void;
  name: string;
  setName: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  onSave: () => void;
}

export function AddItemModal({
  visible,
  onDismiss,
  name,
  setName,
  description,
  setDescription,
  onSave,
}: AddItemModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={modalStyles.container}
      >
        <Text style={modalStyles.title}>Adicionar item</Text>

        <TextInput
          label="Nome"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={modalStyles.input}
        />
        <TextInput
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={modalStyles.input}
        />

        <Button mode="contained" onPress={onSave} style={modalStyles.mainButton}>
          Salvar
        </Button>
      </Modal>
    </Portal>
  );
}