import * as Knex from "knex";
import { v4 as uuid } from "uuid";

const fieldOne = [
  {
    id: uuid(),
    atividade:
      "1.1  Ministrante de aulas em curso de graduação e em curso de pós-graduação stricto sensu (presenciais e EAD)",
    label: "01/15h de aula",
    peso: 15,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "1.2  Atividade de preceptoria/supervisão em curso de especialização (residência médica e multiprofissional)",
    label: "02/15h de atividade",
    peso: 15,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.3 Supervisão de Pós-Doutorado concluída",
    label: "02/estudante",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.4 Orientação de Tese de Doutorado defendida",
    label: "05/estudante",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "1.5 Orientação de Dissertação de Mestrado defendida",
    label: "04/estudante",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "1.6 Coorientação de Tese de Doutorado defendida",
    label: "03/estudante",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "1.7 Coorientação de Dissertação de Mestrado defendida",
    label: "02/estudante",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.8 Orientação de Trabalho de Conclusão de Curso de Especialização concluída",
    label: "02/estudante",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.9 Orientação de Trabalho de Conclusão de Curso de Graduação",
    label: "02/estudante",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.10 Orientação de TCC em andamento (por estudante)",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.11 Orientação de Tese em andamento (por estudante)",
    label: "03/semestre",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "1.12 Orientação de Dissertação de Mestrado em andamento (por estudante)",
    label: "02/semestre",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.13 Coorientação de Mestrado em andamento (por estudante)",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.14 Coorientação de Doutorado em andamento (por estudante)",
    label: "1,5/semestre",
    peso: 1,
    pontos: 1.5,
  },
  {
    id: uuid(),
    atividade:
      "1.15 Coordenação de programas institucionais (PET, PIBID, PROFICI, PIBIT e similares), por programa, mediante relatório atualizado",
    label: "03/semestre",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "1.16 Orientação em programas implantados na UFBA, aprovada pelo órgão de lotação do docente (Permanecer, PIBIC, PIBID, PIBITI, PIBIEX, ACCS, PET, Monitoria e similares), por estudante",
    label: "02/semestre",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "1.17 Supervisão de atividades práticas e estágios curriculares, obrigatórios e não obrigatórios (aluno da UFBA ou de outra instituição de ensino), por estudante",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "1.18 Orientação acadêmica, oficializada de acordo com o Colegiado do Curso, por cada grupo de 10 estudantes",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.19 Coordenação de disciplina, com relatórios homologados pelo órgão de lotação do docente",
    label: "02/semestre",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.20 Membro de Banca Examinadora de Livre Docência ou Tese do Doutorado",
    label: "04/Banca",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade:
      "1.21 Membro de Banca de Concurso Público para Professor da Carreira do Magistério\nSuperior (professor efetivo)",
    label: "04/Banca",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "1.22 Membro de Banca Examinadora de Dissertação de Mestrado",
    label: "03/Banca",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "1.23 Membro de Banca Examinadora de Trabalhos de Conclusão de Curso de\nEspecialização",
    label: "01/Banca",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.24 Membro de Banca Examinadora de Trabalhos de Conclusão de Curso de\nGraduação",
    label: "01/Banca",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.25 Membro de Banca de Seleção de Professor por tempo determinado",
    label: "01/Banca",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.26 Membro de Banca de Qualificação em cursos de pós-graduação",
    label: "01/Banca",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "1.27 Membro de Banca de Seleção para pós-graduação",
    label: "02/Banca",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "1.28 Membro de Banca de Seleção para bolsas institucionais",
    label: "01/Banca",
    peso: 1,
    pontos: 1,
  },
];

