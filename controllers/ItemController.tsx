import React, { useState } from 'react';
import { ItemService } from '../services/ItemService';
import { Item } from '../models/Item';
import { ItemView } from '../views/ItemView';
import { AddItemModal } from '../components/AddItemModal';
import { RemoveItemModal } from '../components/RemoveItemModal';

export function ItemController() {

  // Lista de itens
  const [items, setItems] = useState<Item[]>([]);

  // Estado para modal de adicionar item
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Estado para modal de remover item
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);

  // Abre o modal de adicionar item, limpando campos
  const openAddItemModal = () => {
    setName('');
    setDescription('');
    setAddModalVisible(true);
  };

  // Fecha o modal de adicionar item
  const closeAddItemModal = () => {
    setAddModalVisible(false);
  };

  /**
   * Salva o item.
   * Se algum campo estiver vazio, exibe alerta.
   */
  const handleAddItem = () => {
    if (!name || !description) {
      alert('Por favor, preencha os campos.');
      return;
    }
    ItemService.addItem(name, description);
    setItems(ItemService.getItems());
    setAddModalVisible(false);
  };

  /**
   * Quando o usuário clica no ícone de remover, abre o modal de remoção,
   * guardando o item selecionado.
   */
  const handleRemovePress = (item: Item) => {
    setSelectedItem(item);
    setRemoveModalVisible(true);
  };

  /**
   * Ao confirmar a remoção, chama o Service para excluir,
   * depois atualiza a lista e fecha o modal.
   */
  const handleConfirmRemove = () => {
    if (selectedItem) {
      ItemService.removeItem(selectedItem);
      setItems(ItemService.getItems());
    }
    setRemoveModalVisible(false);
    setSelectedItem(undefined);
  };

  // Fecha o modal de remover sem excluir
  const handleCancelRemove = () => {
    setRemoveModalVisible(false);
    setSelectedItem(undefined);
  };

  return (
    <>
      {/* View principal que exibe a lista de itens e o botão (FAB) */}
      <ItemView
        items={items}
        onPressAddItem={openAddItemModal}
        onPressRemoveItem={handleRemovePress}
      />

      {/* Modal de adicionar item */}
      <AddItemModal
        visible={addModalVisible}
        onDismiss={closeAddItemModal}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        onSave={handleAddItem}
      />

      {/* Modal de remover item */}
      <RemoveItemModal
        visible={removeModalVisible}
        onDismiss={handleCancelRemove}
        item={selectedItem}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
}