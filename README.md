# delivery-app


# Projeto Delivery - API em Node.js

Este é um projeto simples de **delivery** desenvolvido em **Express.js**, com autenticação, cadastro de restaurantes, cardápio e pedidos.

---

## Funcionalidades

### 👤 Cadastro e Autenticação de Usuários
- Cadastro de usuário com **nome, e-mail e senha**.
- Senhas são armazenadas com **hash via bcrypt**.
- Login com **JWT (JSON Web Token)** para autenticação.

### 🏬 Cadastro de Restaurantes
- Cada restaurante possui:
  - Nome
  - Endereço
  - Tipo de comida
- **Somente administradores** podem cadastrar restaurantes.

### 🍽️ Cardápio
- Cada restaurante tem seu próprio cardápio.
- Cada item do cardápio contém:
  - Nome
  - Descrição
  - Preço
  - Imagem (opcional)

### 🛒 Pedidos
- Usuário escolhe itens do cardápio e faz um pedido.
- Status do pedido:
  1. **Pendente**
  2. **Em preparo**
  3. **A caminho**
  4. **Entregue**

---

## Tecnologias Utilizadas
- Node.js + Express
- Prisma (ou Sequelize/Mongoose, conforme escolha de banco)
- Bcrypt (hash de senhas)
- JWT (autenticação)
- Banco de dados (PostgreSQL / MySQL / MongoDB)

---

## Estrutura Básica de Rotas

### Usuários
- `POST /usuarios/cadastro` → Cadastro de usuário
- `POST /usuarios/login` → Login e geração de token JWT

### Restaurantes
- `POST /restaurantes` → Cadastro de restaurante (apenas admin)
- `GET /restaurantes` → Listar restaurantes

### Cardápio
- `POST /restaurantes/:id/cardapio` → Adicionar item ao cardápio (admin)
- `GET /restaurantes/:id/cardapio` → Listar cardápio de um restaurante

### Pedidos
- `POST /pedidos` → Criar pedido
- `GET /pedidos/:id` → Ver status do pedido
- `PATCH /pedidos/:id` → Atualizar status (apenas admin/entregador)

---

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seuusuario/delivery-api.git

# Entre na pasta
cd delivery-api

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env

# Rode as migrações (se usar Prisma)
npx prisma migrate dev

# Inicie o servidor
npm run dev