// Todo o conteúdo textual da página fica centralizado aqui.

// Número de WhatsApp da Stephanie (formato 55 + DDD + número).
export const WHATSAPP_URL =
  'https://wa.me/556182332645?text=Ol%C3%A1%2C%20Stephanie!%20Quero%20conversar%20sobre%20o%20sono%20do%20meu%20beb%C3%AA.';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export interface NumberedItem {
  number: string;
  title: string;
  text: string;
}

export const problems: NumberedItem[] = [
  {
    number: '01',
    title: 'Demora\npara dormir',
    text: 'O momento do sono vira uma batalha diária que desgasta os pais e o bebê.',
  },
  {
    number: '02',
    title: 'Desperta\nmuitas vezes',
    text: 'As noites são interrompidas constantemente, impedindo o sono reparador.',
  },
  {
    number: '03',
    title: 'Rotina\nimprevisível',
    text: 'Você já tentou várias coisas e não sabe exatamente o que ajustar na sua rotina.',
  },
];

export const solutionItems: NumberedItem[] = [
  {
    number: '01',
    title: 'Análise individual',
    text: 'Preenchimento de formulário detalhado para entender a história e a rotina da sua família.',
  },
  {
    number: '02',
    title: 'Consulta online',
    text: 'Conversa acolhedora de até 1h30 para compreender rotina, dificuldades e objetivos reais.',
  },
  {
    number: '03',
    title: 'Orientação de rotina',
    text: 'Indicação de ajustes personalizados e gentis para o seu bebê e para o ritmo da casa.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Suporte diário via WhatsApp durante o período contratado, de segunda a sexta, das 8h às 18h.',
  },
];

export const steps: NumberedItem[] = [
  {
    number: '01',
    title: 'Entendemos sua realidade',
    text: 'Preenchimento de formulário para análise individual da dinâmica familiar e possíveis ajustes.',
  },
  {
    number: '02',
    title: 'Conversamos profundamente',
    text: 'Consulta online de até 1h30 para compreender rotina, dificuldades e objetivos da família.',
  },
  {
    number: '03',
    title: 'Definimos os ajustes',
    text: 'Orientação clara e acolhedora da rotina e dos ajustes necessários de acordo com o seu caso.',
  },
  {
    number: '04',
    title: 'Você recebe\nacompanhamento',
    text: 'Suporte diário via WhatsApp durante o período contratado, de segunda a sexta, das 8h às 18h.',
  },
];

export const credentials: string[] = ['Instituto do Sono Infantil', 'CAPPE · Canadá', 'Mãe do Benício'];

export const audience: string[] = [
  'Seu bebê apresenta dificuldade para iniciar o sono.',
  'Os despertares noturnos frequentes estão gerando exaustão.',
  'Você sente que não consegue estabelecer uma rotina previsível.',
  'Já tentou dicas da internet e não sabe qual caminho seguir.',
  'Está gestante e quer se preparar para a chegada do bebê.',
];

export interface Plan {
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    title: 'Aconselhamento\npara gestantes',
    description: 'Orientação pré-natal + 7 dias de acompanhamento via WhatsApp após o parto.',
    price: '380,00',
  },
  {
    title: 'Consultoria\n7 dias',
    description: 'Acompanhamento individual por 7 dias.',
    price: '500,00',
    featured: true,
  },
  {
    title: 'Consultoria\n15 dias',
    description: 'Acompanhamento individual por 15 dias.',
    price: '700,00',
  },
  {
    title: 'Consultoria\n30 dias',
    description: 'Acompanhamento individual por 30 dias.',
    price: '950,00',
  },
];

export interface Testimonial {
  location: string;
  text: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    location: 'Asa Sul · Brasília/DF',
    text: 'A Stephanie salvou as nossas noites e a minha sanidade! O Theo acordava de hora em hora e eu já estava à beira da exaustão. Em menos de 10 dias com o acompanhamento diário no WhatsApp, ele aprendeu a adormecer tranquilo no berço e os despertares espaçaram. Foi um renascimento para a nossa casa.',
    name: 'Mariana Guimarães',
    role: 'Mãe do Theo (7 meses)',
  },
  {
    location: 'Águas Claras · DF',
    text: 'Eu tinha muito receio de consultoria porque tinha pavor de métodos frios de deixar chorar. A Stephanie nos mostrou um caminho de puro respeito e acolhimento! Ela ajustou os rituais da rotina da Bia de um jeito que coube na nossa vida real de trabalho. As noites finalmente viraram sinônimo de descanso e paz.',
    name: 'Camila Vasconcelos',
    role: 'Mãe da Beatriz (1 ano e 2 meses)',
  },
  {
    location: 'Sudoeste · Brasília/DF',
    text: 'A rotina com gêmeos parecia um caos impossível de organizar até conhecermos a Essência do Sono. O suporte individualizado no WhatsApp deu uma segurança enorme no fim da tarde. Stephanie tem uma calma que acalma a casa toda. Recomendo de olhos fechados para todas as famílias do DF!',
    name: 'Juliana & Rodrigo Meireles',
    role: 'Pais dos gêmeos Benício e Noah (5 meses)',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

// As perguntas vêm do layout; as respostas foram escritas a partir das informações da própria página.
export const faqs: Faq[] = [
  {
    question: 'Como funciona a consultoria?',
    answer:
      'Começa com o preenchimento de um formulário detalhado sobre a rotina da sua família. Depois fazemos uma consulta online, você recebe as orientações personalizadas e conta com o acompanhamento diário pelo WhatsApp durante o período contratado.',
  },
  {
    question: 'A consultoria é online?',
    answer:
      'Sim. Todo o atendimento é online, então você pode ser acompanhada de onde estiver, no conforto da sua casa.',
  },
  {
    question: 'Quanto tempo dura a consulta?',
    answer:
      'A consulta online tem duração de até 1h30, tempo suficiente para compreender a rotina, as dificuldades e os objetivos da família.',
  },
  {
    question: 'Como funciona o suporte pelo WhatsApp?',
    answer:
      'Durante o período contratado, você tem suporte diário pelo WhatsApp para tirar dúvidas e ajustar a rotina, de segunda a sexta, das 8h às 18h.',
  },
  {
    question: 'Qual plano devo escolher?',
    answer:
      'Depende da necessidade da sua família. Gestantes contam com o aconselhamento pré-natal; para bebês e crianças, você pode escolher 7, 15 ou 30 dias de acompanhamento. Se tiver dúvida, converse com a Stephanie antes de decidir.',
  },
  {
    question: 'Existe acompanhamento para gestantes?',
    answer:
      'Sim. O Aconselhamento para gestantes inclui orientação pré-natal e 7 dias de acompanhamento via WhatsApp após o parto.',
  },
  {
    question: 'Quando começa o acompanhamento?',
    answer:
      'O acompanhamento começa após a consulta online, quando você recebe as orientações e passa a colocar os ajustes em prática com o suporte da Stephanie.',
  },
  {
    question: 'Quais são os horários de atendimento?',
    answer: 'O atendimento acontece de segunda a sexta-feira, das 8h às 18h.',
  },
];
