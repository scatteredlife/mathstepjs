import { configureStore } from '@reduxjs/toolkit';
import mathStep from '../views/MathStep/reducer';

export default configureStore({
  reducer: {
    mathStep: mathStep,
  },
});
