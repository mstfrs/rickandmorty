import React from "react";
import { CardAvatarProps } from "../../types/Type";

export const CardAvatar: React.FC<CardAvatarProps> = ({ otherCharacter }) => {
  return (
    <div className=" cursor-pointer py-4 px-4 w-[24rem] h-[10rem] mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={otherCharacter.image}
        alt=""
      />
      <div className="text-center space-y-2 sm:text-left w-full">
        <div className="space-y-0.5 ">
          <p className="text-lg text-black font-semibold">
            {otherCharacter.name}
          </p>
          <p className="text-slate-500 font-medium">
            {otherCharacter.location.name}
          </p>
        </div>
        <div
          className={`${
            otherCharacter.status === "Alive"
              ? "bg-green-500 text-white"
              : otherCharacter.status === "Dead"
              ? "bg-red-500 text-white"
              : "bg-gray-300"
          } px-4 py-1 text-sm text-center w-24  font-semibold rounded-full border border-purple-200  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`}
        >
          {otherCharacter.status}
        </div>
      </div>
    </div>
  );
};
