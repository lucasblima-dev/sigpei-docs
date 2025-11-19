import React from 'react';

export const RecuperarSenhaPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none 
                    prose-h2:mt-12 prose-h2:border-b prose-h2:border-(--border) prose-h2:pb-2 
                    prose-h3:mt-8 
                    prose-a:text-(--primary) hover:prose-a:underline
                    dark:prose-a:text-(--primary)">
    <h1 className='text-(--primary)'>Recuperar Senha</h1>
    <p className='text-xl text-(--text-primary) my6!'>
      Esta página explica como recuperar o acesso à sua conta caso tenha
      esquecido sua senha.
    </p>
    <h2 className='text-(--text-primary)'>Processo de recuperação de senha</h2>
    <p className='text-(--text-primary)'>
      O SIGPEI oferece um processo seguro para recuperação de senha. Siga os
      passos abaixo:
    </p>
    <ol className="marker:text-(--primary)">
      <li className="text-(--text-primary)">Na tela de login, clique na opção "Esqueci minha senha"</li>
      <li className="text-(--text-primary)">Digite o e-mail associado à sua conta</li>
      <li className="text-(--text-primary)">Clique em "Enviar link de recuperação"</li>
      <li className="text-(--text-primary)">
        Verifique sua caixa de entrada (e a pasta de spam, se necessário)
      </li>
      <li className="text-(--text-primary)">Clique no link recebido por e-mail</li>
      <li className="text-(--text-primary)">Defina uma nova senha</li>
    </ol>
    <h2 className="text-(--text-primary)">Prazo de validade do link</h2>
    <p className="text-(--text-primary)">
      O link de recuperação de senha enviado por e-mail tem validade de 24
      horas. Após esse período, será necessário solicitar um novo link.
    </p>
    <h2 className='text-(--text-primary)'>Dicas para criar uma senha segura</h2>
    <p className='text-(--text-primary)'>Ao criar uma nova senha, recomendamos:</p>
    <ul className="marker:text-(--primary)">
      <li className="text-(--text-primary)">Use no mínimo 8 caracteres</li>
      <li className="text-(--text-primary)">Combine letras maiúsculas e minúsculas</li>
      <li className="text-(--text-primary)">Inclua números e caracteres especiais (@, #, $, %, etc.)</li>
      <li className="text-(--text-primary)">
        Evite informações pessoais óbvias (data de nascimento, nome, etc.)
      </li>
      <li className="text-(--text-primary)">Não reutilize senhas de outros serviços</li>
    </ul>
    <h2 className="text-(--text-primary)">Problemas na recuperação</h2>
    <p className="text-(--text-primary)">
      Se você não receber o e-mail de recuperação ou enfrentar outros
      problemas durante o processo, entre em contato com o suporte técnico
      através do e-mail suporte@sigpei.example.com.
    </p>
  </div>;
};