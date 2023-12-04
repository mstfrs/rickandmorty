import { rickAndMortyApi } from "./serviceHelpers";

const getAllLocations = async (i: number) => {
  const { data } = await rickAndMortyApi.get(`/location/?page=${i}`);
  return data;
};

const getAllCharacters = async (x: number) => {
  const { data } = await rickAndMortyApi.get(`/character/?page=${x}`);
  return data;
};

export const rickAndMortyService = {
  getAllLocations,
  getAllCharacters,
};