const fieldTwo = [
  {
    id: uuid(),
    atividade: "2.1 Coordenação de projeto de pesquisa registrado na UFBA (por projeto, mediante relatório atualizado)",
    label: "03/semestre",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "2.2 Membro de grupo/projeto de pesquisa registrado na UFBA",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "2.3 Elaboração de projetos de pesquisa aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "2.4 Elaboração de Relatórios de Pesquisa aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "04/atividade",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "2.5 Liderança de grupo de pesquisa da UFBA, conforme legislação desta (Resolução nº 02/2016 do CAPEX).",
    label: "05/grupo",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade:
      "2.6 Participação como conferencista ou palestrante em congressos, seminários, colóquios e outros eventos característicos da área de atuação do docente",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.7 Ministrante de cursos (CH <8 h) em eventos acadêmicos",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "2.8 Participação em eventos (congressos, simpósios, seminários, encontros etc.) na(s)\nárea(s) de atuação do docente",
    label: "01/atividade",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "2.9 Artigo de pesquisa publicado em revista indexada, nacional ou internacional, na(s)\nárea(s) de atuação do docente (impresso ou meio digital)",
    label: "15/publicação",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade:
      "2.10 Autoria de livro publicado (com ISBN), na(s) área(s) de atuação do docente, aprovado  por Conselho Editorial, impresso ou meio digital",
    label: "25/publicação",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade:
      "2.11 Autoria de álbuns artísticos (CD, DVD ou formas equivalentes) especializado na área de atuação do docente",
    label: "25/publicação",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade:
      "2.12 Autoria  de capítulo de livro publicado (com ISBN), na área de atuação do docente, aprovado por Conselho Editorial, impresso ou meio digital",
    label: "10/capítulo",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.13 Participação em álbuns artísticos na área de atuação do docente",
    label: "10/participação",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.14 Autoria de prefácio de livro, CD, DVD e mídias equivalentes",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.15 Tradução de livro publicado (impresso ou meio digital)",
    label: "10/publicação",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.16 Tradução de capítulo de livro publicado (impresso ou meio digital)",
    label: "05/publicação",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "2.17 Tradução publicada de artigo (impresso ou meio digital)",
    label: "03/publicação",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "2.18 Publicação de trabalhos completos, de comunicação impressa ou meio digital, em  anais  de  congressos,  simpósios  e  similares,  suplementos  de  periódicos  ou cadernos especiais de jornais, na área de atuação do docente",
    label: "03/publicação",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "2.19 Resenha ou nota crítica publicada em revista indexada (impresso ou meio digital)",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.20 Artigo publicado em jornal ou revista não indexada (impresso ou meio digital)",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.21 Produção e publicação de material didático e hipertextos",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.22 Produção de manual técnico",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.23 Nota científica prévia",
    label: "01/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "2.24 Texto escrito para catálogo de exposições publicado por instituição pública ou privada (museus e galerias)",
    label: "02/publicação",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "2.25 Autoria de peça teatral, musical ou coreografia, roteiro de cinema, vídeo, rádio ou televisão, monumentos artísticos",
    label: "25/peça",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade: "2.26 Direção de peças teatrais apresentadas, cinema ou vídeo",
    label: "15/peça",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "2.27 Partitura editada",
    label: "20/publicação",
    peso: 1,
    pontos: 20,
  },
  {
    id: uuid(),
    atividade: "2.28 Coordenador de documentos cartográficos  e  mapas geológicos publicados",
    label: "25/documento",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade: "2.29 Coautor de documentos cartográficos e mapas geológicos publicados",
    label: "10/documento",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.30 Edição de rádio, cinema, vídeo ou televisão vinculada à atividade desenvolvida na\nUFBA",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.31 Fotografia publicada",
    label: "2/foto",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "2.32 Patente examinada e concedida pelo INPI ou equivalente internacional",
    label: "25/patente",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade: "2.33 Desenho Industrial  examinado e concedido pelo INPI ou equivalente internacional",
    label: "25/desenho industrial",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade: "2.34 Pedido de patente protocolado pela UFBA ou outra instituição no INPI ou equivalente internacional",
    label: "10/pedido",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade:
      "2.35 Pedido de Desenho Industrial protocolado pela UFBA ou outra instituição no\nINPI ou equivalente internacional",
    label: "10/pedido",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "2.36 Registro ou certificado de proteção de cultivar concedido pelo INPI ou equivalente internacional",
    label: "25/registro ou certificado",
    peso: 1,
    pontos: 25,
  },
  {
    id: uuid(),
    atividade:
      "2.37 Registro ou certificado de proteção de cultivar protocolado pela UFBA ou outra instituição no INPI ou equivalente internacional",
    label: "10/registro ou certificado",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade:
      "2.38 Registro de marcas protocolados pela UFBA ou outra instituição no INPI ou equivalente internacional",
    label: "10/registro",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade:
      "2.39 Registro de softwares protocolados pela UFBA ou outra instituição no INPI ou equivalente internacional",
    label: "05/registro",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "2.40 Registro de software livre",
    label: "05/registro",
    peso: 1,
    pontos: 5,
  },
];

