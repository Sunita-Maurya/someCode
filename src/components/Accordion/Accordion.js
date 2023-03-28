import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = () => {
  return (
    <div className=" py-32 ">
      <div className=" text-center ">
        <h3>FLUTTERFLIES</h3>
        <h1 className="w-full">ASKED QUESTIONS</h1>
      </div>
      <div className="tabs-box  md:text-auto text-sm ">
        <div className="acord ">
          <input type="checkbox" name="mytabs" id="tb-one" />
          <div className="relative flex items-center pl-5 summary">
            <label htmlFor="tb-one" className="  w-full bg-one md:leading-10">
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <div className="arrow-border">
              <IoIosArrowDown className="accordArrow" />
            </div>
          </div>
          <div className="content">
            <span className="pt-3 pr-5 block md:text-auto text-sm">
              wwew Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugi pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
            </span>
          </div>
        </div>

        <div className="acord">
          <input type="checkbox" name="mytabs" id="tb-two" />
          <div className="relative flex pl-5 summary">
            <label htmlFor="tb-two" className="w-full  bg-two md:leading-10">
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <div className="arrow-border">
              <IoIosArrowDown className="accordArrow" />
            </div>
          </div>

          <div className="content">
            <span className="pt-3 pr-5 block md:text-auto text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugi pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
            </span>
          </div>
        </div>

        <div className="acord">
          <input type="checkbox" name="mytabs" id="tb-three" />

          <div className="pl-5 summary">
            <label
              htmlFor="tb-three"
              className=" w-full bg-three md:leading-10"
            >
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <div className="arrow-border">
              <IoIosArrowDown className=" accordArrow " />
            </div>
          </div>

          <div className="content">
            <span className="pt-3 pr-5 block md:text-auto text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugi pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
            </span>
          </div>
        </div>
        <div className="acord">
          <input type="checkbox" name="mytabs" id="tb-fore" />

          <div className="pl-5 summary">
            <label
              htmlFor="tb-fore"
              className=" w-full bg-fore md:text-auto text-sm md:leading-10"
            >
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <div className="arrow-border">
              <IoIosArrowDown className=" accordArrow " />
            </div>
          </div>

          <div className="content">
            <span className="pt-3 pr-5 block md:text-auto text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugi pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
