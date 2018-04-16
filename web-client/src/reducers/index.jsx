const initState = [{
  _id: '1',
  title: 'title',
  description: 'description',
  complited: true,
  date: '16.04.2018',
  comments: [
    { title: 'test comment 1', _id: '1' },
    { title: 'test comment 1', _id: '2' },
  ],
},
{
  _id: '2',
  title: 'title',
  description: 'description',
  complited: true,
  date: '16.04.2018',
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
          _id: Date(), // todo
          complited: false,
          date: Date(),
          comments: [],
        }];
    }
    case 'ADD_COMMENT':
      return state;
    default:
      return state;
  }
};

