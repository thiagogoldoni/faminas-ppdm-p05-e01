import React from 'react';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Item } from '../models/Item';

/**
 * Conjunto de propriedades (valores e funcionalidades) passadas para
 * o componente, para que ele possa utilizá-las no layout e na lógica.
 */
interface ItemCardProps {
  item: Item;
  onPressRemoveItem: (item: Item) => void;
}

export function ItemCard({ item, onPressRemoveItem }: ItemCardProps) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="delete" onPress={() => onPressRemoveItem(item)} />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
});