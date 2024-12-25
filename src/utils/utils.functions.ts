const src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/`;

export const getRoute = (id: number) => {
  if (id < 10) {
    return `${src}00${id}.png`;
  } else if (id < 100) {
    return `${src}0${id}.png`;
  } else {
    return `${src}${id}.png`;
  }
};
export const getId = (id: number) => {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  } else {
    return id;
  }
};

export function getHeightInFeets(heightDec: number): string {
  const feets = Math.floor(heightDec);
  const inches = ((heightDec - feets) * 12).toFixed(1);
  return feets + "'" + inches + `"`;
}
export function getWeightInHectograms(weight: number): string {
  return `${(weight * 0.22).toFixed(1)} lbs`;
}

export function getBarColorIndividual(value: number): string {
  if (value < 40) {
    return "#ff0000";
  } else if (value < 60) {
    return "#ff692d";
  }
  return "#00aa13";
}
