export type ViewState = 'home' | 'confession' | 'story' | 'letters' | 'single-post';

export type PostType = 'confession' | 'story';

export interface Socials {
  instagram?: string;
  twitter?: string; // X
  facebook?: string;
}

export interface Post {
  id?: string;
  type: PostType;
  name: string;
  text: string;
  socials?: Socials;
  timestamp: any; // Firestore Timestamp
}

export type DecorationType = 'none' | 'stars' | 'flowers' | 'geometric' | 'clouds' | 'hearts' | 'leaves' | 'abstract' | 'moon' | 'butterflies' | 'sakura' | 'sparkles' | 'doodles';
export type DecorationLayout = 'random' | 'corners' | 'borders' | 'header-footer' | 'center-cluster' | 'watermark';
export type BgType = 'solid' | 'gradient-linear' | 'gradient-radial' | 'mesh' | 'stripes' | 'grid' | 'watercolor' | 'paper' | 'lined-paper';
export type BorderStyle = 'solid' | 'dashed' | 'double' | 'none' | 'fancy' | 'hand-drawn';
export type FrameType = 'none' | 'polaroid' | 'ripped-paper' | 'vintage' | 'minimal-box' | 'wreath';

export interface TemplateConfig {
  id: string;
  category: string;
  bgType: BgType;
  colors: string[];
  decorations: DecorationType;
  decorationLayout: DecorationLayout;
  borderColor: string;
  borderStyle: BorderStyle;
  frameType: FrameType;
  textureOpacity: number;
}

export type LetterCategory = 
  | 'Love Letters' 
  | 'Poetry' 
  | 'Loneliness' 
  | 'Friendship' 
  | 'Aesthetic Notes' 
  | 'Healing' 
  | 'Late Night Thoughts' 
  | 'Cute/Kawaii' 
  | 'Motivational' 
  | 'Anniversary';

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
  color: string;
  lineHeight: number;
  letterSpacing: number;
}