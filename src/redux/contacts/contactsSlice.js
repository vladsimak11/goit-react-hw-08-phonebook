import { createSlice } from "@reduxjs/toolkit"; 
import { toast } from 'react-toastify';

import { logOut } from '../../redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {  
  state.isLoading = true;
};

const handleRejected = (state, action) => {  
  state.isLoading = false;  
  state.error = action.payload;
};

// Add and delete contacts

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {    
    [fetchContacts.pending]: handlePending,    
    [addContact.pending]: handlePending,    
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,    
    [addContact.rejected]: handleRejected,    
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;      
      state.error = null;      
      state.items.unshift(action.payload);
      
      toast.success('Add contact', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    },

    [deleteContact.fulfilled](state, action) {      
      state.isLoading = false;      
      state.error = null;      
      const index = state.items.findIndex(contact => contact.id === action.payload.id);      
      state.items.splice(index, 1); 
      
      toast.error('Delete contact', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },   
  }

});

export const contactsReducer = contactsSlice.reducer;

