# Experiência Prática IV — Desenvolvimento Front-end

Projeto acadêmico fictício de uma ONG, criado para demonstrar práticas profissionais de versionamento, acessibilidade, otimização e deploy.

## Sobre o projeto
A aplicação apresenta o Instituto Conecta Futuro, com seções institucionais, projetos, formulário de voluntariado, modo escuro e componentes acessíveis.

## Tecnologias
- HTML5 semântico
- CSS3, Flexbox, Grid e Media Queries
- JavaScript ES Modules
- Vite
- Git e GitHub
- WCAG 2.1 AA como referência de acessibilidade

## Pré-requisitos
- Node.js 20+
- npm
- Git

## Instalação e execução
```bash
git clone <URL_DO_REPOSITORIO>
cd experiencia-pratica-iv-frontend
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```
Os arquivos otimizados são gerados em `dist/`.

## Testes
```bash
npm test
```
O teste incluído verifica a presença de landmarks e atributos básicos de acessibilidade.

## Acessibilidade
Foram utilizados landmarks (`header`, `nav`, `main`, `footer`), skip link, foco visível, labels associados a campos, `aria-live`, `aria-expanded`, `aria-controls`, `aria-pressed` e modal com título acessível.

## Contraste e modo escuro
O projeto usa variáveis CSS para temas claro e escuro. As combinações principais foram planejadas para atender ao contraste mínimo de 4,5:1 para texto comum. A validação pode ser feita com WebAIM Contrast Checker.

## Versionamento e GitFlow
- `main`: versões estáveis e releases
- `develop`: integração contínua das funcionalidades
- `feature/*`: desenvolvimento isolado de novas funcionalidades
- `hotfix/*`: correções urgentes de produção

As mensagens seguem Conventional Commits, como `feat:`, `fix:`, `docs:` e `style:`. O versionamento segue SemVer (`MAJOR.MINOR.PATCH`).

## CI/CD e deploy
O projeto foi preparado para publicação na Vercel. Em um repositório GitHub, a Vercel pode executar automaticamente `npm install` e `npm run build`, publicando o conteúdo de `dist/` a cada atualização da branch de produção.

## Release atual
`v1.0.0`
