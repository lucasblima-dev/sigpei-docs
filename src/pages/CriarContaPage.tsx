import React from 'react';

export const CriarContaPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none 
                    prose-h2:mt-12 prose-h2:border-b prose-h2:border-(--border) prose-h2:pb-2 
                    prose-h3:mt-8 
                    prose-a:text-(--primary) hover:prose-a:underline
                    dark:prose-a:text-(--primary)">
    <h1 className='text-(--primary)'>Criar Conta</h1>
    <p className="text-xl text-(--text-primary) my-6!">
      Esta página explica o processo de criação de uma nova conta no sistema
      SiGPEI.
    </p>
    <h2 className="text-(--text-primary)">Quem pode criar uma conta</h2>
    <p className="text-(--text-primary)">
      O sistema SiGPEI permite a criação de contas para diferentes perfis de
      usuários:
    </p>
    <ul className="marker:text-(--primary)">
      <li className="text-(--text-primary)">
        <strong>Coordenadores:</strong> Contas criadas exclusivamente pelo
        administrador do sistema
      </li>
      <li className="text-(--text-primary)">
        <strong className="text-(--text-primary)">Professores:</strong> Contas criadas pelos coordenadores ou
        pelo administrador
      </li>
      <li className="text-(--text-primary)">
        <strong className="text-(--text-primary)">Pais/Responsáveis:</strong> Podem criar suas próprias contas
        através do formulário de registro
      </li>
    </ul>
    <h2 className="text-(--text-primary)">Processo de criação de conta</h2>
    <p className="text-(--text-primary)">
      Para criar uma nova conta como pai/responsável, siga os passos abaixo:
    </p>
    <ol className="marker:text-(--primary)">
      <li className="text-(--text-primary)">Acesse a página inicial do SiGPEI</li>
      <li className="text-(--text-primary)">Clique no botão "Registrar-se"</li>
      <li className="text-(--text-primary)">Preencha o formulário com seus dados pessoais</li>
      <li className="text-(--text-primary)">
        Crie uma senha segura (mínimo de 8 caracteres, incluindo letras,
        números e caracteres especiais)
      </li>
      <li className="text-(--text-primary)">Leia e aceite os termos de uso e política de privacidade</li>
      <li className="text-(--text-primary)">Clique em "Criar Conta"</li>
      <li className="text-(--text-primary)">Verifique seu e-mail para confirmar a criação da conta</li>
    </ol>
    <h2 className="text-(--text-primary)">Após a criação da conta</h2>
    <p className="text-(--text-primary)">
      Após confirmar sua conta através do link enviado por e-mail, você poderá
      acessar o sistema com suas credenciais. Como pai/responsável, você
      poderá vincular-se aos seus dependentes utilizando os códigos de
      vinculação fornecidos pela instituição de ensino.
    </p>
  </div>;
};