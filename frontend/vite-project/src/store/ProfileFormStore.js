import create from "zustand";

const useStore = create((set) => ({
  skills: [],
  profilePic: null,
  media: null,
  gender: "",

  addSkill: (skill) =>
    set((state) => {
      if (skill && !state.skills.includes(skill)) {
        return { skills: [...state.skills, skill] };
      }
    }),

  deleteSkill: (skillToDelete) =>
    set((state) => ({
      skills: state.skills.filter((skill) => skill !== skillToDelete),
    })),
  setGender: (gender) => set(() => ({ gender })),

  setProfilePic: (file) =>
    set(() => ({
      media: URL.createObjectURL(file),
    })),

  setMedia: (file) =>
    set(() => ({
      media: URL.createObjectURL(file),
    })),
  resetForm: () =>
    set(() => ({
      skills: [],
      profilePic: null,
      media: null,
    })),
}));

export default useStore;
