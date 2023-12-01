import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard";
import { rickAndMortyService } from "../../services/rickandmorty.service";
import { ICharacters } from "../../types/Type";
import { RootState, AppDispatch } from "../../redux/store";
import { loadAllCharacters } from "../../redux/characterSlice";
import Paginate from "../Paginate";

const CharacterList = () => {
  const [allCharakter, setAllCharakter] = useState<ICharacters[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const filterdCharacters = useSelector((state: RootState) => state.characters.filteredCharactersByLocation);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const getAllCharacters = async () => {
    try {
      for (let x = 0; x < 43; x++) {
        const data = await rickAndMortyService.getAllCharacters(x);

        setAllCharakter((prev) => {
          return [...prev, ...data.results];
        });
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
    // dispatch(loadAllCharacters(allCharakter))
  };

  useEffect(() => {
    const fetchData = async () => {
      if (allCharakter.length === 0) {
        await getAllCharacters();
      }
    };

    fetchData();
  }, [allCharakter]);

  dispatch(loadAllCharacters(allCharakter));

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
const displayeddata = filterdCharacters?.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col justify-between h-[90%]">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {displayeddata?.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
      <Paginate totalItems={filterdCharacters?.length || 0}
          itemsPerPage={pageSize}
          onPageChange={handlePageChange}/>
    </div>
  );
};

export default CharacterList;
