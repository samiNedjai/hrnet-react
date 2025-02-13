export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const addEmployeeAction = (employeeData) => (dispatch) => {
  dispatch({
    type: ADD_EMPLOYEE,
    payload: employeeData,
  });
};

