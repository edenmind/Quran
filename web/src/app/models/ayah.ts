import { Tafsir } from './tafsir';

export interface Ayah {
  ayahId: number;
  arabic: string;
  swedish: string;
  tafsir: Tafsir[];
  surahId: number;
}
