/* eslint no-underscore-dangle: 0 */
import {
  ADD_BRAND_AND_CATEGORY,
  ADD_BRAND_AND_CATEGORY_SUCCESS,
  ADD_BRAND_AND_CATEGORY_ERROR,
  GET_BRAND_AND_CATEGORY,
  GET_BRAND_AND_CATEGORY_SUCCESS,
  GET_BRAND_AND_CATEGORY_ERROR,
  UPDATE_BRAND_AND_CATEGORY,
  UPDATE_BRAND_AND_CATEGORY_SUCCESS,
  UPDATE_BRAND_AND_CATEGORY_ERROR,
  DELETE_BRAND_AND_CATEGORY,
  DELETE_BRAND_AND_CATEGORY_SUCCESS,
  DELETE_BRAND_AND_CATEGORY_ERROR,
} from '../contants';

const INIT_STATE = {
  loaded: false,
  brand: [],
  category: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_BRAND_AND_CATEGORY:
      return { ...state, loaded: false };

    case ADD_BRAND_AND_CATEGORY_SUCCESS: {
      const { item, type } = action.payload;

      console.log(state[type], item, 'boooomm boomml');
      return {
        ...state,
        loaded: true,
        [type]: { ...state[type], data: [...state[type].data, item] },
      };
    }
    case ADD_BRAND_AND_CATEGORY_ERROR:
      return { ...state, loaded: true, error: action.payload };
    case GET_BRAND_AND_CATEGORY:
      return { ...state, loading: true, error: '' };
    case GET_BRAND_AND_CATEGORY_SUCCESS: {
      const { data, type } = action.payload;
      return {
        ...state,
        loading: false,
        [type]: data,
        error: '',
      };
    }
    case GET_BRAND_AND_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    case UPDATE_BRAND_AND_CATEGORY:
      return { ...state, loaded: false };

    case UPDATE_BRAND_AND_CATEGORY_SUCCESS: {
      const { item, type } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        [type]: { ...state[type], data: [item] },
      };
    }
    case UPDATE_BRAND_AND_CATEGORY_ERROR:
      return { ...state, loaded: true, error: action.payload };

    case DELETE_BRAND_AND_CATEGORY:
      return { ...state, loaded: false };

    case DELETE_BRAND_AND_CATEGORY_SUCCESS: {
      const { id, type } = action.payload;
      const newState = state[type].filter(
        (brandAndCategory) => brandAndCategory.id !== id
      );
      console.log(newState, '---');
      return {
        ...state,
        loaded: true,
        newState,
      };
    }
    case DELETE_BRAND_AND_CATEGORY_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }
    default:
      return { ...state };
  }
};