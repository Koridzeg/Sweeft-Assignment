const userState = [
  {
    id: 0,
    name: "Lela Pataraia",
    number: 591233123,
  },
  {
    id: 2,
    name: "Gela Pataraia",
    number: 591215423,
  },
  {
    id: 3,
    name: "Giorgi Giorgadze",
    number: 591234455,
  },
  {
    id: 4,
    name: "Sandro Qaridze",
    number: 555333123,
  },
  {
    id: 5,
    name: "Mariam Peradze",
    number: 591233152,
  },
  {
    id: 6,
    name: "Giorgi Koridze",
    number: 591233123,
  },
];

const contactReducer = (state = userState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, number: null }];
      return state;
    default:
      return state;
  }
};

export default contactReducer;
