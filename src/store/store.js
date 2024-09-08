import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState={
    task:[]
};
const taskSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload);
        },
        removeTask:(state,action)=>{
           state.task=state.task.filter((task,index)=>index!==action.payload);
        }
    }
});

export const {addTask, removeTask}=taskSlice.actions;

export const store=configureStore({
    reducer:{
        task:taskSlice.reducer
    }
});