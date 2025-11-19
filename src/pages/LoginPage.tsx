import React from 'react';

export const LoginPage: React.FC = () => {
  return <div className="prose dark:prose-invert max-w-none 
                    prose-h2:mt-12 prose-h2:border-b prose-h2:border-(--border) prose-h2:pb-2 
                    prose-h3:mt-8 
                    prose-a:text-(--primary) hover:prose-a:underline
                    dark:prose-a:text-(--primary)">
    <h1 className='text-(--primary)'>Login no Sistema</h1>
    <p className='text-xl text-(--text-primary) my-6!'>
      Esta página contém informações sobre como realizar o login no sistema
      SiGPEI.
    </p>
    <h2 className='text-(--text-primary)'>Acessando a tela de login</h2>
    <p className="text-(--text-primary)">
      Para acessar o sistema, visite o endereço{' '}
      <a className="font-medium text-(--primary) hover:underline">https://sigpei.apps.uern.br</a>. A imagem abaixo mostra a tela que você irá visualizar:
    </p>
    <figure className='not-prose flex flex-col items-center justify-center'>
      <img src="/tela-login.png" alt="Tela de Login do SiGPEI" className='max-w-full h-auto rounded-md border border-[var(--border)]' />
      <figcaption className='text-center mt-2 text-sm text-(--text-secondary)'>Tela de Login do SiGPEI</figcaption>
    </figure>
    <p className="text-(--text-primary)">
      Insira as informações de "Usuário" e "Senha" e em seguida clique no botão "Entrar".
    </p>
    <h2 className="text-(--text-primary)">Credenciais de acesso</h2>
    <p className="text-(--text-primary)">Você precisará dos seguintes dados para realizar o login:</p>
    <ul className="marker:text-(--primary)">
      <li className="text-(--text-primary)">
        <strong className="text-(--text-primary)">E-mail:</strong> O endereço de e-mail cadastrado no sistema
      </li>
      <li className="text-(--text-primary)">
        <strong className="text-(--text-primary)">Senha:</strong> A senha criada durante o cadastro ou fornecida
        pelo administrador
      </li>
    </ul>
    <h2 className="text-(--text-primary)">Problemas comuns</h2>
    <p className="text-(--text-primary)">
      Se você estiver enfrentando dificuldades para acessar sua conta,
      verifique:
    </p>
    <ul className="marker:text-(--primary)">
      <li className="text-(--text-primary)">Se o e-mail está digitado corretamente</li>
      <li className="text-(--text-primary)">
        Se a senha está correta (atente-se às letras maiúsculas e minúsculas)
      </li>
      <li className="text-(--text-primary)">Se o Caps Lock está ativado</li>
    </ul>
    <p className="text-(--text-primary)">
      Caso ainda não consiga acessar, utilize a opção <strong className="text-(--text-primary)">"Esqueceu sua senha?"</strong> na
      tela de login para redefinir sua senha.
    </p>
  </div>;
};