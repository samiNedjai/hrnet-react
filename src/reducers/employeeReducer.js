import { ADD_EMPLOYEE } from "../actions/employeeAction";

const initialState = {
  employees: [],
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
}
