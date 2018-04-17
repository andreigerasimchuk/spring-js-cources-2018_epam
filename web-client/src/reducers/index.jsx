import uuid from 'uuid/v1';
import dateFormat from 'dateformat';
import { saveList, getList } from '../utils';

const localList = getList();

export const list = (state = localList || [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item } = action;
      const currentState = [
        ...state,
        {
          ...item,
          _id: uuid(),
          complited: false,
          date: dateFormat(),
          isLike: false,
          comments: [],
        }];
      saveList(currentState);
      return currentState;
    }
    case 'DELETE_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState.splice(index, 1);
      saveList(currentState);
      return [...currentState];
    }
    case 'LIKE_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].isLike = !currentState[index].isLike;
      currentState[index]._id = uuid();
      saveList(currentState);
      return [...currentState];
    }
    case 'COMPLITED_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].complited = !currentState[index].complited;
      currentState[index]._id = uuid();
      saveList(currentState);
      return [...currentState];
    }
    case 'ADD_COMMENT': {
      const { _id, title } = action.item;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].comments = [...currentState[index].comments, { title, _id: uuid() }];
      currentState[index]._id = uuid();
      saveList(currentState);
      return [...currentState];
    }
    case 'UPDATE_ITEM': {
      const { _id, title, description } = action.item;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].title = title;
      currentState[index].description = description;
      currentState[index]._id = uuid();
      saveList(currentState);
      return [...currentState];
    }
    default:
      return state;
  }
};
