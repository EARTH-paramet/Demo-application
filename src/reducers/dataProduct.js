const initialState = {
  productData: [
    {
      id: "0",
      name: "อาหารกระป๋อง",
      img: "",
      exp: "Today",
      cat: "ooooo",
      des: "xxxxxxxxxx",
      createAt: new Date(),
    },
    {
      id: "1",
      name: "ข้าวกล่อง 7-11",
      img: "",
      exp: "3 Day",
      cat: "ooooo",
      des: "xxxxxxxxxx",
      createAt: new Date(),
    },
    {
      id: "2",
      name: "ไข่ต้ม",
      img: "",
      exp: "20/10/23",
      cat: "ooooo",
      des: "xxxxxxxxxx",
      createAt: new Date(),
    },
    {
      id: "3",
      name: "บัวลอย",
      img: "",
      exp: "20/10/23",
      cat: "ooooo",
      des: "xxxxxxxxxx",
      createAt: new Date(),
    },
    {
      id: "4",
      name: "อาหารกระป๋อง",
      img: "",
      exp: "20/10/23",
      cat: "ooooo",
      des: "xxxxxxxxxx",
      createAt: new Date(),
    },
  ],
  masterProduct: [
    {
      barcode: "1859520500017",
      name: "coke",
      category: "water",
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        productData: state.productData.concat(action.payload)
      }
    case "CHECK_PRODUCT":
      return {
        ...state,
        productData: action.payload,
      };
    default:
      return state;
  }
};
