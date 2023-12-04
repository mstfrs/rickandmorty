import { useNavigate } from "react-router-dom";
import { ICharacterCard, ICharacters } from "../../types/Type";
import { useDispatch } from "react-redux";
import { setCharacter } from "../../redux/characterSlice";
import { AppDispatch } from "../../redux/store";

export const CharacterCard = ({ character }: ICharacterCard) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const handleNavigate = async (character: ICharacters) => {
    await dispatch(setCharacter(character));
    navigate(`/characters/characterdetail`);
  };
  return (
    <div
      className="flex flex-col justify-center  relative group transition hover:scale-105 hover:-rotate-1 w-[60%]  cursor-pointer"
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

      <div className="p-2 space-y-1 ">
        <div className="flex items-center justify-between gap-4">
          <h3 className="flex-1 text-base font-medium text-gray-900">
            {character.name}
          </h3>

          <span
            className={`${
              character.status === "Alive"
                ? "bg-green-500 text-white"
                : character.status === "Dead"
                ? "bg-red-500 text-white"
                : "bg-gray-300"
            } mt-1 items-center gap-1 px-4 py-1 text-sm text-center w-24  font-semibold rounded-full border `}
          >
            {character.status}
          </span>
        </div>
      </div>
    </div>
  );
};
