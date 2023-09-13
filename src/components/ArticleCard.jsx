import React from "react";
import { BsCheckLg, BsFillCheckCircleFill, BsFillPatchCheckFill} from "react-icons/bs";
//import { AiOutlineClose } from "react-icons/ai";

import { images } from "../constants";


const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.Post1Image}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />

      <div className="p-5">
        <h3 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Healthy Lifetsyle
        </h3>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.PostProfileImage}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h5 className="font-bold italic text-dark-hard text-sm md:text-base">
                Shadrack Kiplangat
              </h5>
              <div className="flex items-center gap-x-2">
                <span className="w-fit">
                  <BsFillPatchCheckFill className="w-5.5 h-4.5 text-[#000000]" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">11 Sept 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
