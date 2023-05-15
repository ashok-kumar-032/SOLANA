import React from "react";
import myImg from "../assets/img/nav_logo.png";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const myData = [
  {
    id: 1,
    tol: "Tool / LIBRARY",
    p: "Core Documentation",
    disc: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    btn: "Learn more",
  },
  {
    id: 2,
    tol: "Tool / LIBRARY",
    p: "Solana Cookbook",
    disc: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    btn: "Learn more",
  },
  {
    id: 3,
    tol: "Tool / LIBRARY",
    p: "Solana Stack Exchange",
    disc: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
    btn: "Learn more",
  },
  {
    id: 4,
    tol: "Tool / LIBRARY",
    p: "Solana Playground",
    disc: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    btn: "Learn more",
  },
  {
    id: 5,
    tol: "Tool / LIBRARY",
    p: "create-solana-dapp",
    disc: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    btn: "Learn more",
  },
  {
    id: 6,
    tol: "Tool / LIBRARY",
    p: "Anchor Docs",
    disc: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
    btn: "Learn more",
  },
  {
    id: 7,
    tol: "Tool / LIBRARY",
    p: "Solana Program Library",
    disc: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
    btn: "Learn more",
  },
  {
    id: 8,
    tol: "Tool / LIBRARY",
    p: "Program Examples",
    disc: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
    btn: "Learn more",
  },
];
const WorkingArrey = () => {
  var settings = {
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
          slidesToShow: 2,
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
    <section className="bg_black py-5">
      <div className="container_my py-5">
        <div className="ps-lg-2" data-aos="zoom-in-up" data-aos-duration="2000">
          <p className="fs_37 clr_white fw_400 ff_Helvetica letter_space">
            Dig deeper.
          </p>
          <p className="fs_20 clr_white fw_400 ff_Helvetica">
            Learn from resources across the greater Solana ecosystem.
          </p>
        </div>
        <Slider {...settings}>
          {myData.map((val) => {
            return (
              <Col lg={4} key={val.id}>
                <div className="p-2 ps-md-3 h-100 group">
                  <div
                    className="tool_box  p-4 box h-100 d-flex justify-content-between flex-column align-items-center position-relative"
                    data-aos="flip-left"
                    data-aos-duration="2000"
                  >
                    <div className="pb-5">
                      <p className="ff_Helvetica fs_12 fw_400 clr_pink tool">
                        {val.tol}
                      </p>
                      <p className="fs_19 clr_white fw_400 ff_Helvetica">
                        {val.p}
                      </p>
                      <p className="clr_white fs_19 fw_400 ff_Helvetica">
                        {val.disc}
                      </p>
                      <p className="clr_white fs_12 fw_400 ff_Helvetica Learn_btn mt-4 pointer position-absolute padding_bottom">
                        {val.btn}
                        <span className="ms-3">
                          <svg
                            className="pointer"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.08008 11L11.0801 1"
                              stroke="#848895"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.08008 1H11.0801V11"
                              stroke="#848895"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </p>
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

export default WorkingArrey;
