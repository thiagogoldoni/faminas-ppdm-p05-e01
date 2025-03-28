import React from 'react';
import { Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import { FAB } from 'react-native-paper';
import { Item } from '../models/Item';
import { ItemCard } from '../components/ItemCard';
import { itemViewStyles } from '../styles/ItemViewStyles';

interface ItemViewProps {
  items: Item[];
  onPressAddItem: () => void;
  onPressRemoveItem: (item: Item) => void;
}

export function ItemView({ items, onPressAddItem, onPressRemoveItem }: ItemViewProps) {

  // Função que o FlatList usa para renderizar cada item
  const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
    return (
      <ItemCard
        item={item}
        onPressRemoveItem={onPressRemoveItem}
      />
    );
  };

  return (
    <View style={itemViewStyles.container}>
      <FlatList
        data={items}
        style={itemViewStyles.list}
        renderItem={renderItem}
        ListEmptyComponent={
          <View>
            <Text style={itemViewStyles.noItemsText}>Nenhum item</Text>
          </View>
        }
      />
      <FAB
        style={itemViewStyles.fabButton}
        icon="plus"
        onPress={onPressAddItem}
      />
    </View>
  );
}