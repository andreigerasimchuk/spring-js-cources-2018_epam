import uuid from 'uuid/v1';

const initState = [{
  _id: '1',
  title: 'title',
  description: 'description',
  complited: true,
  date: '16.04.2018',
  isLike: false,
  comments: [
    { title: 'test comment 1', _id: '1' },
    { title: 'test comment 1', _id: '2' },
  ],
},
{
  _id: '2',
  title: 'title',
  description: 'description',
  complited: false,
  date: '16.04.2018',
  isLike: false,
  comments: [
    { title: 'test comment 1', _id: '1' },
    { title: 'test comment 1', _id: '2' },
  ],
},
];

export const list = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item } = action;
      return [
        ...state,
        {
          ...item,
          _id: uuid(),
          complited: false,
          date: Date(),
          isLike: false,
          comments: [],
        }];
    }
    case 'DELETE_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState.splice(index, 1);
      return [...currentState];
    }
    case 'LIKE_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].isLike = !currentState[index].isLike;
      currentState[index]._id = uuid();
      return [...currentState];
    }
    case 'COMPLITED_ITEM': {
      const { _id } = action;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].complited = !currentState[index].complited;
      currentState[index]._id = uuid();
      return [...currentState];
    }
    case 'ADD_COMMENT': {
      const { _id, title } = action.item;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].comments = [...currentState[index].comments, { title, _id: uuid() }];
      currentState[index]._id = uuid();
      return [...currentState];
    }
    case 'UPDATE_ITEM': {
      const { _id, title, description } = action.item;
      const currentState = [...state];
      const index = currentState.findIndex(item => item._id === _id);
      currentState[index].title = title;
      currentState[index].description = description;
      currentState[index]._id = uuid();
      return [...currentState];
    }
    default:
      return state;
  }
};
