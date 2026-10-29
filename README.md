# 💈 FSW Barber

Aplicação web de **agendamento em barbearias** construída com Next.js, Prisma e PostgreSQL. Projeto de estudo desenvolvido durante a Full Stack Week.

> 🚧 **Status:** em desenvolvimento. O modelo de dados e a carga inicial estão prontos; a interface inicial ainda usa conteúdo estático.

## ✅ Progresso

- [x] Configuração do banco de dados
- [x] Seed do banco de dados
- [x] Introdução ao Next.js
- [x] Tailwind CSS e shadcn/ui
- [x] Git hooks (Husky, lint-staged e validação de mensagens de commit)
- [ ] Autenticação
- [ ] Listagem de barbearias e serviços com dados reais
- [ ] Fluxo de agendamento

## 🗄️ Modelo de dados

- **Autenticação:** `User`, `Account`, `Session`, `VerificationToken`
- **Domínio:** `Barbershop` → `BarbershopService` → `Booking` (vinculado a `User`)

O esquema completo está em [`prisma/schema.prisma`](prisma/schema.prisma).

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) (App Router) e React 19
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) e [shadcn/ui](https://ui.shadcn.com/)
- [Prisma ORM](https://www.prisma.io/) com PostgreSQL
- ESLint, Prettier, Husky e lint-staged

## 📋 Pré-requisitos

- Node.js 20 ou superior
- Uma instância de PostgreSQL acessível

## 🚀 Como executar

```bash
git clone https://github.com/pedrobernardone/fsw-barber_fullstack_week.git
cd fsw-barber_fullstack_week
npm install
```

Crie um arquivo `.env` na raiz com a conexão do banco:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
```

Aplique as migrações, popule o banco e inicie o servidor:

```bash
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Verificação com ESLint |

## 🔒 Segurança

Nunca versione o arquivo `.env`. Ele contém credenciais e deve estar listado no `.gitignore`.

