import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogList: [
    {
      id: 1,
      imageUrl:
        "https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg",
      day: "31",
      month: "Oct 2023",
      date: "31st October, 2023",
      title: "8 Inspiring Ways To Wear Winter Clothes",
      content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      author: "Admin",
    },
    {
      id: 2,
      imageUrl:
        "https://preview.colorlib.com/theme/cozastore/images/blog-05.jpg",
      day: "29",
      month: "Oct 2023",
      date: "29th October, 2023",
      title: "The Great Big List of Men's Gifts for the Holidays",
      content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      author: "Admin",
    },
    {
      id: 3,
      imageUrl:
        "https://preview.colorlib.com/theme/cozastore/images/blog-06.jpg",
      day: "26",
      month: "Oct 2023",
      date: "26th October, 2023",
      title: "5 Winter-to-Spring Fashion Trends to Try Now",
      content:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      author: "Admin",
    },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
