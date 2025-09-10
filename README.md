# Peacock Cosmetics - Landing Page

## Sobre o Projeto

Landing page para Peacock Cosmetics, focada na venda do Peacock Lash Serum - um produto para crescimento de cílios com resultados visíveis em 4-6 semanas.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React** - Biblioteca para interface
- **shadcn/ui** - Componentes de UI
- **Tailwind CSS** - Framework de CSS
- **React Router** - Roteamento

## Instalação e Desenvolvimento

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar localmente

```sh
# Clone este repositório
git clone <url-do-repositorio>
cd peacock-cosmetics

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

### Scripts Disponíveis

```sh
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn)
│   ├── Hero.tsx        # Seção principal
│   ├── Problems.tsx    # Problemas que o produto resolve
│   ├── Benefits.tsx    # Benefícios do produto
│   ├── Testimonials.tsx # Depoimentos
│   ├── Pricing.tsx     # Preços e ofertas
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
├── lib/                # Utilitários e configurações
└── assets/             # Imagens e recursos estáticos
```

## Funcionalidades

- **Design Responsivo** - Otimizado para desktop e mobile
- **Performance** - Carregamento rápido com Vite
- **SEO Otimizado** - Meta tags configuradas para compartilhamento social
- **Componentes Reutilizáveis** - Arquitetura modular com shadcn/ui
- **Tipagem TypeScript** - Código mais seguro e manutenível

## Deploy

Para fazer o deploy do projeto:

1. Execute o build de produção:
```sh
npm run build
```

2. Os arquivos otimizados estarão na pasta `dist/`

3. Faça upload dos arquivos para seu servidor web ou plataforma de hospedagem

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e pertence à Peacock Cosmetics.
