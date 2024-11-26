import { create } from "zustand";

const useStore = create((set) => ({
  signupData: {
    name: "",
    email: "",
    password: "",
    mobile: "",
  },
  loginData: {
    email: "",
    password: "",
  },
  forgotPasswordEmail: "",
  newPassword: "",
  setSignupData: (data) =>
    set((state) => ({
      signupData: { ...state.signupData, ...data },
    })),
  setLoginData: (data) =>
    set((state) => ({
      loginData: { ...state.loginData, ...data },
    })),

  setForgotPasswordEmail: (email) => set({ forgotPasswordEmail: email }),

  setNewPassword: (password) => set({ newPassword: password }),

  clearSignupData: () =>
    set({
      signupData: {
        name: "",
        email: "",
        password: "",
        mobile: "",
      },
    }),
    
  clearLoginData: () =>
    set({
      loginData: {
        email: "",
        password: "",
      },
    }),
}));

export default useStore;
