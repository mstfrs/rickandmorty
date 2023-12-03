import { useNavigate } from "react-router-dom";
import { ILocationCard, ILocations } from "../../types/Type";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/locationSlice";

const LocationCard = ({ location }: ILocationCard) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleNavigate = async (location: ILocations) => {
    dispatch(setLocation(location.name));
    navigate("/characters");
  };

  return (
    <div className="bg-cyan-500 w-[21rem] h-60 max-w-lg shadow overflow-hidden sm:rounded-lg">
      <div
        className="px-4 py-5 sm:px-6 cursor-pointer"
        onClick={() => handleNavigate(location)}
      >
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center ">
          {location?.name}
        </h3>
      </div>
      <div className="border-t border-gray-200 bg-slate-300 h-full">
        <dl>
          <div className=" px-4 py-3 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 ">Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location?.type}
            </dd>
          </div>
          <div className=" px-4 py-3 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Dimension</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location?.dimension}{" "}
            </dd>
          </div>
          <div className=" px-4 py-3 grid grid-cols-3 gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 w-32">
              Resident Count
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-[20%]">
              {location.residents?.length}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default LocationCard;
