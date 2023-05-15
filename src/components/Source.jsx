import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import solana from "../assets/img/solana.webp";

const Source = () => {
  return (
    <section className="bg_black py-5 background">
      <div className="container_my">
        <div
          className="text-center text-lg-start"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <p className="fw_400 ff_Helvetica clr_white fs_36 mb-0 letter_space">
            Go to the source.
          </p>
          <p className="fw_400 ff_Helvetica clr_white fs_20 mt-1 ">
            Read the documentation for Solana and popular tools.
          </p>
        </div>
        <Row>
          <Col
            lg={6}
            xs={12}
            className="mt-4 pe-lg-4"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="d-flex justify-content-between">
              <p className="fw_400 ff_Helvetica clr_white fs_32">Solana Docs</p>
              <span>
                <button className="fw_400 all_btn ff_Helvetica clr_white fs_15 d-inline-block View_btn bg_section effect">
                  View all
                  <span className="ms-3">
                    <svg
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
                </button>
              </span>
            </div>
            <hr className="line" />
            <p className="fw_400 ff_Helvetica clr_white fs_20 mt-5 max_w_Learn ">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </Col>
          <Col
            lg={6}
            xs={12}
          className="mt-4 ps-4"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="d-flex justify-content-between">
              <p className="fw_400 ff_Helvetica clr_white fs_32">Solana Docs</p>
              <span>
                <button className="fw_400 ff_Helvetica all_btn clr_white fs_15 d-inline-block View_btn bg_section effect">
                  View all
                  <span className="ms-3">
                    <svg
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
                </button>
              </span>
            </div>
            <hr className="line" />
            <p className="fw_400 ff_Helvetica clr_white fs_20 mt-5 max_w_Learn">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </Col>
        </Row>
      </div>
      {/* 2 */}
      <div className="container_my pt-5 mt-5">
        <Row>
          <Col
            lg={6}
            className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="fw_400 ff_Helvetica clr_white fs_32">
              Solana Changelog
            </p>
            <p className="fw_400 ff_Helvetica clr_white fs_20 Some_w">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <button className="fw_400 all_btn ff_Helvetica clr_white fs_15 bg-black Latest_btn mt-lg-5 mt-3 effect">
              LATEST EPISOGE
              <span className="ms-2 effect">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5176 21C16.0404 21 20.5176 16.5228 20.5176 11C20.5176 5.47715 16.0404 1 10.5176 1C4.99473 1 0.517578 5.47715 0.517578 11C0.517578 16.5228 4.99473 21 10.5176 21Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5176 15L14.5176 11L10.5176 7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.51758 11H14.5176"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center mt-4"
            data-aos-duration="1500"
            data-aos="fade-left"
          >
            <img className=" w-75" src={solana} alt="solana" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Source;
