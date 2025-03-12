export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const addEmployeeAction = (employeeData) => (dispatch) => {
  dispatch({
    type: ADD_EMPLOYEE,
    payload: {
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      dateOfBirth: employeeData.dateOfBirth,
      startDate: employeeData.startDate,
      department: employeeData.department,
      street: employeeData.address.street,  
      city: employeeData.address.city,
      state: employeeData.address.state,
      zipCode: employeeData.address.zipCode,
    },
  });
};

