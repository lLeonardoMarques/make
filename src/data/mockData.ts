import { GalleryItem, Product, StoreInfo, CustomerReview } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'A Gata da Make',
  slogan: 'O seu paraíso de maquiagens, cosméticos e beleza em São Paulo',
  address: 'R. das Pedras, 326 - Jardim Paulistano (Zona Norte), São Paulo - SP, 02812-010',
  phoneRaw: '5511985313930',
  phoneFormatted: '(11) 98531-3930',
  whatsappMessage: 'Olá! Vim pelo site da A Gata da Make e gostaria de saber mais sobre os produtos e promoções!',
  hoursWeekday: 'Segunda a Sexta: 09:00 às 19:30',
  hoursSaturday: 'Sábado: 09:00 às 19:00',
  hoursSunday: 'Domingo: 10:00 às 15:00',
  instagram: '@agatadamake',
  mapEmbedQuery: 'Rua das Pedras 326 Jardim Paulistano Sao Paulo SP'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-0',
    title: 'Fachada & Recepção Glamour',
    category: 'loja',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnHPROiWCf-W4Ro6OTH7Y0inI1-1OYSH8cUMTPn2N-WYEyXYZ7DUr9-LlNNkaKUsjuoLJ_fY02cpVmMAA26tZVKFUNgNV5dS44F3yrK-c1YxoVoTV2hxowlfWSYgKAFdZL5MSGxdhQp6pcB=s677-k-no',
    caption: 'Ambiente acolhedor e iluminado na Zona Norte de SP para sua melhor experiência de compra.'
  },
  {
    id: 'gal-1',
    title: 'Tour Exclusivo na Loja (Reels)',
    category: 'videos',
    mediaType: 'video',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbwpiUe1pQfwJTE9ZSB2wGuYzb1Bzqj_hbjKq9DnvDIOutSvxBoFiydsyOPC6PkxfHppBGtXaY3jR9Tkca9WOT_ToW9xZL-zCwS_kdl2JdbzXiamG-B6kCs4wQ1EH2qBAPeBLKGnjW-o4f=s677-k-no',
    caption: 'Conheça nossos expositores repletos de novidades, testers e makes importadas & nacionais.',
    duration: '0:17'
  },
  {
    id: 'gal-2',
    title: 'Expositores de Batons & Makes',
    category: 'produtos',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn59hCLlo8bxyXL3FnG0LhIV7tMZc58OxwlwyqvouYxByQWbRkPQnqfYOwajACwW1b_U21uFvXgpcnwTN563orkfTYzmmAnJtPccdKs_-3jAFTQeHGZ5JUa2c_7D09jPptGwOFjET-FUQc=s406-k-no',
    caption: 'Variedade incrível de tons, texturas matte, gloss e acabamentos para todos os tons de pele.'
  },
  {
    id: 'gal-3',
    title: 'Bancada de Maquiagem & Testes',
    category: 'makes',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl3px1iThLL6HpCffv535spbfPI7f0syjWFubFXcs_edre86aTrkFM3o3YAaYQr6gSW4iGNSjqL6tBX7r2NhvxnGJdwcp-Bnjgutn4_xHScWkSPV0L-hXlFwCgjv5cUQJpCtECm1_Xhq_QN=s677-k-no',
    caption: 'Espaço com espelho camarim para você testar bases, iluminadores e criar produções incríveis.'
  },
  {
    id: 'gal-4',
    title: 'Vitrine de Skincare & Hidratação',
    category: 'produtos',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsvYDKgALvw0ojPRxug01HJhMy96FT2H3DlrK5PQoNuxEhvLfhI2l1wash_2uIWmzP_BMCSEsGzw2BSm32PYoZdifQBsdu_6QTaohBHfN8egXpinwE_ez6qoUmoNakeifw7VfTiZofd46o=s508-k-no',
    caption: 'Produtos pré-maquiagem, séruns, primers e brumas fixadoras para uma pele impecável.'
  },
  {
    id: 'gal-5',
    title: 'Seção de Paletas & Sombras Glam',
    category: 'produtos',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnKmdiW4ydBZGhZdHmr6q9gMT0s3vfSn3Cl9-ZBVo7VGG6y5vPh3_N6LtvNvNL3lfhsKNQfav5DxM-KcPz5TgkCuQywQiDUfK0Yx7yuC4wPJhr859mS5UQWsPp84MNESy6OLvB12-jCO7lW=s677-k-no',
    caption: 'Paletas ultra pigmentadas, glitters prensados e pigmentos para looks marcantes.'
  },
  {
    id: 'gal-6',
    title: 'Espaço Loja & Decoração Rosa Chic',
    category: 'loja',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm-YlAfRcVh6pafsSFO-FlW9-kAMWgknQYyFsxZimYVbjDqcr5KLn8N8KQ_9mdBo8Iq6U-uWqJjYeTINFC5V6id8bFWH_x-BCi7HRVr3yTPDaMlUzoae7j_mpiGVbehifROvtJErm4ol0XL=s508-k-no',
    caption: 'Cada cantinho foi pensado para você se sentir diva e tirar fotos instagramáveis.'
  },
  {
    id: 'gal-7',
    title: 'Novidades & Lançamentos da Semana',
    category: 'videos',
    mediaType: 'video',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlNXAO_XrazXy2GQbG5ZxK3Jvesaq0AM300c6siIcIxpyaF3CHcX4nEFOyTChxuxAcZoOavtrhP71p7cTHLFQGB5Q_YBEVfaHd3eYmd_mVCM4EPpz-bVJXQkVaAOY9sKvjKYEhewmpXHKug=s677-k-no',
    caption: 'Reposições diárias com os cosméticos mais desejados da internet e das blogueiras.',
    duration: '0:17'
  },
  {
    id: 'gal-8',
    title: 'Pincéis & Acessórios Profissionais',
    category: 'produtos',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4XX-asHMurCkrnAkvDEXCKy0kAUnY5yhpx7up4RFnol4g3o1XLmZFSjA4dW0U11lJ542b6BpBEU3MoU1WCYdkaTMY9_pKe_EhxMW80syuRzsR7jbF4vng1Zef-0_llBO9ukgicY3yo7cg=s406-k-no',
    caption: 'Pincéis cerdas super macias, esponjinhas de precisão e curvex de alta durabilidade.'
  },
  {
    id: 'gal-9',
    title: 'Painel A Gata da Make',
    category: 'loja',
    mediaType: 'image',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmcsBJQkX9A-Zv4P00IqQV-nPgYYKi7-EzNdvBJnDKVnbLa3i6vjhWls1G217jRAtaD9oiOUhuHmlUVGMadXxWQOXxF2PaEGZ0Qsp-NtTuWJ90POY9cWWM_gQMQO35tAbjRuzQlSXGaemZM=w203-h114-k-no',
    caption: 'Visite nossa loja na Rua das Pedras, 326 e garanta consultoria personalizada de maquiagem!'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Combo Diva Completo: Paleta Glam + Batom + Bruma Fixadora',
    category: 'combos',
    brand: 'A Gata da Make Special Edition',
    originalPrice: 159.90,
    price: 99.90,
    discountPercent: 38,
    isPromotion: true,
    isHot: true,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80',
    description: 'O combo promocional mais desejado! Acompanha nossa paleta de 18 cores ultra pigmentadas, um batom matte aveludado de alta fixação e a bruma iluminadora com ácido hialurônico.',
    benefits: [
      'Economia de mais de 35% no combo',
      'Alta fixação resistente ao suor',
      'Acompanha necessaire exclusiva de brinde',
      'Ideal para presentes e auto maquiagem'
    ],
    usageTip: 'Borrife a bruma antes da maquiagem para hidratar e ao final para fixar por até 16 horas.',
    inStock: true,
    tag: 'SUPER OFERTA'
  },
  {
    id: 'prod-2',
    name: 'Batom Líquido Matte Velvet HD 24h',
    category: 'labios',
    brand: 'Gata Chic',
    originalPrice: 42.00,
    price: 24.90,
    discountPercent: 41,
    isPromotion: true,
    isHot: true,
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 218,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80',
    description: 'Acabamento 100% matte aveludado que não craquela e não transfere no copo ou máscara. Fórmula enriquecida com Manteiga de Karité e Vitamina E.',
    benefits: [
      'Duração de até 24 horas sem retoque',
      'Efeito blur disfarça as linhas dos lábios',
      'Não resseca nem repuxa',
      'Cores intensas em uma única camada'
    ],
    shades: [
      { name: '01 Rosa Diva', colorHex: '#db2777' },
      { name: '02 Nude Glam', colorHex: '#c08081' },
      { name: '03 Vermelho Fatal', colorHex: '#991b1b' },
      { name: '04 Vinho Sedutor', colorHex: '#581c87' },
      { name: '05 Marrom Chic', colorHex: '#78350f' }
    ],
    inStock: true,
    tag: '40% OFF'
  },
  {
    id: 'prod-3',
    name: 'Paleta de Sombras Crystal Glow 24 Cores',
    category: 'olhos',
    brand: 'Luxe Beauty',
    originalPrice: 129.00,
    price: 79.90,
    discountPercent: 38,
    isPromotion: true,
    isBestSeller: true,
    rating: 5.0,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
    description: '24 tons versáteis divididos entre mattes aveludados, metálicos cintilantes, glitters prensados e toppers multidimensionais.',
    benefits: [
      'Pigmentação intensa com toque amanteigado',
      'Fácil de esfumar sem manchar',
      'Livre de crueldade animal e dermatologicamente testada',
      'Embalagem magnética com espelho grande'
    ],
    usageTip: 'Use o dedo anelar para aplicar os tons metálicos e intensificar o brilho espelhado.',
    inStock: true,
    tag: 'DESTAQUE'
  },
  {
    id: 'prod-4',
    name: 'Kit 12 Pincéis Profissionais Rose Gold + Estojo',
    category: 'pinceis',
    brand: 'A Gata Pro Studio',
    originalPrice: 110.00,
    price: 69.90,
    discountPercent: 36,
    isPromotion: true,
    isHot: false,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 97,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&auto=format&fit=crop&q=80',
    description: 'Conjunto completo com cerdas sintéticas ultrafinas e hipoalergênicas, cabo ergonômico em acabamento rose gold com branco perolado.',
    benefits: [
      'Cerdas com tecnologia Nano-Fiber macias',
      'Não absorvem excesso de base ou pó',
      'Acompanha estojo protetor cilíndrico',
      'Cobre aplicação de pele, contorno, blush e olhos'
    ],
    inStock: true,
    tag: 'PROMOÇÃO'
  },
  {
    id: 'prod-5',
    name: 'Base Líquida Acabamento Matte Natural Alta Cobertura',
    category: 'rosto',
    brand: 'Velvet Skin',
    originalPrice: 65.00,
    price: 49.90,
    discountPercent: 23,
    isPromotion: true,
    rating: 4.8,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1631730486784-5456119f69ae?w=600&auto=format&fit=crop&q=80',
    description: 'Base de alta cobertura com efeito de segunda pele. Controla a oleosidade durante todo o dia com ácido hialurônico e niacinamida.',
    benefits: [
      'Resistente à água e transferência',
      'FPS 30 proteção UVA/UVB',
      'Fórmula oil-free não comedogênica',
      'Textura leve que permite construção de camadas'
    ],
    shades: [
      { name: 'Tom 01 - Claro Rosado', colorHex: '#fce7f3' },
      { name: 'Tom 02 - Claro Neutro', colorHex: '#fed7aa' },
      { name: 'Tom 03 - Médio Quente', colorHex: '#fcd34d' },
      { name: 'Tom 04 - Médio Dourado', colorHex: '#d97706' },
      { name: 'Tom 05 - Escuro Quente', colorHex: '#92400e' },
      { name: 'Tom 06 - Escuro Profundo', colorHex: '#451a03' }
    ],
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'Iluminador Baked Diamond Glow Rose Gold',
    category: 'rosto',
    brand: 'Shine Luxury',
    originalPrice: 48.00,
    price: 34.90,
    discountPercent: 27,
    isPromotion: false,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=600&auto=format&fit=crop&q=80',
    description: 'Iluminador assado de alta intensidade com micropartículas de pérolas refletoras que criam o cobiçado efeito glow espelhado.',
    benefits: [
      'Não marca a textura dos poros',
      'Fixação prolongada na pele',
      'Pode ser usado no rosto, olhos e colo',
      'Rendimento incrível'
    ],
    inStock: true
  },
  {
    id: 'prod-7',
    name: 'Sérum Hidratante Primer Facial Ouro 24k & Vitamina C',
    category: 'skincare',
    brand: 'Gata Pure Skin',
    originalPrice: 59.90,
    price: 39.90,
    discountPercent: 33,
    isPromotion: true,
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    description: 'O segredo da make duradoura sem craquelar. Prepara a pele, uniformiza o tom, minimiza poros e devolve a luminosidade natural.',
    benefits: [
      'Ação antioxidante com Vitamina C pura',
      'Partículas de ouro que conferem viço imediato',
      'Secagem rápida toque aveludado',
      'Ideal para uso diário antes do protetor ou make'
    ],
    inStock: true,
    tag: 'QUERIDINHO'
  },
  {
    id: 'prod-8',
    name: 'Gloss Labial Plump Efeito Volume Máximo Chilli & Hialurônico',
    category: 'labios',
    brand: 'Hot Lips',
    originalPrice: 38.00,
    price: 27.90,
    discountPercent: 26,
    isPromotion: true,
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop&q=80',
    description: 'Lábios visivelmente mais volumosos e preenchidos em 5 minutos. Não gruda nos cabelos e proporciona um brilho vinílico deslumbrante.',
    benefits: [
      'Aumento óptico do volume dos lábios',
      'Hidratação profunda por até 12h',
      'Cheirinho viciante de melancia e frutas vermelhas',
      'Acabamento não pegajoso'
    ],
    shades: [
      { name: 'Crystal Clear (Transparente)', colorHex: '#ffffff' },
      { name: 'Pink Holográfico', colorHex: '#f472b6' },
      { name: 'Peach Shimmer', colorHex: '#fb923c' }
    ],
    inStock: true
  },
  {
    id: 'prod-9',
    name: 'Delineador Líquido Black Cat Olho de Gatinho À Prova D\'Água',
    category: 'olhos',
    brand: 'A Gata Signature',
    originalPrice: 35.00,
    price: 22.90,
    discountPercent: 35,
    isPromotion: true,
    isHot: true,
    rating: 5.0,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=600&auto=format&fit=crop&q=80',
    description: 'Ponta de feltro ultraprecisa para desenhar o delineado gatinho perfeito sem tremer. Preto carbono profundo que dura o dia inteiro sem borrar.',
    benefits: [
      'Ponta japonesa flexível de 0.1mm',
      'Resistente a lágrimas, calor e oleosidade',
      'Secagem ultrarrápida (5 segundos)',
      'Não carimba na pálpebra gordinha'
    ],
    inStock: true,
    tag: 'TOP 1 OLHOS'
  },
  {
    id: 'prod-10',
    name: 'Kit Trio de Esponjas Anatômicas Soft Blender',
    category: 'pinceis',
    brand: 'A Gata da Make Essentials',
    originalPrice: 32.00,
    price: 19.90,
    discountPercent: 37,
    isPromotion: true,
    rating: 4.8,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80',
    description: 'Trio de esponjas livres de látex que dobram de tamanho quando molhadas. Garantem um acabamento natural sem linhas de demarcação.',
    benefits: [
      'Cresce com água e fica extremamente macia',
      'Corte chanfrado para cantinhos dos olhos e nariz',
      'Economiza produto com absorção mínima',
      'Cores rosa degradê super fofas'
    ],
    inStock: true
  },
  {
    id: 'prod-11',
    name: 'Bruma Fixadora Matificante Efeito Blindagem 120ml',
    category: 'skincare',
    brand: 'A Gata Shield',
    originalPrice: 45.00,
    price: 29.90,
    discountPercent: 33,
    isPromotion: true,
    rating: 4.9,
    reviewsCount: 91,
    image: 'https://images.unsplash.com/photo-1608248597359-59725f1710ec?w=600&auto=format&fit=crop&q=80',
    description: 'Cria uma película protetora invisível que blinda a maquiagem contra chuva, suor, atrito e calor intenso. Efeito matte aveludado imediato.',
    benefits: [
      'Blindagem profissional da maquiagem',
      'Controla oleosidade com Extrato de Chá Verde',
      'Jato em névoa fina que não mancha',
      'Aroma suave de rosas e algodão doce'
    ],
    inStock: true
  },
  {
    id: 'prod-12',
    name: 'Combo Iniciante na Make: Base + Corretivo + Pó Compacto + Batom',
    category: 'combos',
    brand: 'A Gata da Make Kits',
    originalPrice: 169.90,
    price: 119.90,
    discountPercent: 29,
    isPromotion: true,
    isHot: true,
    rating: 5.0,
    reviewsCount: 83,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&auto=format&fit=crop&q=80',
    description: 'Tudo o que você precisa para arrasar no dia a dia ou eventos. Escolha seu tom de base e corretivo e receba uma consultoria exclusiva.',
    benefits: [
      'Kit completo com passos essenciais',
      'Frete grátis na Zona Norte ou retirada rápida',
      'Acompanha espelho de bolsa exclusivo',
      'Produtos testados e aprovados pelas nossas maquiadoras'
    ],
    inStock: true,
    tag: 'MAIS VENDIDO'
  }
];

