export interface ILocations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
export interface ILocationCardList {
  allLocations: ILocations[];
}
export interface ILocationCard {
  location: ILocations;
}

export interface ICharacters {
  id: number;
  name: string;
  species:string;

  type: string;
  status: string;
  gender: string;
  image: string;
  origin: string[];
  location: {
    name: string;
    url:string;
  };
  
  episode:string[];
  url:string;
  created:string;
}
export interface ICharacterCardList {
  allCharacters: ICharacters[];
}
export interface ICharacterCard {
  character: ICharacters;
  
}
export interface CharacterDetailCardProps {
  selected: ICharacters;
  other:ICharacters[];
  otherCharacters:ICharacters;
}
export interface CardAvatarProps {
  
  otherCharacter:ICharacters;
}
export interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}