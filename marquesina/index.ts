export default function marquesina(texto: string): string[] {
  let buffer: string[] = [];
  // for (let letra of texto){
  for (let index = 1; index <= texto.length; index++) {
    buffer.push(texto.slice(index) + texto.slice(0, index));
  }
  console.log(buffer);
  // TODO: implementar
  return buffer;
}
