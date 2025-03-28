import { Item } from '../models/Item';

export class ItemService {

  /**
   * Lista de itens em memória.
   * No futuro, poderíamos ter DB real.
   */
  private static items: Item[] = [];

  /**
   * Adiciona um novo item, gerando o id automaticamente.
   * Estratégia: encontra o maior id atual e soma 1.
   * @param name -> "nome do item"
   * @param description -> "descrição do item"
   * @returns -> "void"
   */
  static addItem(name: string, description: string): void {
    const newId = this.generateNextId();
    const newItem: Item = {
      id: newId,
      name,
      description,
    };
    this.items.push(newItem);
  }

  /**
   * Remove item com base no id.
   * @param item -> "item a ser removido"
   * @returns -> "void"
   */
  static removeItem(item: Item): void {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Retorna todos os itens para evitar manipular diretamente o array.
   * @returns -> "Item[]"
   */
  static getItems(): Item[] {
    return [...this.items];
  }

  /**
   * Gera próximo id encontrando o maior valor existente na lista e somando 1.
   * Se a lista estiver vazia, o primeiro id será 1.
   */
  private static generateNextId(): number {
    if (this.items.length === 0) {
      return 1;
    }
    const maxId = Math.max(...this.items.map((item) => item.id));
    return maxId + 1;
  }
}