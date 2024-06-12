// import { ADD_ITEM, SET_SESSION_TOKEN } from "./actions";
// import visits from "../visitList/visits";
//
// const initialState = {
//   list: {
//     // items: [],
//     items: visits,
//     page: 1,
//     total_pages: 1,
//     limit: 10,
//   },
//   form: {
//     visit_purpose: "",
//     visit_date: "",
//     visit_description: "",
//     visit_status: "",
//     chip: "",
//     patient_name: "",
//     species: "",
//     age: 0,
//     breed: "",
//     owner_name: "",
//     telephone_number: "",
//     owner_surname: "",
//     email: "",
//     pesel: "",
//   },
//   session: {
//     name: "",
//     token: "",
//   },
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_SESSION_TOKEN:
//       return {
//         ...state,
//         session: {
//           ...state.session,
//           token: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
//
// export default reducer;
