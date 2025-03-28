Projeto: Início da 5ª Aula Prática – Programação para Dispositivos Móveis (FAMINAS)
Este repositório contém um exemplo inicial de app desenvolvido durante as aulas de Programação para Dispositivos Móveis na FAMINAS. Ele serve como ponta de partida para a 5ª aula prática, onde os alunos poderão dar continuidade às funcionalidades e exercícios propostos.

Descrição do App
O app demonstra um gerenciador de itens simples, onde cada item possui:
- id (identificador único)
- name
- description

Os itens são listados em tela, e há funcionalidades básicas para adicionar e remover um item através de modais do React Native Paper.

A interface foi construída com React Native Paper (componentes de UI), e a organização do código segue uma estrutura modular (Model, View, Controller), tornando o projeto mais fácil de entender e evoluir.

Funcionalidades
- Adicionar Item: Abre um modal para inserir “Name” e “Description”.
- Remover Item: Exibe um modal de confirmação antes de excluir.
- Lista: Exibe um Card para cada item, permitindo rolagem (usando FlatList).

Objetivo Acadêmico
Este app é um exemplo que os alunos podem consultar para compreender a separação de responsabilidades, estilização, e o uso de bibliotecas como React Native Paper.

Na 5ª aula prática, os alunos devem adicionar a funcionalidade de editar um item, reaproveitando ou criando um modal próprio, seguindo boas práticas de nomenclatura e organização do código.

Tecnologias e Ferramentas
- Expo: Plataforma de desenvolvimento para React Native.
- React Native Paper: Biblioteca de componentes UI (Cards, FAB, Appbar, Modals etc.).
- TypeScript: Linguagem que adiciona tipagem ao JavaScript.
- React Hooks: (useState, useEffect, etc.) para gerenciamento de estado.

Como Rodar Localmente
Instale o Expo CLI (caso ainda não tenha):
- npm install --global expo-cli

Clone este repositório e entre na pasta do projeto:
- git clone https://github.com/thiagogoldoni/faminas-ppdm-p05-e01.git
- cd faminas-ppdm-p05-e01

Instale as dependências:
- npm install

Inicie o app:
- npx expo start

Execute no Emulador ou no Expo Go (no seu dispositivo):
- Ao rodar npx expo start, abra a URL no navegador ou use o QR code no Expo Go.
- Se preferir emulador Android, basta pressionar a no terminal, ou “Run on Android device/emulator” na interface web.

Próximos Passos / Tarefa
- Implementar a funcionalidade de editar itens usando um modal.
- - Dica: Você pode reaproveitar o modal de adicionar ou criar um novo “EditItemModal”.
- - Renomeie variáveis e componentes para manter clareza se o modal for reaproveitado para edição.
