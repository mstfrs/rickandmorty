import { useNavigate } from "react-router-dom";
import { ICharacterCard, ICharacters } from "../../types/Type";
import { useDispatch } from "react-redux";
import { setSelectedCharacter } from "../../redux/characterSlice";

export const CharacterCard = ({ character }: ICharacterCard) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleNavigate = async (character:ICharacters) => {
    const id=character.id
    navigate(`/characters/characterdetail/${id}`);
    dispatch(setSelectedCharacter(character))
  };
  return (
    <div
      className="block relative group transition hover:scale-105 hover:-rotate-1 max-w-sm cursor-pointer"
      onClick={() => handleNavigate(character)}
    >
      
        <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
          <img
            alt=""
            src={character.image}
            loading="lazy"
            className="object-center object-cover"
          />
        </div>

        <div className="p-2 space-y-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="flex-1 text-base font-medium text-gray-900">
              {character.name}
            </h3>

            <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
              {character.status}
              <svg
                className="w-3 h-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>

          <p className="text-sm text-gray-500">{character.type}</p>
        </div>
     
    </div>
  );
};
