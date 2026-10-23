import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",

  initialState: {
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 22299,
        image: "laptop.png",
        description: "Powerful laptop for work and study",
      },

      {
        id: 2,
        name: "Shoes",
        price: 2299,
        image: "shoes.jpg",
        description: "Comfortable shoes for everyday use",
      },

      {
        id: 3,
        name: "Watch",
        price: 1299,
        image: "watch.png",
        description: "Stylish watch with a modern design",
      },

      {
        id: 4,
        name: "Bag",
        price: 1099,
        image: "bag.jpg",
        description: "Spacious and stylish bag for daily use",
      },

      {
        id: 5,
        name: "Shirt",
        price: 699,
        image: "shirt.jpg",
        description: "Soft and comfortable casual shirt",
      },

      {
        id: 6,
        name: "Phone",
        price: 12999,
        image: "phone.png",
        description: "Smartphone with smooth performance",
      },

      {
        id: 7,
        name: "T-Shirt",
        price: 499,
        image: "tshirt.jpg",
        description: "Soft cotton t-shirt for everyday wear",
      },

      {
        id: 8,
        name: "Headphone",
        price: 1999,
        image: "headphone.png",
        description: "Clear sound with comfortable fit",
      },
    ],
  },

  reducers: {},
});

export default productSlice.reducer;