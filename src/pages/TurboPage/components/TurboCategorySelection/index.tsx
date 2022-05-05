import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { digitalCategoryMockData } from "@src/pages/DigitalPage/components/DigitalCategorySelection/mockData/DigitalCategoryContext";
import { IDigitalCategorySelectionData } from "@src/pages/DigitalPage/components/DigitalCategorySelection/types";
import useData from "@src/hooks/getData/getDataHook";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import "./styles.scss";

const TurboCategorySelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useData<
    IDigitalCategorySelectionData[] | []
  >("POST", "get_turbo_category", undefined);

  // const data = digitalCategoryMockData;
  // const isLoading = false;
  // const isError = false;

  return (
    <WithSkeleton
      isLoading={isLoading === true}
      isEmpty={data === null}
      error={isError}
    >
      <div className="categorySelection__wrapper">
        <div className="header__info">
          <div className="header__info-block">
            {data?.map((item, i) => (
              <a
                href={item.link}
                className={`header__info-item header__info-item-${i + 1}`}
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
              src={`${process.env["API"]}/komus_num/app/images/content/index-3-head.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="animation-block__slogan animation-block__slogan2">
          <img
            className="animation-block__sloganImage"
            src={`${process.env["API"]}/komus_num/app/images/bgtext2.svg`}
            alt=""
            title=""
          />
        </div>
      </div>
    </WithSkeleton>
  );
};

export { TurboCategorySelection };
