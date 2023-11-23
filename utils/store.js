import {create} from 'zustand'

const useTrans = create((set) => ({
    trans: "hola",
    updatetrans:  (val) => set((state) => ({ trans: val })),


  }))
  
export default useTrans;