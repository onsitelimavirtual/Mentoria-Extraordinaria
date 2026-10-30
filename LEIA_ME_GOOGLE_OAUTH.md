# Mentoria Extraordinária V3.4.5 — Correção do login Google

## Motivo
O Supabase de múltiplos aplicativos estava autenticando Google, mas o retorno da Mentoria não chegava à rota correta. O código agora solicita a URL absoluta de retorno da Mentoria, usa PKCE, trata retorno/erros e separa a confirmação do login da verificação da licença.

## CONFIGURAÇÃO OBRIGATÓRIA NO SUPABASE (SEM ALTERAR OUTROS APLICATIVOS)
1. Supabase -> projeto **Painel-Lima-Virtual** (`piagfpnjiwpngbikkkfp`).
2. Authentication -> URL Configuration -> **Redirect URLs** -> Add URL.
3. Adicionar exatamente `https://onsitelimavirtual.github.io/Mentoria-Extraordinaria/` (incluindo barra final).
4. Salvar. **Não sobrescreva o Site URL existente**, que pode ser usado por outros sistemas; adicione a URL da Mentoria à lista.
5. Verificar Authentication -> Providers -> Google (o provedor já autentica conforme logs). A configuração autorizada do Google Cloud para Supabase continua sendo `https://piagfpnjiwpngbikkkfp.supabase.co/auth/v1/callback`.

## Publicação
Substituir `index.html` na raiz do branch/pasta publicado em https://github.com/onsitelimavirtual/Mentoria-Extraordinaria . Outros arquivos podem permanecer iguais, mas ZIP inclui todos os necessários. GitHub Pages: Settings -> Pages, conferir branch e raiz.

## Verificação
1. Abrir `https://onsitelimavirtual.github.io/Mentoria-Extraordinaria/` em navegador normal (não `content://`).
2. Tocar **Entrar com Google** e escolher a conta.
3. Conferir se retorna à própria Mentoria e mostra e-mail conectado.
4. Se aparecer **Nenhuma licença ativa**, isso significa que o LOGIN funcionou; a ativação de licenças Kiwify é outro fluxo e ainda não está homologada.
5. Se retornar a outro app, verificar Redirect URLs e Site URL no Supabase; não editar a configuração de Google Cloud a menos que o callback do provedor esteja errado.

## Segurança / limites
O checkout Kiwify https://pay.kiwify.com.br/Uf7VpEn abre sem login. Não publicamos chave secreta no front-end. O pagamento não libera automaticamente licença até a homologação do webhook. Não houve modificação remota do Supabase Auth nem publicação direta no GitHub.

© 2026 Nailson Rodrigues de Lima.
