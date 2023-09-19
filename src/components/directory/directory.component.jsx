import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const sections = [
  {
    title: "men",
    subTitle: "Season 2023",
    imageUrl:
      "https://preview.colorlib.com/theme/cozastore/images/banner-05.jpg",
    id: 1,
    linkUrl: "shop/men",
  },
  {
    title: "women",
    subTitle: "Season 2023",
    imageUrl:
      "https://preview.colorlib.com/theme/cozastore/images/banner-04.jpg",
    id: 2,
    linkUrl: "shop/women",
  },
  {
    title: "accessories",
    subTitle: "New Trend",
    imageUrl:
      "https://preview.colorlib.com/theme/cozastore/images/banner-09.jpg",
    id: 3,
    linkUrl: "shop/accessories",
  },
  {
    title: "bags",
    subTitle: "New Trend",
    imageUrl:
      "https://preview.colorlib.com/theme/cozastore/images/banner-08.jpg",
    //   size: "large",
    id: 4,
    linkUrl: "shop/bags",
  },
  {
    title: "watches",
    subTitle: "New Trend",
    imageUrl:
      "https://preview.colorlib.com/theme/cozastore/images/banner-07.jpg",
    //   size: "large",
    id: 5,
    linkUrl: "shop/watches",
  },
];

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, subTitle, imageUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          subTitle={subTitle}
        />
      ))}
    </div>
  );
};

export default Directory;
