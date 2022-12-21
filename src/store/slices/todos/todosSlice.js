
import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                done: false,
                todo: "tarea 1"
            },
            {
                done: false,
                todo: "tarea 2"
            }
        ]
    },
    reducers: {
        addTodo: (state, {payload} ) => {
            state.todos.push(
                {
                    done: false,
                    todo: payload
                }
            );
        },
    }
});


// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions;