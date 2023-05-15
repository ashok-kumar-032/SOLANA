import React, { useState } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import nav_logo from "../assets/img/nav_logo.webp";
import hero from "../assets/img/hero.webp";
import hero_back from "../assets/img/hero_back.png";
const Hero = () => {
  const [first, setFirst] = useState(true);
  function clickshow() {
    setFirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <header className=" d-flex flex-column bg_black ">
      <Nav className="py-4">
        <div className="container_my">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center ">
              <img
                className="logo_width pointer z-7"
                src={nav_logo}
                alt="nav_logo"
              />
            </div>
            <ul
              className={
                first
                  ? "nav_show d-flex gap-5 align-items-center 0"
                  : "nav_show d-flex showw gap-5 mb-0 align-items-center ps-0"
              }
            >
              {/*  */}
              <div className="dropdown">
                <p className="fw_400 ff_Helvetica clr_grey fs_17 pointer mb-0 ms-lg-4 d-flex footer_hover footer_effect nav_hover">
                  Learn
                  <span className="ps-2">
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </p>
                <div className="dropdown-content">
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="dropdown">
                <p className="fw_700 ff_Helvetica clr_white fs_17 pointer mb-0 ms-lg-4 d-flex footer_hover footer_effect nav_hover">
                  Build
                  <span className="ps-2">
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#E6E6E6"
                      />
                    </svg>
                  </span>
                </p>
                <div className="dropdown-content">
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="dropdown">
                <p className="fw_400 ff_Helvetica clr_grey fs_18 pointer mb-0 ms-lg-4 d-flex footer_hover footer_effect nav_hover">
                  Network
                  <span className="ps-2">
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </p>
                <div className="dropdown-content">
                  <p className="fw_700 ff_Helvetica clr_white fs_18 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_18 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_18 pointer">
                    Hello
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="dropdown">
                <p className="fw_400 ff_Helvetica clr_grey fs_17 pointer mb-0 ms-lg-4 d-flex footer_hover footer_effect nav_hover">
                  Community
                  <span className="ps-2">
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </p>
                <div className="dropdown-content">
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                  <p className="fw_700 ff_Helvetica clr_white fs_17 pointer">
                    Hello
                  </p>
                </div>
              </div>
            </ul>

            <div className="z-7 d-lg-none">
              <h3 className="clr_white menu_icon" onClick={clickshow}>
                <BiMenu />
              </h3>
            </div>
          </div>
        </div>
      </Nav>
      <section className="position-relative">
        <span>
          <img
            className="position-absolute end-0 d-none d-md-block"
            src={hero_back}
            alt="hero_back"
          />
        </span>
        <div className="container_my pt-lg-5">
          <Row className="d-flex flex-column-reverse">
            <Col
              lg={6}
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start mt-xl-4"
            >
              <p className="fw_400 ff_Helvetica clr_white fs_94 builders_max_w letter_space_48">
                Developer Resources
              </p>
              <p className="fw_400 ff_Helvetica clr_light_white fs_21 builders_max_w">
                A manual for joining the Solana ecosystem. By builders for
                builders.
              </p>
              <div className="d-flex align-items-center mt-4">
                <button className="fw_400 all_btn ff_Roboto clr_black fs_15 bg_light_green Build_btn effect">
                  Build Now
                </button>
                <button className="fw_400 all_btn ff_Roboto clr_white bg_black Stack_btn fs_15 ms-3 effect">
                  Stack Exchange{" "}
                  <span className="ms-2">
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                        fill="#848895"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex flex-column flex-column-revers"
            >
              <div className="d-flex flex-column-reverse align-items-center">
                <img
                  className="max_w position-absolute hero_img d-none d-lg-block"
                  src={hero}
                  alt="hero"
                />
                <img
                  className="max_w_1 d-block d-lg-none"
                  src={hero}
                  alt="hero"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </header>
  );
};
export default Hero;
