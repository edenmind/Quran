import { Ayah } from './ayah';

export interface Surah {
  surahId: number;
  name: string;
  ayahs: Ayah[];

  order: number;
  count: number;
  period: number;
}
