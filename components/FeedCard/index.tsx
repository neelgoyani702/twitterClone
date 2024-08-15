import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-t-0 border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/103193259?v=4"
            alt="user-image"
            height={36}
            width={36}
          />
        </div>
        <div className="col-span-11">
          <h5>Neel Goyani</h5>
          <p className="text-sm">
            BIG NEWS 🚨 Mamata Banerjee hits back at ally Congress RAHUL GANDHI
            : "The attempt to save the accused instead of providing justice to
            the victim raises serious questions on local administration" MAMATA
            BANERJEE : "I want to ask Congress. How many incidents have taken
            place in
          </p>
          <div className="flex justify-evenly mt-4 items-center w-[90%]">
            <div>
                <BiMessageRounded />
            </div>
            <div>
                <FaRetweet />
            </div>
            <div>
                <AiOutlineHeart />
            </div>
            <div>
                <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
