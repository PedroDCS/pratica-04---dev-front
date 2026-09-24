# Fluxo GitFlow adotado

- `main`: mantém versões estáveis e marcadas com tags de release.
- `develop`: concentra as integrações antes da publicação.
- `feature/responsividade`: ajustes de layout responsivo.
- `feature/acessibilidade`: melhorias relacionadas à WCAG 2.1.
- `feature/documentacao`: README e documentação do fluxo.
- `feature/producao`: otimização de build e configuração de deploy.

As features são mescladas em `develop` com merge commit. A release é preparada a partir de `develop` e, após validação, integrada à `main`.
