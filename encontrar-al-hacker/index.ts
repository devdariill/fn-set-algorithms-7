import type { Estudiante } from "./types";

const PUNTAJES = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
};

export default function encontrarHackers(estudiantes: Estudiante[]): string[] {
  const hackers: string[] = [];
  for (let [nombre, puntaje, calificaciones] of estudiantes) {
    if (puntaje > 200) {
      hackers.push(nombre);
      continue;
    }
    let tPuntajeEstudiante = 0;
    for (const calificacion of calificaciones) {
      tPuntajeEstudiante += PUNTAJES[calificacion] ?? 0;
    }
    if (calificaciones.every((calificacion) => ["B", "A"].includes(calificacion))) {
      tPuntajeEstudiante += 20;
    }
    tPuntajeEstudiante = Math.min(200, tPuntajeEstudiante);
    if (tPuntajeEstudiante !== puntaje) {
      hackers.push(nombre);
    }
  }
  return hackers;
}
