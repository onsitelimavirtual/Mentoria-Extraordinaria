# Mentoria Extraordinária V3.4.3 — Licença única de 6 meses

© 2026 Nailson Rodrigues de Lima.

## Configuração aplicada
- Um único plano: **180 dias (aproximadamente seis meses)**.
- Link público do produto: https://kiwify.app/tmjQxMy
- Preço: consultado no ambiente da Kiwify; não foi informado e não é presumido.
- Mantém configuração pública do Supabase Painel-Lima-Virtual e a logomarca Base64 integrada.
- Exibe somente um cartão de licenciamento, com botão para a Kiwify.

## Atenção — não liberar vendas automaticamente ainda
- O link curto do produto **não fornece com segurança** o `product_id` nem `store_id` internos necessários ao backend.
- A função `mentoria-kiwify-webhook` permanece bloqueada para conceder licenças até validar os IDs.
- O conteúdo privado continua aguardando publicação no bucket privado `mentoria-premium`.
- Login Google exige configurar Google OAuth em Supabase Authentication e URL de redirecionamento do domínio GitHub Pages.

## Como publicar
1. No repositório GitHub `onsitelimavirtual/Mentoria-Extraordinaria`, localize o branch usado em Settings → Pages.
2. Publique **o conteúdo extraído** do ZIP na raiz publicada, substituindo index.html e config.js.
3. Acesse https://onsitelimavirtual.github.io/Mentoria-Extraordinaria/ via HTTPS. Não use `content://` no Android para testar o login.
4. Na Kiwify, o webhook deve permanecer com a URL da função Supabase já criada, **não** a URL do GitHub Pages.
5. Forneça `product_id` e `store_id` reais do produto; somente então ative a validação de licenças e teste uma compra.

## QA
- Plano único no HTML e no config.js: conferido.
- Link: verificado como HTTPS e inserido integralmente, sem inferir ID interno.
- As duas imagens Base64 previamente incorporadas ao HTML foram preservadas.
- JavaScript: verificação estática realizada; login Google e compra Kiwify não foram testados em produção.
