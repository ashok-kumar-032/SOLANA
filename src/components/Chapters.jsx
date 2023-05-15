import React from "react";
import img_1 from "../assets/img/img_1.webp";
import img_2 from "../assets/img/img_2.webp";
import img_3 from "../assets/img/img_3.webp";
import img_4 from "../assets/img/img_4.webp";
import img_5 from "../assets/img/img_5.webp";
import img_6 from "../assets/img/img_6.webp";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const myData = [
  {
    id: 1,
    btn: "14 Chapters",
    disc: "Buildspace",
    bgimg: img_1,
  },
  {
    id: 2,
    btn: "12 Chapters",
    disc: "Solana Bytes",
    bgimg: img_2,
  },
  {
    id: 3,
    btn: "1 Chapters",
    disc: "Scaffold Series",
    bgimg: img_3,
  },
  {
    id: 4,
    btn: "3 Chapters",
    disc: "Freecodecamp Solana Course",
    bgimg: img_4,
  },
  {
    id: 5,
    btn: "167 Chapters",
    disc: "Solana Development by Knox",
    bgimg: img_5,
  },
  {
    id: 6,
    btn: "8 Chapters",
    disc: "Solana Bootcamp",
    bgimg: img_6,
  },
];
const Chapters = () => {
  var Chapters = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_black">
      <div className="container_my">
        <Slider {...Chapters}>
          {myData.map((val) => {
            return (
              <Col lg={4} key={val.id}>
                <div
                  className="px-3 box_1 "
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <div
                    className="bg_img"
                    style={{ backgroundImage: `url(${val.bgimg})` }}
                  >
                    <div className="padding_top px-5 ">
                      <button className="clr_white fs_11 fw_400 ff_Helvetica Chapters_btn  all_btn">
                        {val.btn}
                      </button>
                      <div className="d-flex justify-content-between">
                        <p className="clr_white fs_18 fw_400 ff_Helvetica pt-3">
                          {val.disc}
                        </p>
                        <span className="chapter_img  mt-3 effect">
                          <svg
                            className="effect"
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
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Chapters;
