import React from "react";

import AnimatedMen from "@images/man_alone.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { modalActions } from "@modules/Modal/redux/ModalSlices";
import { ModalKey } from "@modules/Modal/components/ModalController";

import "./styles.scss";
import useData from "@src/hooks/getData/getDataHook";
import { IDigitalCategorySelectionData } from "./types";
import { digitalCategoryMockData } from "./mockData/DigitalCategoryContext";
import { WithSkeleton } from "@src/ui/WithSkeleton";

const DigitalCategorySelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useData<IDigitalCategorySelectionData[] | []>(
  	'POST',
  	'get_digital_category',
  	undefined
  );


  // const data = digitalCategoryMockData;
  // const isLoading = false;
  // const isError = false;

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null} error={isError}>
      <div className="categorySelection__wrapper">
        <div className="header__info">
          <div className="header__info-block">
            {data?.map((item, i) => (
              <a
                href={item.link}
                className={`header__info-item header__info-item-${i+1}`}
              >
                <div className="header__info-itemImage">
                  <img
                    src={`${process.env["API"]}${item.img}`}
                    alt={item.link}
                  />
                </div>
                <p className="header__info-name">{item.title}</p>
              </a>
            ))}
          </div>
          <div className="header__info-image">
            <img
              src={`${process.env["API"]}/komus_num/app/images/content/index-2-head.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="animation-block__slogan animation-block__slogan2">
          <img
            className="animation-block__sloganImage"
            src={`${process.env["API"]}/komus_num/app/images/bgtext.svg`}
            alt=""
            title=""
          />
        </div>
      </div>
    </WithSkeleton>
  );
};

export { DigitalCategorySelection };
