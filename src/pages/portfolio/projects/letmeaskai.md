---
layout:  /src/layouts/ProjectLayout.astro
title: 'LetMeAsk AI'
pubDate: 2025-10-01
description: '🤖 Plataforma Q&A com IA - Salas virtuais, transcrição de áudio e respostas automáticas via Google Gemini AI. React + Node.js + PostgreSQL.'
languages: ["react", "next", "ts", "node", "javascript", "vercel", "postgresql", "gemini"]
image:
  url: "/images/projects/letmeaskai.png"
  alt: "Thumbnail do letmeask ai."
---

O **LetMeAsk AI Agent** é uma plataforma inteligente que permite criar salas virtuais onde usuários podem fazer perguntas e obter respostas automáticas geradas por IA. A aplicação utiliza **Google Gemini AI** para transcrever áudios, gerar embeddings e fornecer respostas contextuais baseadas no conteúdo das aulas ou apresentações. Ideal para sessões de Q&A, eventos educacionais, aulas ou qualquer situação que necessite de interação estruturada entre participantes com suporte de IA.

Desenvolvido com **Next.js** utilizando a biblioteca **Shadcn/ui** com **Tailwind**. Tudo isso integrado com a **Gemini API** do Google, e utilizando **Node.js** para as requisições.

## 🧩 Características

- 🏠 Criação de Salas: Crie salas personalizadas com nome e descrição
- ❓ Sistema de Perguntas: Adicione perguntas às salas de forma intuitiva
- 🤖 IA Integrada: Respostas automáticas geradas por Google Gemini AI
- 🎤 Transcrição de Áudio: Upload e transcrição automática de arquivos de áudio
- 🧠 Busca Semântica: Sistema de embeddings para busca contextual
- 📊 Dashboard: Visualize todas as salas com informações relevantes
- 🔄 Atualizações em Tempo Real: Interface reativa com React Query
- 📱 Design Responsivo: Interface moderna e adaptável a diferentes dispositivos

## 💡 Tecnologias utilizadas

### Backend (/server)
- Node.js - Runtime JavaScript
- Fastify - Framework web rápido e eficiente
- TypeScript - Tipagem estática
- Drizzle ORM - ORM moderno para PostgreSQL
- PostgreSQL - Banco de dados relacional com suporte a vetores
- Google Gemini AI - IA para transcrição, embeddings e geração de respostas
- Zod - Validação de schemas
- Docker - Containerização do banco de dados

### Frontend (/web)
- React 19 - Biblioteca para interfaces de usuário
- TypeScript - Tipagem estática
- Vite - Build tool moderna e rápida
- React Query (TanStack Query) - Gerenciamento de estado servidor
- React Hook Form - Gerenciamento de formulários
- React Router DOM - Roteamento
- Tailwind CSS - Framework CSS utilitário
- Radix UI - Componentes acessíveis
- Lucide React - Ícones modernos
- Day.js - Manipulação de datas

## 🌐 Demo

👉 [Ver demo](https://github.com/peterpaulodev/letmeask-ai-agent)

## 🎯 Objetivo

Uma aplicação fullstack moderna para criação e gerenciamento de salas de perguntas e respostas com inteligência artificial integrada, desenvolvida com as mais recentes tecnologias web.


🚀 *Desenvolvido por Peter.*