const fieldThree = [
  {
    id: uuid(),
    atividade:
      "3.1 Elaboração de projetos de extensão de caráter permanente ou temporário, com aprovação no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "3.2 Coordenação de programas/projetos de extensão registrados, com aprovação no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem (por projeto, mediante relatório atualizado)",
    label: "03/semestre",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "3.3 Relatório de programas/projetos de extensão registrado e aprovado no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "04/atividade",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade:
      "3.4 Participação em programas/projetos de extensão registrados, com aprovação no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem (por projeto, mediante relatório atualizado)",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "3.5 Coordenação geral de congresso",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade:
      "3.6 Coordenação de eventos (cursos de extensão CH < 8 h, jornadas, seminários, exposições, recitais e similares), registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "03/atividade",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "3.7 Membro de Comissão organizadora de congressos e outros eventos (cursos, jornadas, seminários, exposições, recitais e similares), registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "3.8 Coordenação de cursos (oficina, workshop, laboratório e treinamento, de caráter teórico e/ou prático, planejados e organizados de modo sistemático, com carga horária definida e processo de avaliação formal, além da frequência), com CH mínima 8 h e máxima até 180 h, registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade:
      "3.9 Coordenação de cursos de atualização registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade:
      "3.10 Coordenação de cursos de aperfeiçoamento e especialização registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "15/atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade:
      "3.11 Ministrante de cursos (oficina, workshop, laboratório e treinamento, de caráter teórico e/ou prático, planejados e organizados de modo sistemático, com carga horária definida e processo de avaliação formal, além da frequência), com CH mínima 8 h e máxima até 180 h, registrados e aprovados no órgão de lotação do docente ou nas Unidades Universitárias em que se realizem",
    label: "01/15h de atividade",
    peso: 15,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "3.12   Prestação   de   serviços   (consultorias,   assessorias,   cooperação   técnica   e institucional, assistência jurídica, assistência hospitalar e ambulatorial, perícias, laudos técnicos etc.), desde que aprovados pela instância de lotação do docente",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "3.12   Prestação   de   serviços   (consultorias,   assessorias,   cooperação   técnica   e institucional, assistência jurídica, assistência hospitalar e ambulatorial, perícias, laudos técnicos etc.), desde que aprovados pela instância de lotação do docente3.12   Prestação   de   serviços   (consultorias,   assessorias,   cooperação   técnica   e institucional, assistência jurídica, assistência hospitalar e ambulatorial, perícias, laudos técnicos etc.), desde que aprovados pela instância de lotação do docente",
    label: "02/15h de atividade",
    peso: 15,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "3.14   Coordenação   de   ambientes   de   inovação   (aceleradoras,   pré-incubadoras, incubadora de empresas, parques tecnológicos), com relatório semestral aprovado pela COMPITEC",
    label: "01/mês",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "3.15 Membro da equipe do Sistema Local de Inovação da UFBA, com apresentação de relatório semestral aprovado pela COMPITEC",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
];

const fieldFour = [
  {
    id: uuid(),
    atividade: "4.1 Obras, publicações e outros produtos acadêmicos premiados, na área de atuação do docente",
    label: "05/registro",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "4.2 Obras, publicações e outros produtos acadêmicos premiados, fora da área de atuação do docente",
    label: "03/registro",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "4.3 Comendas e premiações públicas de outra natureza",
    label: "02/registro",
    peso: 1,
    pontos: 2,
  },
];

const fieldFive = [
  {
    id: uuid(),
    atividade:
      "5.1 Editor ou organizador de livro publicado (com ISBN), impresso ou meio digital, com circulação internacional",
    label: "15/trabalho",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade:
      "5.2 Editor ou organizador de livro publicado (com ISBN) (impresso ou meio digital, com circulação nacional)",
    label: "10/trabalho",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "5.3. Editor Chefe de Revista",
    label: "15/trabalho",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "5.4. Editor Associado de Revista",
    label: "10/trabalho",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "5.5 Membro de corpo editorial",
    label: "04/semestre",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "5.6 Revisor/parecerista de revista científica, de material didático, capítulo de livro",
    label: "04/trabalho",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "5.7 Revisor de livros",
    label: "10/trabalho",
    peso: 1,
    pontos: 10,
  },
];

const fieldSix = [
  {
    id: uuid(),
    atividade:
      "6.1 O exercício dos cargos de Reitor, Vice-Reitor, Pró-Reitor, Chefe de Gabinete do Reitor, Superintendente e Diretor de Unidade Universitária corresponderá a uma pontuação no interstício, total ou proporcional ao tempo de efetivo exercício, considerando-se 02 anos como o total de pontos necessários à progressão ou 1/24 (um vinte e quatro avos) deste total por mês no exercício do cargo.",
    label: "1 / 24",
    peso: 24,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.2 O exercício dos cargos de Assessor Especial do Reitor, Coordenador de Órgão Complementar, Diretor de Órgão associado a Sistema Estruturante, Presidente de Conselhos Superiores, Presidente da CPPD, Presidente  da  CPA,  Membro  de  Conselho  Superior  (CAE,  CAPEX,  Curadores),  Coordenador  de Colegiado de Curso, Coordenador do Núcleo Docente Estruturante (NDE), Chefe de Departamento ou de Órgão equivalente, Coordenador Pedagógico, Coordenador Acadêmico e Coordenadores de Núcleos e Programas, Coordenador de Comissão/Comitê de Ética, Coordenações associadas às Pró-Reitorias e Superintendências corresponderá  a uma  pontuação no  interstício, total ou  proporcional ao tempo  de efetivo exercício, considerando-se dois anos como 48 pontos ou 02 pontos 1/24 (um vinte e quatro avos) por mês no exercício do cargo. Dentre esses cargos, aqueles que não forem remunerados, 72 pontos ou 03 pontos 1/24 (um vinte e quatro avos) por mês no exercício do cargo.",
    label: "1 / 24",
    peso: 24,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.3 O exercício do cargo de Vice-Diretor de Unidade Universitária, Vice-Chefe de Departamento, Vice- Coordenador de Colegiado ou de Núcleo ou Programa, Vice-Coordenador de Comissão/Comitê de Ética quando houver delegação de competência através de Portaria do dirigente do Órgão, corresponderá a uma pontuação no interstício, total ou proporcional ao tempo de efetivo exercício, considerando-se 02 anos como 24 pontos ou 1 ponto 1/24 (um vinte e quatro avos) por mês no exercício do cargo.",
    label: "1 / 24",
    peso: 24,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.4 O exercício de cargo público com afastamento formal e integral da UFBA para exercer cargos nas áreas de Educação, Ciência e Tecnologia, com designação devidamente publicada no Diário Oficial da União, corresponderá a uma pontuação no interstício, total ou proporcional ao tempo de efetivo exercício, considerando-se 04 anos como o total de pontos necessários à progressão ou 1/24 (um vinte e quatro avos) deste total no exercício do cargo.",
    label: "1 / 24",
    peso: 24,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.5 A participação como membro de comissões permanentes ou transitórias que tenham por finalidade assessorar o Reitor, corresponderá a uma pontuação no interstício, total ou proporcional ao tempo de efetivo exercício, considerando-se 02 anos como 48 pontos ou 02 pontos 1/24 (um vinte e quatro avos) por mês, desde que não haja remuneração.",
    label: "1 / 24",
    peso: 24,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.6 Participação como membro em órgãos colegiados, definidos no Regimento Geral da UFBA e não mencionados no item 6.2, incluindo NDE",
    label: "02/semestre",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "6.7 Participação, em tempo parcial, em diretorias, conselhos e comissões permanentes de sociedades acadêmicas, órgãos de fomento, órgãos governamentais relacionados com a comunidade acadêmica, órgãos de classe e representações sindicais",
    label: "02/semestre",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade: "6.8 Participação como membro de PAD",
    label: "05/Comissão",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "6.9 Participação como membro de comissões de sindicância/ inquérito",
    label: "03/Comissão",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "6.10 Participação como membro de comissões ou grupos de trabalho transitórios, de\ncaráter pedagógico, definidas através de portaria de Direção de Unidade Universitária ou de dirigente de Órgão colegiado definido no Regimento Geral da UFBA",
    label: "02/Comissão",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "6.11 Participação em comissões de avaliação de processos de progressão/promoção,\nestágio probatório, PIT/RIT, licitações/compras etc.",
    label: "01/Comissão",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.11 Participação em comissões de avaliação de processos de progressão/promoção,\nestágio probatório, PIT/RIT, licitações/compras etc.",
    label: "01/Comissão",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade:
      "6.13  Participação  em  comitês  científicos:  avaliadores  de  artigos  de  periódicos,\navaliadores de projetos de pesquisa etc.",
    label: "02/atividade",
    peso: 1,
    pontos: 2,
  },
  {
    id: uuid(),
    atividade:
      "6.14   Coordenador   ou   responsável   por   Ambulatório,   Laboratório   de   Ensino   de\nGraduação e Laboratórios de Pesquisa, designado por portaria da Direção da Unidade\nUniversitária ou do Chefe do órgão de lotação do docente.",
    label: "03/semestre",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade:
      "6.15  Outras  atividades  administrativas  definidas  através  de  Portaria  da  Direção  da\nUnidade Universitária ou do Chefe do órgão de lotação do docente.",
    label: "01/semestre",
    peso: 1,
    pontos: 1,
  },
];

const fieldSeven = [
  {
    id: uuid(),
    atividade: "7.1 Doutorado ou Livre Docência concluído",
    label: "40",
    peso: 1,
    pontos: 40,
  },
  {
    id: uuid(),
    atividade: "7.2 Mestrado concluído",
    label: "20",
    peso: 1,
    pontos: 20,
  },
  {
    id: uuid(),
    atividade: "7.3 Créditos de mestrado (concluídos -360 h no interstício), equivalente a Curso de especialização",
    label: "10",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "7.4 Curso de Especialização concluído, com duração mínima de 360 horas (Resolução\n03/2014-CAPEX)",
    label: "15",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "7.5 Curso de Aperfeiçoamento ou de Atualização concluído (180 horas) (Resolução\n03/2014-CAPEX)",
    label: "8",
    peso: 1,
    pontos: 8,
  },
  {
    id: uuid(),
    atividade: "7.6  Cursos livres, com duração mínima de 40 horas, concluídos",
    label: "01/curso",
    peso: 1,
    pontos: 1,
  },
];

const fieldEight = [
  {
    id: uuid(),
    atividade: "8.1 Exercício profissional na área específica de atuação do docente (por ano)",
    label: "01/atividade",
    peso: 1,
    pontos: 1,
  },
  {
    id: uuid(),
    atividade: "8.2 Relatório técnico, demandado à UFBA na forma de consultoria",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.3 Aprovação em concurso para cargo do Magistério Superior, com defesa de\nMemorial",
    label: "10/ concurso",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "8.4 Ilustração de livros publicados (com Conselho Editorial)",
    label: "04 / atividade",
    peso: 1,
    pontos: 4,
  },
  {
    id: uuid(),
    atividade: "8.5 Criação de capa de livro publicado (com Conselho Editorial)",
    label: "05 / atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.6 Projeto gráfico de livros (design)",
    label: "10 / atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "8.7 Direção de peças teatrais apresentadas, cinema ou vídeo",
    label: "15 / atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "8.8 Coreografia apresentada",
    label: "15 / atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "8.9 Exposições individuais, referendadas pelo conselho de instituições reconhecidas",
    label: "10 /atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "8.10 Curadoria de exposições científicas ou artísticas",
    label: "15 /atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade:
      "8.11 Participação em salões de arte ou exposições coletivas de artes plásticas e fotografia, referendadas pelo conselho de instituições reconhecidas",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.12 Autoria de monumentos (esculturas, murais, painéis)",
    label: "20/obra",
    peso: 1,
    pontos: 20,
  },
  {
    id: uuid(),
    atividade: "8.13 Produção de espetáculos, cinema, rádio, televisão, vídeo, audiovisual ou mídias digitais",
    label: "15/atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "8.14 Composição musical apresentada ou criada para cinema, vídeo, rádio ou televisão, teatro ou dança",
    label: "15/atividade",
    peso: 1,
    pontos: 15,
  },
  {
    id: uuid(),
    atividade: "8.15 Arranjo de peças musicais instrumental ou vocal",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.16 Apresentação de concertos ou recitais no âmbito da UFBA",
    label: "03/atividade",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "8.17 Apresentação de concertos ou recitais no País, a convite, fora do âmbito da UFBA",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.18 Apresentação de concertos ou recitais no exterior, a convite",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "8.19 Apresentação, no País, de obras artísticas de sua autoria",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.20 Apresentação, no exterior, de obras artísticas de sua autoria",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
  {
    id: uuid(),
    atividade: "8.21 Apresentação de espetáculos de dança ou de teatro no âmbito da UFBA",
    label: "03/atividade",
    peso: 1,
    pontos: 3,
  },
  {
    id: uuid(),
    atividade: "8.22 Apresentação de espetáculos de dança ou de teatro no País, a convite, fora do âmbito da UFBA",
    label: "05/atividade",
    peso: 1,
    pontos: 5,
  },
  {
    id: uuid(),
    atividade: "8.23 Apresentação de espetáculos de dança ou de teatro no exterior, a convite",
    label: "10/atividade",
    peso: 1,
    pontos: 10,
  },
];

const fieldNine = [
  {
    id: uuid(),
    atividade:
      "9.1 A avaliação do docente pelos discentes deverá ser feita mediante preenchimento de formulário específico previamente estabelecido e aprovado pela Congregação da Unidade Universitária de lotação do docente ou pelo Sistema de Avaliação Docente/Discente (SIAV). O docente só fará jus à referida pontuação após a sua apreciação pelo órgão de lotação.",
    label: "Até 05/semestre",
    peso: 1,
    pontos: 5,
  },
];

export async function up(knex: Knex) {
  const dbFieldOne = await knex("fields")
    .select("id")
    .where("fields.campo", "CAMPO I – ATIVIDADES DE ENSINO, ORIENTAÇÃO E PARTICIPAÇÃO EM BANCAS EXAMINADORAS");
  console.log("DBFELKDONE: ", dbFieldOne);
  await knex("activities").insert(
    fieldOne.map(cur => {
      return { ...cur, fieldId: dbFieldOne[0].id };
    }),
  );
  const dbFieldTwo = await knex("fields")
    .select("id")
    .where("fields.campo", "CAMPO II - ATIVIDADES DE PESQUISA, PRODUÇÃO ACADÊMICA, CRIAÇÃO E INOVAÇÃO");
  await knex("activities").insert(
    fieldTwo.map(cur => {
      return { ...cur, fieldId: dbFieldTwo[0].id };
    }),
  );
  const dbFieldThree = await knex("fields")
    .select("id")
    .where(
      "fields.campo",
      "CAMPO III – ATIVIDADES DE EXTENSÃO Consideradas conforme inciso III da Portaria  no 982/2013 do MEC, Art. 2º § 3º do Regimento Geral da UFBA, Art. 6º da Resolução CAPEX  no   02/2012.",
    );
  await knex("activities").insert(
    fieldThree.map(cur => {
      return { ...cur, fieldId: dbFieldThree[0].id };
    }),
  );
  const dbFieldFour = await knex("fields")
    .select("id")
    .where(
      "fields.campo",
      "CAMPO IV - RECEBIMENTO DE COMENDAS E PREMIAÇÕES ADVINDAS DO EXERCÍCIO DE ATIVIDADES ACADÊMICAS",
    );
  await knex("activities").insert(
    fieldFour.map(cur => {
      return { ...cur, fieldId: dbFieldFour[0].id };
    }),
  );
  const dbFieldFive = await knex("fields")
    .select("id")
    .where(
      "fields.campo",
      "CAMPO V - PARTICIPAÇÃO EM ATIVIDADES EDITORIAIS E/OU DE ARBITRAGEM DE PRODUÇÃO INTELECTUAL E/OU ARTÍSTICA",
    );
  await knex("activities").insert(
    fieldFive.map(cur => {
      return { ...cur, fieldId: dbFieldFive[0].id };
    }),
  );
  const dbFieldSix = await knex("fields")
    .select("id")
    .where("fields.campo", "CAMPO VI- ATIVIDADES DE ADMINISTRAÇÃO/ REPRESENTAÇÃO/ ACADÊMICAS");
  await knex("activities").insert(
    fieldSix.map(cur => {
      return { ...cur, fieldId: dbFieldSix[0].id };
    }),
  );
  const dbFieldSeven = await knex("fields")
    .select("id")
    .where("fields.campo", "CAMPO VII - ATIVIDADES DE CAPACITAÇÃO PROFISSIONAL");
  await knex("activities").insert(
    fieldSeven.map(cur => {
      return { ...cur, fieldId: dbFieldSeven[0].id };
    }),
  );
  const dbFieldEight = await knex("fields").select("id").where("fields.campo", "CAMPO VIII - ATIVIDADES PROFISSIONAIS");
  await knex("activities").insert(
    fieldEight.map(cur => {
      return { ...cur, fieldId: dbFieldEight[0].id };
    }),
  );
  const dbFieldNine = await knex("fields")
    .select("id")
    .where("fields.campo", "CAMPO IX - AVALIAÇÃO DOCENTE PELOS DISCENTES");
  await knex("activities").insert(
    fieldNine.map(cur => {
      return { ...cur, fieldId: dbFieldNine[0].id };
    }),
  );
}

export async function down(knex: Knex) {
  await knex("activities").select().delete();
}
