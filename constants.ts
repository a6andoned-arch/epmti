import { LetterCategory } from "./types";

export const CATEGORIES: LetterCategory[] = [
  'Love Letters', 'Poetry', 'Loneliness', 'Friendship', 'Aesthetic Notes',
  'Healing', 'Late Night Thoughts', 'Cute/Kawaii', 'Motivational', 'Anniversary'
];

export const FONTS = [
  // Elegant / Serif
  { name: 'Cormorant', value: "'Cormorant Garamond', serif" },
  { name: 'Playfair', value: "'Playfair Display', serif" },
  { name: 'Cinzel', value: "'Cinzel', serif" },
  { name: 'Bodoni', value: "'Bodoni Moda', serif" },
  { name: 'Libre Bodoni', value: "'Libre Bodoni', serif" },
  { name: 'Lora', value: "'Lora', serif" },
  { name: 'Aboreto', value: "'Aboreto', cursive" },
  { name: 'Oranienbaum', value: "'Oranienbaum', serif" }, // Fallback if not loaded, standard serif
  
  // Handwritten / Script (Elegant)
  { name: 'Great Vibes', value: "'Great Vibes', cursive" },
  { name: 'Allura', value: "'Allura', cursive" },
  { name: 'Pinyon Script', value: "'Pinyon Script', cursive" },
  { name: 'Parisienne', value: "'Parisienne', cursive" },
  { name: 'Italianno', value: "'Italianno', cursive" },
  { name: 'Herr Von Muellerhoff', value: "'Herr Von Muellerhoff', cursive" },
  { name: 'Mr De Haviland', value: "'Mr De Haviland', cursive" },
  { name: 'Meie Script', value: "'Meie Script', cursive" }, // Check if imported, if not fall back
  { name: 'Petit Formal', value: "'Petit Formal Script', cursive" },
  { name: 'Rouge Script', value: "'Rouge Script', cursive" },
  { name: 'Aguafina Script', value: "'Aguafina Script', cursive" },
  { name: 'MonteCarlo', value: "'MonteCarlo', cursive" },
  { name: 'Tangerine', value: "'Tangerine', cursive" },
  { name: 'WindSong', value: "'WindSong', cursive" },
  { name: 'Meddon', value: "'Meddon', cursive" },
  
  // Handwritten / Casual
  { name: 'Dancing Script', value: "'Dancing Script', cursive" },
  { name: 'Pacifico', value: "'Pacifico', cursive" },
  { name: 'Cookie', value: "'Cookie', cursive" },
  { name: 'Sacramento', value: "'Sacramento', cursive" },
  { name: 'Homemade Apple', value: "'Homemade Apple', cursive" },
  { name: 'Cedarville', value: "'Cedarville Cursive', cursive" },
  { name: 'La Belle Aurore', value: "'La Belle Aurore', cursive" },
  { name: 'Nothing You Could Do', value: "'Nothing You Could Do', cursive" },
  { name: 'Reenie Beanie', value: "'Reenie Beanie', cursive" },
  { name: 'Shadows Into Light', value: "'Shadows Into Light', cursive" },
  { name: 'The Girl Next Door', value: "'The Girl Next Door', cursive" },
  { name: 'Covered By Your Grace', value: "'Covered By Your Grace', cursive" },
  { name: 'Caveat', value: "'Caveat', cursive" },
  { name: 'Kalam', value: "'Kalam', cursive" },
  { name: 'Patrick Hand', value: "'Patrick Hand', cursive" },
  { name: 'Indie Flower', value: "'Indie Flower', cursive" },
  { name: 'Amatic SC', value: "'Amatic SC', cursive" },
  { name: 'Gloria Hallelujah', value: "'Gloria Hallelujah', cursive" },
  { name: 'Gochi Hand', value: "'Gochi Hand', cursive" }, // Fallback
  { name: 'Bad Script', value: "'Bad Script', cursive" },
  { name: 'Marck Script', value: "'Marck Script', cursive" },
  { name: 'Nanum Pen', value: "'Nanum Pen Script', cursive" },
  { name: 'Rochester', value: "'Rochester', cursive" },
  { name: 'Waiting for Sunrise', value: "'Waiting for the Sunrise', cursive" },
  { name: 'Zeyada', value: "'Zeyada', cursive" },
  { name: 'Kristi', value: "'Kristi', cursive" },
  { name: 'Euphoria Script', value: "'Euphoria Script', cursive" },
  { name: 'Merienda', value: "'Merienda', cursive" },
  
  // Minimal / Sans
  { name: 'Nunito', value: "'Nunito', sans-serif" },
  { name: 'Quicksand', value: "'Quicksand', sans-serif" },
  { name: 'Montserrat', value: "'Montserrat', sans-serif" },
  { name: 'Raleway', value: "'Raleway', sans-serif" },
  { name: 'Tenor Sans', value: "'Tenor Sans', sans-serif" },
  { name: 'Josefin Sans', value: "'Josefin Sans', sans-serif" },
  
  // Typewriter / Mono
  { name: 'Courier Prime', value: "'Courier Prime', monospace" },
  { name: 'Special Elite', value: "'Special Elite', cursive" },
  { name: 'Cutive Mono', value: "'Cutive Mono', monospace" },
];
