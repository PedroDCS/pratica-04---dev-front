# Produção e deploy

## Build
`npm run build`

O Vite gera a pasta `dist` com JavaScript e CSS minificados. As imagens utilizam dimensões responsivas e o projeto prioriza formatos leves; o SVG da página inicial é vetorial e não perde qualidade em diferentes resoluções.

## Deploy na Vercel
1. Conectar a conta à hospedagem Git do projeto.
2. Importar o repositório.
3. Definir `npm run build` como comando de build.
4. Definir `dist` como diretório de saída.
5. Definir `main` como branch de produção.
6. A cada push/merge em `main`, uma nova build pode ser publicada automaticamente.
