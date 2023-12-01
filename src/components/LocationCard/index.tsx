import { useNavigate } from "react-router-dom";
import {  ICharacterCard, ICharacterCardList, ICharacters, ILocationCard, ILocations } from "../../types/Type";
import { AppDispatch, RootState } from "../../redux/store" // RootState, Redux store'un kök durumunu temsil eden bir türdür
import { useDispatch, useSelector } from 'react-redux';
import { loadFilteredCharacters } from "../../redux/characterSlice";


const LocationCard = ({ location }: ILocationCard) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters.allCharacters);

  
  const getCharactersFilteredByLocation = async (locationName:string) => {
    console.log(locationName)
    try {
      const filteredCharacters = characters?.filter((character:ICharacters)=>character.location.name===locationName)
      console.log(filteredCharacters)
      dispatch(loadFilteredCharacters(filteredCharacters))
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
   
  };
 

  const handleNavigate = async (location:ILocations) => {
    let locationName:string=location.name
    navigate("/characters");
    getCharactersFilteredByLocation(locationName)
    
  };

  return (
    <div className="bg-cyan-500 max-w-lg shadow overflow-hidden sm:rounded-lg">
      <div
        className="px-4 py-5 sm:px-6 cursor-pointer"
        onClick={() => handleNavigate(location)}
      >
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center ">
          {location.name}
        </h3>
      </div>
      <div className="border-t border-gray-200 bg-slate-300">
        <dl>
          <div className=" px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 ">Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location.type}
            </dd>
          </div>
          <div className=" px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Dimension</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location.dimension}{" "}
            </dd>
          </div>
          <div className=" px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Resident Count
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location.residents.length}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default LocationCard;
