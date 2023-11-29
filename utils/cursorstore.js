import {create} from 'zustand'

const useCursorEvents = create((set) => ({
  active:false,
  updateActive: () => set((state) => ({ active: !state.active})),
  }))
  
export default useCursorEvents;
