export default function contarDuplicados(texto: string): number {
  texto = texto.toLowerCase();
  const apariciones = new Set<string>();
  const duplicados = new Set<string>();
  for (const letra of texto) {
    if (apariciones.has(letra)) duplicados.add(letra);
    else {
      apariciones.add(letra);
    }
  }
  return duplicados.size;
}

// export default function contarDuplicados(texto: string): number {
//   const mapa = texto.split("").reduce<Record<string, number>>((acumulador, letra) => {
//     letra = letra.toLowerCase();
//     return {
//       ...acumulador,
//       [letra]: (acumulador[letra] ?? 0) + 1,
//     };
//   }, {});
//   return Object.values(mapa).filter((cantidad) => cantidad > 1).length;
// }
