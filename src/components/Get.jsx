import React from "react";
const Get = () => {
  return (
    <section className="bg_black pt-5 ">
      <div className="container_my pt-lg-5 mt-lg-5">
        <div
          className="pt-lg-5 mt-lg-5"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <p className="fw_400 ff_Helvetica clr_white fs_38 letter_space">
            Get started.
          </p>
          <p className="fw_400 ff_Helvetica clr_white fs_20">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
        </div>
        <div
          className="bg_img py-sm-5 py-3 mt-sm-5 "
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <button className="fw_400 ff_Helvetica clr_white fs_11 Chapters_btn">
            17 Chapters
          </button>
          <p className="fw_400 ff_Helvetica clr_white fs_39 mt-3">
            Solana Development Course
          </p>
          <p className="fw_400 ff_Helvetica clr_white fs_18 mt-4 pt-2">
            Quickstart your Solana development starting from nothing to complex
            programs.
          </p>
          <button className="next_btn mt-3 chapter_img">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0801 27.5C21.9836 27.5 27.5801 21.9036 27.5801 15C27.5801 8.09644 21.9836 2.5 15.0801 2.5C8.17652 2.5 2.58008 8.09644 2.58008 15C2.58008 21.9036 8.17652 27.5 15.0801 27.5Z"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0801 20L20.0801 15L15.0801 10"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0801 15H20.0801"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Get;
