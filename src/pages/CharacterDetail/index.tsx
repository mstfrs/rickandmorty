import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { ICharacters } from '../../types/Type';
import CharacterDetailCard from '../../components/CharacterDetailCard';
import Paginate from '../../components/Paginate';

const CharacterDetail = () => {
    const {id}=useParams()
    const characterId = Number(id);
    
    const filterdCharacters = useSelector((state: RootState) => state.characters.filteredCharactersByLocation);
    const selectedCharacter = filterdCharacters?.find((character: ICharacters) => character.id === characterId);
    const otherCharacters = filterdCharacters?.filter((character: ICharacters) => character.id !== characterId);

    console.log(selectedCharacter)

  return (
    <>
        <div className=" flex items-center justify-center mb-8">
    <img
      className="w-full h-40 object-contain  "
      src="/assets/banner.png"
      alt=""
    />
  </div>
        <CharacterDetailCard selected={selectedCharacter} other={otherCharacters}/>
       
    </>
  )
}

export default CharacterDetail