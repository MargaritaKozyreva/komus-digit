import React, { useEffect, useState } from "react";
import block from "@images/block.png";

import "./styles.scss";
import { httpService } from "@core/service";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  const [state, setState] = useState<Array<IHeaderBottom>>([]);

  const shortLinkObjects = [
    {
      id: 1,
      title: "Конкурс «Лучший кейс» - итоги голосования!",
      link: "/_wt/7046693968949027909",
    },
    {
      id: 2,
      title: "Марафон Открытых вебинаров, Часть 2",
      link: "/_wt/7034862682835399928",
    },
    {
      id: 3,
      title: "Представляем Марафон Открытых вебинаров!",
      link: "/_wt/7034862682835399928",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await httpService<Array<IHeaderBottom>>(
        "POST",
        "get_short_links",
        undefined
      );
      setState(result.data);
    };
    fetchData();
  }, []);

  interface IHeaderBottom {
    id: number;
    title: string;
    link: string;
  }

  return (
    <div className="heder-bootom">
      <div className="container">
        <div className="header-line-wrapper">
          {shortLinkObjects.map(link => (
            <a
              href={link.link}
              key={link.id}
              className="h-line-item"
              target="_blank"
            >
              <img src={block} alt="block" />
              <p>{link.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
