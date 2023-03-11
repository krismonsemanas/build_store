import { createSlice } from "@reduxjs/toolkit";

interface LogoutModalProps {
  isOpen: boolean;
}

const initialState: LogoutModalProps = {
  isOpen: false,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    openLogoutModal: (state) => {
      state.isOpen = true;
    },
    hideLogoutModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLogoutModal, hideLogoutModal } = logoutSlice.actions;

export default logoutSlice.reducer;
