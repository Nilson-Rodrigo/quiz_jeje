# Quiz App

Este projeto é uma aplicação de Quiz interativa, desenvolvida com React, TypeScript e Tailwind CSS. O sistema conta com uma tela inicial atraente, um fluxo de perguntas e opções de múltiplas escolhas, tela de resultados (com cálculo de acertos e mensagens motivacionais) e a funcionalidade para o administrador cadastrar novas perguntas que são salvas no armazenamento local do navegador (Local Storage). O design da aplicação foi implementado fielmente a partir de um protótipo fornecido no Figma.

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como parte de um trabalho acadêmico.

- **Disciplina**: Programação para Internet I
- **Professor**: Jeferson Soares
- **Autor/Aluno**: Nilson Rodrigo

## 🚀 Tecnologias e Ferramentas

- [React](https://reactjs.org/) - Biblioteca para criação da interface.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática.
- [Vite](https://vitejs.dev/) - Construtor de módulos extremamente rápido.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework de utilitários CSS para estilização direta no template.
- [React Router DOM](https://reactrouter.com/) - Gerenciamento e transição de rotas.

## 📦 Como rodar o projeto

1. Tenha o Node.js instalado na sua máquina.
2. Clone o repositório ou baixe o código.
3. No terminal, acesse a pasta raiz (`quiz_app`) e instale as dependências executando:
   ```bash
   npm install
   ```
4. Rode o ambiente de desenvolvimento local usando:
   ```bash
   npm run dev
   ```
5. Acesse http://localhost:5173 e aproveite!

## ☁️ Deploy na Vercel

O projeto já está configurado para publicação na Vercel. 
Foi incluído o arquivo `vercel.json` para garantir que o roteamento interno do `react-router-dom` funcione corretamente (evitando erros 404 ao recarregar rotas).

Para fazer o deploy, basta conectar o repositório na [Vercel](https://vercel.com/) e manter as configurações padrão (Framework Preset: **Vite**).

