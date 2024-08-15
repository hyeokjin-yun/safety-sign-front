import React, { createContext, useReducer } from "react";

const initialState = {
  sign_category_id: "",
  display_period_start: "",
  display_period_end: "",
  construction_period_start: "",
  construction_period_end: "",
  sign_image_path: "",
  design_image_path: "",
  owner_consent_image_path: "",
  specification_image_path: "",
  installation_address: "",
  site_photo_path: "",
  installation_height: "",
  sign_width: "",
  sign_height: "",
  local_government: "",
  construction_company_name: "",
  representative_name: "",
  business_license_no: "",
  representative_phone: "",
  administrator_name: "",
  administrator_phone: "",
  administrator_address: "",
  additional_info: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export const ServiceApplicationContext = createContext();

export const ServiceApplicationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ServiceApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ServiceApplicationContext.Provider>
  );
};
