import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const required = ['<header', '<nav', '<main', '<footer', 'aria-label', 'role="status"', '<label'];
const missing = required.filter((item) => !html.includes(item));
if (missing.length) {
  console.error('Falha: elementos de acessibilidade ausentes:', missing.join(', '));
  process.exit(1);
}
console.log('OK: estrutura semântica e atributos básicos de acessibilidade encontrados.');
