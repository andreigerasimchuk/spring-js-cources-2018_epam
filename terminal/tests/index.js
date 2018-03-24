const assert = require('assert');
const { removeTodo } = require('../controllers/remove');

const todos = [
    {
        "title": "test1",
        "description": "test1",
        "isLiked": true,
        "comments": ["comment1", "comment1"],
        "id": "d5621df0-2f4b-11e8-af19-4159c8d704e5"
    },
    {
        "title": "test2",
        "description": "test2",
        "isLiked": false,
        "comments": [],
        "id": "ad6ce6b0-2f4e-11e8-a6df-3d1a4aa104ba"
    },
    {
        "isLiked": true,
        "comments": ["comment1", "comment2", "comment3", "comment4"],
        "id": "e0415520-2f4f-11e8-b501-2524686651e9",
        "title": "test3",
        "description": "test 3"
    }
];

describe('todo', () => {

    it('remove todo by id', () => {
        const currentTodos = [...todos];
        const result = removeTodo('e0415520-2f4f-11e8-b501-2524686651e9', currentTodos);
        assert.deepEqual(result, [
            {
                "title": "test1",
                "description": "test1",
                "isLiked": true,
                "comments": ["comment1", "comment1"],
                "id": "d5621df0-2f4b-11e8-af19-4159c8d704e5"
            },
            {
                "title": "test2",
                "description": "test2",
                "isLiked": false,
                "comments": [],
                "id": "ad6ce6b0-2f4e-11e8-a6df-3d1a4aa104ba"
            }
        ]);
    });
});