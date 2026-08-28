export type ThemeMode = 'claro' | 'escuro';

export type NavTab = 
  | 'inicio' 
  | 'produtos' 
  | 'promocoes' 
  | 'galeria' 
  | 'quiz' 
  | 'localizacao' 
  | 'avaliacoes';

export type ProductCategory = 
  | 'todos' 
  | 'promocoes' 
  | 'labios' 
  | 'rosto' 
  | 'olhos' 
  | 'pinceis' 
  | 'skincare' 
  | 'combos';

export interface ProductShade {
  name: string;
  colorHex: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  originalPrice?: number;
  price: number;
  discountPercent?: number;
  isPromotion: boolean;
  isHot?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewsCount: number;
  image: string;
  images?: string[];
  description: string;
  benefits: string[];
  usageTip?: string;
  shades?: ProductShade[];
  inStock: boolean;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'loja' | 'produtos' | 'makes' | 'videos';
  mediaType: 'image' | 'video';
  url: string;
  thumbUrl?: string;
  caption: string;
  duration?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  favoriteProduct: string;
}

export interface StoreInfo {
  name: string;
  slogan: string;
  address: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappMessage: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  instagram: string;
  mapEmbedQuery: string;
}

export interface PromoDeal {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  couponCode: string;
  couponDiscount: string;
  expireHours: number;
  expireMinutes: number;
}

export interface QuizOption {
  label: string;
  value: string;
  icon: string;
  description?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}
