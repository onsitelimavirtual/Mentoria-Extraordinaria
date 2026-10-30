// CONFIGURAÇÃO PÚBLICA: estes dados podem aparecer no navegador.
// NÃO INSIRA service_role, segredos de webhook ou credenciais Google neste arquivo.
window.MENTORIA_CONFIG = {
  supabaseUrl: 'https://piagfpnjiwpngbikkkfp.supabase.co',     // Ex.: https://SEU-PROJETO.supabase.co
  publishableKey: 'sb_publishable_G7GV4Yox1KkbjZtjnYxFAQ_kzo9V05a',  // Supabase publishable key (sb_publishable_...), não secret key!
  // Licença única da Mentoria Extraordinária: 6 meses (180 dias).
  // O preço é exibido pela Kiwify; não presumir valor aqui.
  plans: [
    { code: '180d', label: 'Licença única • 6 meses', price: 'Preço na Kiwify', description: 'Acesso individual por 180 dias após confirmação do pagamento. Entre com o mesmo e-mail usado na compra.', checkoutUrl: 'https://kiwify.app/tmjQxMy' }
  ]
};
