import { Tafsir } from './tafsir';

export interface Ayah {
  ayahId: number;
  arabic: string;
  swedish: string;
  tafsirs: Tafsir[];
  surahId: number;
  ayahNumber: number;
}
