import React from 'react';
import { Text } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';
import { Item } from '../models/Item';
import { modalStyles } from '../styles/ModalStyles';

/**
 * Conjunto de propriedades (valores e funcionalidades) passadas para
 * o componente, para que ele possa utilizá-las no layout e na lógica.
 */
interface RemoveItemModalProps {
  visible: boolean;
  onDismiss: () => void;
  item?: Item;
  onConfirm: () => void;
}

export function RemoveItemModal({
  visible,
  onDismiss,
  item,
  onConfirm,
}: RemoveItemModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={modalStyles.container}
      >
        <Text style={modalStyles.title}>Remover item</Text>
        <Text style={modalStyles.message}>
          Tem certeza que deseja excluir{' '}
          <Text style={{ fontWeight: 'bold' }}>{item?.name}</Text>?
        </Text>

        <Button
          mode="contained"
          onPress={onConfirm}
          style={modalStyles.mainButton}
        >
          Excluir
        </Button>
        <Button
          mode="outlined"
          onPress={onDismiss}
          style={modalStyles.secondaryButton}
        >
          Cancelar
        </Button>
      </Modal>
    </Portal>
  );
}