import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogList: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1701743807240-9ee504f72417?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
