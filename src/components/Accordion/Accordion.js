import React from "react";
import './Accordion.css'
import { IoIosArrowDown } from "react-icons/io";
const Accordion = () => {
  const [check, setCheck] = React.useState(false);
  return (
    <div className=" py-32 ">
      <div className=" text-center ">
        <h3>FLUTTERFLIES</h3>
        <h1 className="w-full">CLARITY OF FUTURE</h1>
      </div>
      <div className="tabs-box">
        <div className="acord ">
          <input type="checkbox" name="mytabs" id="tb-one" />
          <div className="relative flex items-center pl-5 summary">
            <label htmlFor="tb-one" className="  w-full bg-one md:leading-10">
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <IoIosArrowDown className="accordArrow" />
          </div>
          <div className="content">
            <span className="square"></span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugi pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </div>
        </div>

        <div className="acord">
          <input type="checkbox" name="mytabs" id="tb-two" />
          <div className="relative flex pl-5 summary">
            <label htmlFor="tb-two" className="w-full bg-two md:leading-10">
              Lorem ipsum is placeholder text commonly used in the graphic
            </label>
            <IoIosArrowDown className="accordArrow" />
          </div>

          <div className="content">
            <span className="square"></span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugi pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
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
            <IoIosArrowDown className=" accordArrow " />
          </div>

          <div className="content">
            <span className="square"></span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugi pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
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
            <IoIosArrowDown className=" accordArrow " />
          </div>

          <div className="content">
            <span className="square"></span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugi pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
