import { Ayah } from './ayah';

export interface Surah {
  surahId: number;
  name: string;
  ayah: Ayah[];
}
