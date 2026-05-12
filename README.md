# Spotify Clone - React

Este projeto é uma réplica da interface do Spotify, desenvolvida originalmente durante a **Imersão Alura** e evoluída para uma aplicação **React** moderna e funcional. O foco principal é a construção de uma interface componentizada, responsiva e com gerenciamento de estado avançado, simulando a experiência real de uso da plataforma.

## 🔐 Acesso ao Projeto (Login)

Para navegar e utilizar todas as funcionalidades da aplicação, implementamos um sistema de login simples e intuitivo:

- **E-mail:** Insira qualquer e-mail válido (ex: `usuario@email.com`).
- **Senha:** Utilize uma senha numérica de **exatamente 6 dígitos**.
- **Saudação Personalizada:** Ao entrar, você será recebido por uma saudação dinâmica que se ajusta ao horário do seu sistema (Bom dia, Boa tarde ou Boa noite).

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface declarativa e componentizada.
- **JavaScript (ES6+)**: Lógica de filtragem, estados complexos e manipulação de dados.
- **CSS3 Personalizado**: 
  - **Variáveis CSS**: Para consistência de cores e temas oficiais.
  - **Unidades REM**: Garantindo acessibilidade e escalonamento adequado.
  - **Flexbox & Grid**: Para layouts complexos, grids adaptativos e responsividade.
- **FontAwesome**: Biblioteca de ícones para navegação, controles e ações de usuário.
- **JSON & LocalStorage**: Simulação de API de artistas e persistência de dados do usuário no navegador.

## 📋 Funcionalidades Principais

- **Gestão Completa de Playlists**: 
    - Criação de playlists personalizadas via interface integrada.
    - Adição inteligente de artistas às playlists com um clique.
    - **Exclusão de Playlists**: Botão de remoção completa com confirmação de segurança.
    - Remoção individual de músicas/artistas de dentro das playlists.
- **Navegação Inteligente**:
    - **Início**: Tela de boas-vindas com sugestões e categorias.
    - **Buscar**: Interface limpa e exclusiva para pesquisa focada.
    - Destaque visual para indicar a aba ativa na barra lateral.
- **Busca em Tempo Real**: Filtro instantâneo de artistas integrado entre todos os componentes.
- **Interface Responsiva & Moderna**: Layout "Oversized" para melhor legibilidade e adaptabilidade total entre Desktop e Mobile.
- **Persistência de Dados**: Suas playlists e favoritos são salvos automaticamente via LocalStorage.

## ✨ Evolução e Melhorias (O que mudou?)

Este projeto evoluiu de uma estrutura HTML/CSS estática para uma SPA (Single Page Application) robusta:

1.  **Sistema de Login e Saudação**: Implementação de uma tela de acesso com lógica de horário dinâmica.
2.  **UX de Criação**: Substituição do `prompt()` por campos de entrada integrados e modernos na Sidebar.
3.  **Gestão Dinâmica**: Adição de funcionalidades de exclusão e edição de listas em tempo real.
4.  **Componentização Total**: Código organizado em módulos independentes (`Sidebar`, `Header`, `Main`, `Footer`, `Login`).
5.  **Acessibilidade (A11y)**: Estrutura semântica aprimorada e suporte total a navegação por teclado.
6.  **Oversized UI/UX Refresh**: 
    - **Fontes Ampliadas**: Aumento global das fontes para máxima legibilidade e conforto visual.
    - **Sidebar Expandida (420px)**: Mais espaço para gestão da biblioteca e playlists.
    - **Header Premium**: Barra de navegação e busca expandidas para uma experiência mais imersiva e integrada.
    - **Responsividade Avançada**: Ajustes finos para garantir que a interface "oversized" se adapte perfeitamente de celulares a monitores ultra-wide.

## 📁 Estrutura de Pastas

```text
src/
├── assets/          # Imagens, ícones oficiais e capas de playlists.
├── api-artists/     # Dados simulados de artistas (artists.json).
├── componentes/     # Componentes modulares da aplicação.
│   ├── Login/       # Tela de acesso com saudação dinâmica.
│   ├── Footer/      # Player inferior e visualização do artista.
│   ├── Header/      # Barra superior e campo de busca.
│   ├── Main/        # Orquestrador de visualizações e playlists.
│   └── Sidebar/     # Menu lateral e gestão de biblioteca.
└── App.js           # Orquestrador principal de estado e rotas.
```

## 🛠️ Como Executar

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Inicie o projeto**:
   ```bash
   npm start
   ```
4. **Acesse**: `http://localhost:3000`

---

*Desenvolvido e aprimorado como parte da jornada de aprendizado em React e Desenvolvimento Web.*
