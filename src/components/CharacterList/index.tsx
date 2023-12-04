import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard";
import { ICharacters } from "../../types/Type";
import { RootState, AppDispatch } from "../../redux/store";
import Paginate from "../Paginate";
import LoadingPage from "../LoadingPage/CardLoading";
import {
  getCharacters,
  loadFilteredCharacters,
} from "../../redux/characterSlice";
import { Radio, RadioChangeEvent } from "antd";

const CharacterList = () => {
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [value4, setValue4] = useState("All");

  const characters = useSelector((state: RootState) => state.characters);
  console.log(characters.loading);
  const selectedLocation = useSelector(
    (state: RootState) => state.locations.selectedLocation
  );
  const filtered = characters.allCharacters?.filter((character: ICharacters) =>
    value4 === "All"
      ? character.location.name === selectedLocation
      : character.location.name === selectedLocation &&
        character.status === value4
  );

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(loadFilteredCharacters(filtered));
  }, [dispatch]);

  const pageSize = 6;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayeddata = filtered?.slice(startIndex, endIndex);

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value);
   
  };

  return (
    <div className="flex flex-col justify-between h-[50%]">
      <div className="flex gap-4 my-4">
        <Radio.Group
          onChange={onChange4}
          value={value4}
          optionType="default"
          style={{}}
          className="flex gap-4"
        >
          <Radio.Button
            value="All"
            className="rounded-3xl border font-semibold  checked:bg-green-500 text-blue-500 border-blue-500  px-3 py-1  "
          >
            All
          </Radio.Button>
          <Radio.Button
            value="Alive"
            className="rounded-3xl border font-semibold  border-green-500 text-green-500 px-3 py-1 "
          >
            Alive
          </Radio.Button>
          <Radio.Button
            value="Dead"
            className="rounded-3xl border font-semibold  border-red-500 text-red-500 px-3 py-1"
          >
            Dead
          </Radio.Button>
          <Radio.Button
            value="unknown"
            className="rounded-3xl border font-semibold  border-gray-500 text-gray-500 px-3 py-1"
          >
            Unknown
          </Radio.Button>
        </Radio.Group>
      </div>
      {(characters.loading || filtered.length === 0) && <LoadingPage />}

      {characters.error && characters.error}
      {!characters.loading && (
        <>
          <div
            className={` grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  `}
          >
            {displayeddata?.map((character, index) => (
              <CharacterCard character={character} key={index} />
            ))}
          </div>

          <Paginate
            totalItems={filtered?.length || 0}
            itemsPerPage={pageSize}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default CharacterList;
