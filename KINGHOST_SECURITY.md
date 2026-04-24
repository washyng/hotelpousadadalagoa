Guia rápido para aplicar cabeçalhos de segurança no KingHost

Passos recomendados (ordem):

1) Ative HTTPS/SSL no painel KingHost
   - No painel do KingHost, ativar o certificado SSL (Let's Encrypt ou certificado pago).
   - Aguarde a emissão/propagação e verifique `https://seu-dominio` funcionando.

2) Suba o arquivo `.htaccess` para a pasta pública (geralmente `public_html` ou a raiz do site)
   - Use FTP/SFTP ou o gerenciador de arquivos do KingHost.
   - Arquivo já incluído neste repositório: `.htaccess`.

3) Habilitar HSTS com cuidado
   - No `.htaccess` há uma linha de HSTS comentada. Somente descomente essa linha após confirmar que o site funciona corretamente via HTTPS.
   - HSTS força os navegadores a usarem HTTPS e pode causar problemas se o certificado expirar.

4) Testar os headers
   - No terminal (ou online) rode:

```bash
curl -I https://seu-dominio.com
```

   - Você deve ver cabeçalhos como `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`, etc.

5) Ajustar CSP se necessário
   - O `Content-Security-Policy` adicionado é permissivo (contém 'unsafe-inline') para evitar quebrar o site imediatamente.
   Guia rápido para aplicar cabeçalhos de segurança no KingHost

   Passos recomendados (ordem):

   1) Ative HTTPS/SSL no painel KingHost
      - No painel do KingHost, ativar o certificado SSL (Let's Encrypt ou certificado pago).
      - Aguarde a emissão/propagação e verifique `https://seu-dominio` funcionando.

   2) Suba o arquivo `.htaccess` para a pasta pública (geralmente `public_html` ou a raiz do site)
      - Use FTP/SFTP ou o gerenciador de arquivos do KingHost.
      - Arquivo já incluído neste repositório: `.htaccess`. Também existe uma versão final com HSTS pronta: `.htaccess.final`.

   3) Habilitar HSTS com cuidado
      - O arquivo `.htaccess.final` inclui a diretiva HSTS ativa. APENAS use-o se o seu certificado SSL estiver válido e o site estiver 100% funcionando via HTTPS.
      - HSTS força os navegadores a usarem HTTPS e pode causar problemas se o certificado expirar.

   4) Testar os headers
      - No terminal (ou online) rode:

   ```bash
   curl -I https://seu-dominio.com
   ```

      - Você deve ver cabeçalhos como `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`, `Strict-Transport-Security` (se HSTS estiver ativado), etc.

   5) Ajustar CSP se necessário (endurecimento já aplicado)
      - Movemos scripts inline para arquivos externos: `js/menu.js`, `js/modal.js`, `js/lazer-filter.js`, `js/contact.js`.
      - Também removemos o `style="..."` inline na página de contato e os estilos foram movidos para `css/contato.css`.
      - O CSP foi endurecido para remover `'unsafe-inline'` de `script-src` e `style-src` no `.htaccess` e na meta tag do `index.html`.
      - Para endurecer ainda mais (opcional): usar `nonce-` ou `hash` para pequenos trechos inline, e adicionar SRI para recursos externos.

   6) Testes e ferramentas
      - https://securityheaders.com/ — verifica quais headers estão presentes e dá nota
      - https://observatory.mozilla.org/ — análise mais completa
      - Chrome DevTools > Network > Response headers (para checar)

   Observações KingHost
   - KingHost usa Apache (suporte a `.htaccess`). `mod_rewrite` e `mod_headers` geralmente estão habilitados em contas compartilhadas, mas, se algum cabeçalho não estiver sendo aplicado, abra um chamado com o suporte KingHost pedindo ativação de `mod_headers`.

   Ações que executei aqui no repositório
   - Removi scripts inline e movi lógica para arquivos JS externos.
   - Removi estilos inline (ex.: iframe do mapa) e movi para `css/contato.css`.
   - Atualizei meta CSP em `index.html` e atualizei `.htaccess` (retirei 'unsafe-inline' e ativei HSTS na versão final `.htaccess.final`).

   Próximos passos que eu posso executar para você
   - Fazer uma checagem completa adicional por quaisquer atributos inline (`style="..."`) ou atributos de evento (`onclick`, `onload`, etc.) em outras páginas e removê-los se existir algum.
   - Gerar SRI para recursos externos (se necessário).

   Se quiser que eu proceda com a checagem automática e aplique quaisquer correções restantes, responda com "Pode prosseguir" que eu faço a varredura completa e corrijo o que encontrar.

