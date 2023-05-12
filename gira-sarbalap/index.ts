export default function girar(texto: string): string {
  return texto
    .split(" ")
    .map((palabra) => (palabra.length >= 5 ? palabra.split("").reverse().join("") : palabra))
    .join(" ");
}
