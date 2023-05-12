import type { Emocion } from "./types";

const PUNTAJE: Record<Emocion, number> = {
  T_T: 1,
  ":(": 2,
  ":|": 3,
  ":)": 4,
  ":D": 5,
};

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {
  return [...emociones].sort((a, b) => (orden ? PUNTAJE[b] - PUNTAJE[a] : PUNTAJE[a] - PUNTAJE[b]));
}
