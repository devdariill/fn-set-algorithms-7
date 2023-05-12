// export default function encontrarImpar(numeros: number[]): number {
//   const mapa = new Set<number>();

//   for (const numero of numeros) {
//     if (mapa.has(numero)) mapa.delete(numero);
//     else {
//       mapa.add(numero);
//     }
//   }
//   // return mapa.values().next().value;
//   return Array.from(mapa.values())[0];
//   // return Array.from(mapa)[0];
// }

export default function encontrarImpar(numeros: number[]): number {
  const mapa = numeros.reduce<Record<number, number>>((acumulador, numero) => {
    return {
      ...acumulador,
      [numero]: (acumulador[numero] ?? 0) + 1,
    };
  }, {});
  const [res] = Object.entries(mapa).find(([, cantidad]) => cantidad % 2 !== 0) as [string, number];
  // const res = Object.entries(mapa).find(([, cantidad]) => cantidad % 2 !== 0) as [string, number];
  return +res;
  // return +res[0];
}
