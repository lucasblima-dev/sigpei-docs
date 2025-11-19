import React from 'react';

export const IndexPage: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none 
                    prose-h2:mt-12 prose-h2:border-b prose-h2:border-(--border) prose-h2:pb-2 
                    prose-h3:mt-8 
                    prose-a:text-(--primary) hover:prose-a:underline
                    dark:prose-a:text-(--primary)">
      <h1 className='text-(--primary)'>Bem-vindo ao SiGPEI-DOCS</h1>

      <p className="text-xl text-(--text-primary) my-6!">
        Esta é a documentação oficial do Sistema de Gestão do Plano
        Educacional Individualizado (SiGPEI).
      </p>

      <p className="text-(--text-primary)">
        Aqui você encontrará informações detalhadas sobre como utilizar todas as
        funcionalidades do sistema, desde o cadastro inicial até as operações
        mais avançadas disponíveis para cada perfil de usuário.
      </p>

      <h2 className="text-(--text-primary)">História do SiGPEI</h2>

      <h3 className="text-(--text-primary)">Motivação</h3>

      <p className="text-(--text-primary)">
        O SiGPEI (Sistema de Gestão do Plano Educacional Individualizado) surgiu
        da necessidade de oferecer suporte aos professores e educadores de escolas públicas
        e privadas na criação, monitoramento e avaliação do Plano Educacional Individualizado (PEI).
        A elaboração desse documento, apesar de ser essencial, apresenta diversos desafios, como falta de tempo,
        necessidade de personalização constante e falta de ferramentas tecnológicas apropriadas para auxiliar na
        sistematização do trabalho do professor.
      </p>

      <h3 className="text-(--text-primary)">Contexto da Criação</h3>

      <p className="text-(--text-primary)">
        O projeto teve início em 2023, no âmbito do projeto TECincluir, uma iniciativa de caráter interinstitucional
        financiada pela Financiadora de Estudos e Projetos (FINEP) e coordenada pela Universidade Federal Rural do Rio de Janeiro (UFRRJ),
        em colaboração com instituições como a Universidade do Estado do Rio Grande do Norte (UERN), a
        Universidade Federal do Rio Grande do Norte (UFRN) e o Instituto Nacional de Tecnologia (INT). Nesse cenário,
        houve a colaboração entre laboratórios e centros de pesquisa dedicados à criação de soluções tecnológicas para a educação inclusiva.
      </p>

      <figure className='not-prose flex flex-col items-center justify-center'>
        <img src="/reuniao-sigpei.png" alt="Primeira reunião do projeto SigPEI em 2023" className='max-w-full h-auto rounded-md border border-[var(--border)]' />
        <figcaption className='text-center mt-2 text-sm text-(--text-secondary)'>Primeira reunião do projeto - 2023</figcaption>
      </figure>

      <h3 className="text-(--text-primary)">O que é o PEI?</h3>
      <blockquote>
        <p className="text-(--text-secondary)">
          O Plano Educacional Individualizado (PEI) é um instrumento pedagógico central no planejamento e acompanhamento de estudantes com
          necessidades educacionais específicas. Trata-se de um documento que orienta práticas pedagógicas, estabelece objetivos de
          aprendizagem personalizados e busca garantir a equidade no acesso à educação.
        </p>
      </blockquote>

      <h3 className="text-(--text-primary)">Objetivo</h3>

      <p className="text-(--text-primary)">
        O SigPEI tem como finalidade possibilitar a digitalização, organização e acompanhamento sistemático do PEI, disponibilizando
        uma ferramenta que contribua para maior eficiência no processo de elaboração e monitoramento dos planos individualizados.
        Além disso, otimizar fluxos de trabalho, o sistema busca promover a integração entre inovação tecnológica, acessibilidade e
        práticas pedagógicas inclusivas. O projeto prioriza a criação de uma ferramenta de caráter inclusivo, prática e socialmente
        relevante, capaz de apoiar efetivamente docentes e gestores no desenvolvimento de estratégias pedagógicas que atendam às
        necessidades de cada estudante.
      </p>

      <h3 className="text-(--text-primary)">Fechamento</h3>

      <p className="text-(--text-primary)">
        Dessa forma, o SiGPEI configura-se como uma iniciativa estratégica para fortalecer a educação inclusiva, articulando inovação
        tecnológica e práticas pedagógicas, cujos aspectos serão detalhados ao longo desta documentação.
      </p>

      <h2 className="text-(--text-primary)">Como usar esta documentação</h2>

      <p className="text-(--text-primary)">
        A documentação está organizada por perfis de acesso, facilitando a
        navegação conforme seu papel no sistema. Utilize o menu lateral para
        navegar entre as diferentes seções e encontrar as informações
        específicas para suas necessidades.
      </p>

      <div className="not-prose my-6 p-4 rounded-lg border border-[rgba(var(--primary-rgb),0.3)] bg-[rgba(var(--primary-rgb),0.1)]">
        <p className="text-sm font-medium text-(--primary)">
          Precisa de ajuda?
        </p>
        <p className="text-sm text-(--text-primary) mt-1">
          Caso tenha dúvidas ou sugestões sobre a documentação, entre em contato
          com a equipe de suporte através do e-mail: {' '}
          <a href="mailto:suporte@sigpei.example.com" className="font-medium text-(--primary) hover:underline">
            suporte@sigpei.uern.br
          </a>
        </p>
      </div>
    </div>
  );
}