export const PROMO_DEALS = [
  {
    id: 'deal-1',
    title: 'Festival da Make Rosa & Glam',
    subtitle: 'Até 40% OFF em Batons, Paletas e Brumas na loja física e online!',
    badge: 'OFERTA RELÂMPAGO',
    couponCode: 'GATAMAKE10',
    couponDiscount: '10% EXTRA no 1º Pedido',
    expireHours: 8,
    expireMinutes: 45
  },
  {
    id: 'deal-2',
    title: 'Compre & Ganhe Brinde Exclusivo',
    subtitle: 'Em compras acima de R$ 99,00 na loja ou WhatsApp, ganhe 1 Esponja Gata Soft!',
    badge: 'BRINDE GRÁTIS',
    couponCode: 'GANHEBRINDE',
    couponDiscount: 'Esponja Soft de Presente',
    expireHours: 24,
    expireMinutes: 0
  },
  {
    id: 'deal-3',
    title: 'Retirada Express Grátis na Zona Norte',
    subtitle: 'Rua das Pedras, 326 - Jardim Paulistano. Faça o pedido e retire em até 30 minutos!',
    badge: 'RETIRADA NA LOJA',
    couponCode: 'ZONANORTE',
    couponDiscount: 'Retirada Imediata',
    expireHours: 12,
    expireMinutes: 30
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Juliana Castro',
    city: 'Jardim Paulistano, SP',
    rating: 5,
    comment: 'Amei a loja! O atendimento das meninas é nota mil. Fui pessoalmente na Rua das Pedras e montei meu kit com as bases e a paleta. As makes são 100% originais e duram o dia todo.',
    date: 'Há 3 dias',
    favoriteProduct: 'Paleta Crystal Glow & Batom Velvet'
  },
  {
    id: 'rev-2',
    name: 'Camila Fernandes',
    city: 'Santana, São Paulo',
    rating: 5,
    comment: 'Pedi pelo WhatsApp e entregaram super rápido aqui na Zona Norte. Os batons matte são maravilhosos e não transferem. Já virei cliente fiel da Gata da Make!',
    date: 'Há 1 semana',
    favoriteProduct: 'Batom Líquido Matte 01 Rosa Diva'
  },
  {
    id: 'rev-3',
    name: 'Beatriz Almeida',
    city: 'Freguesia do Ó, SP',
    rating: 5,
    comment: 'Espaço lindo, super cheiroso e com produtos de excelente qualidade com preço justo. Vale muito a pena a visita.',
    date: 'Há 2 semanas',
    favoriteProduct: 'Kit 12 Pincéis Rose Gold'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual é o seu objetivo principal de maquiagem?',
    options: [
      { label: 'Look Natural & Radiante para o Dia a Dia', value: 'dia_a_dia', icon: 'Sun' },
      { label: 'Produção Glamour para Festas & Noite', value: 'festa', icon: 'Sparkles' },
      { label: 'Delineado Marcante & Olhos de Gatinho', value: 'gatinho', icon: 'Eye' },
      { label: 'Boca Marcante com Alta Durabilidade', value: 'labios', icon: 'Heart' }
    ]
  },
  {
    id: 2,
    question: 'Qual é o seu tipo de pele preferido no acabamento?',
    options: [
      { label: 'Matte Aveludada & Controle de Oleosidade', value: 'matte', icon: 'ShieldCheck' },
      { label: 'Pele Glow & Iluminada com Viço Natural', value: 'glow', icon: 'Sparkle' },
      { label: 'Alta Cobertura & Camuflagem de Manchinhas', value: 'alta_cobertura', icon: 'Layers' },
      { label: 'Leveza & Skincare com Cor (Segunda Pele)', value: 'leve', icon: 'Feather' }
    ]
  },
  {
    id: 3,
    question: 'Qual item não pode faltar na sua bolsa?',
    options: [
      { label: 'Batom Matte ou Gloss Plump', value: 'batom', icon: 'Smile' },
      { label: 'Iluminador & Blush Compacto', value: 'blush', icon: 'Star' },
      { label: 'Delineador Preto Prova D\'Água', value: 'delineador', icon: 'Flame' },
      { label: 'Bruma Fixadora Refrescante', value: 'bruma', icon: 'Droplets' }
    ]
  }
];
