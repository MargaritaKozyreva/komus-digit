import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./Search.module.scss";

import { Input } from "@ui/Input/Input";
import Button from "@ui/Button";

import { URLSearchParamsInit } from "react-router-dom";
import cn from "classnames";

export interface SearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchParam?: any;
  searchQuery: any;
  setSearchParam?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void;
}

export const Search: React.FC<SearchProps> = props => {
  const { className, searchParam, setSearchParam, searchQuery, ...attr } = props;
  const [searchValue, setSearchValue] = useState<string>(searchQuery);

  const goToSearch = () => {
    setSearchParam &&
      setSearchParam(
        { search_user: searchValue },
        {
          replace: true,
        }
      );
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...attr}>
      <Input
        placeholder="Поиск"
        type="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className={styles.searchButton} onClick={goToSearch}>
        <img
          src={`${process.env["API"]}/komus_num/app/images/icons/search.svg`}
        />
      </Button>
    </div>
  );
};
