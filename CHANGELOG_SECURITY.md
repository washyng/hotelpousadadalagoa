CHANGELOG — Segurança (alterações aplicadas)

Data: 2025-11-07

Resumo das mudanças:

1) Scripts e handlers
- Movido toggle do menu (inline) para `js/menu.js`.
- Movida lógica do modal para `js/modal.js` (já existia).
- Movida lógica de filtros da página `lazer.html` para `js/lazer-filter.js`.
- Movida lógica do formulário de contato (onclick) para `js/contact.js`.
- Resultado: nenhum `onclick` ou handler inline permanece nas páginas HTML.

2) Estilos inline
- Removido `style="border:0;"` do iframe do Google Maps em `contato.html`.
- Estilo movido para `css/contato.css` (classe `.map-embed`).
- Resultado: nenhum `style="..."` encontrado em arquivos HTML.

3) Cabeçalhos de segurança e CSP
- Arquivo `.htaccess` atualizado para redirecionar HTTP → HTTPS e aplicar cabeçalhos de segurança.
- Criado `.htaccess.final` com HSTS ativado (usar somente quando SSL estiver 100% ativo).
- Meta CSP no `index.html` atualizado; `'unsafe-inline'` removido de `script-src` e `style-src` após migração de scripts/estilos para arquivos externos.

4) Arquivos adicionados/alterados
- Adicionados: `js/menu.js`, `js/lazer-filter.js`, `js/contact.js`, `.htaccess.final`, `CHANGELOG_SECURITY.md` (este arquivo).
- Alterados: `index.html`, `contato.html`, `css/contato.css`, `.htaccess`, `KINGHOST_SECURITY.md`.

5) Testes recomendados
- Validar via:
  - `curl -I https://seu-dominio.com`
  - https://securityheaders.com/
  - https://observatory.mozilla.org/

6) Observações
- HSTS ativa exige que o site esteja servido via HTTPS permanentemente; caso prefira, mantenha a versão comentada até confirmar HTTPS em produção.
- Se precisar, posso gerar SRI para recursos externos e rodar uma varredura adicional por quaisquer artefatos não-HTML (inline CSS em templates, etc.).

---
