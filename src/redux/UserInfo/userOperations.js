import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "api/instance";

export const updateThemeThunk = createAsyncThunk(
  '@@userInfo/theme',
    async (payload, { rejectWithValue }) => {
        try {
          console.log(payload);
          const res = await instance.patch('users/theme', payload)
          return res.data;
      } catch (error) {
        return rejectWithValue(error.response.status)
      }
  }
);
