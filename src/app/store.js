import { configureStore } from '@reduxjs/toolkit';
import blog from '../views/Blog/reducer';

export default configureStore({
  reducer: {
    blog: blog,
  },
});
