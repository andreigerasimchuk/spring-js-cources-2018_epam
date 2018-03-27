const assert = require('assert');
const { removeTodo } = require('../controllers/remove');
const { updateTodo } = require('../controllers/update');
const { readTodo } = require('../controllers/read');

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
        assert.deepEqual(result.todos, [
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

    it('update the title and description in the todo by id', () => {
        const currentTodos = [...todos];
        const answers = {
            title: 'tests title',
            description: 'tests description'
        };
        const result = updateTodo('ad6ce6b0-2f4e-11e8-a6df-3d1a4aa104ba', currentTodos, answers);
        assert.deepEqual(result.todos, [
            {
                "title": "test1",
                "description": "test1",
                "isLiked": true,
                "comments": ["comment1", "comment1"],
                "id": "d5621df0-2f4b-11e8-af19-4159c8d704e5"
            },
            {
                "title": "tests title",
                "description": "tests description",
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
        ]);
    });

    it('like todo by id', () => {
        const currentTodos = [...todos];
        const answers = { isLiked: true };
        const result = updateTodo('ad6ce6b0-2f4e-11e8-a6df-3d1a4aa104ba', currentTodos, answers);

        currentTodos[1].isLiked = true;

        assert.deepEqual(result.todos, currentTodos);
    });

    it('unLike todo by id', () => {
        const currentTodos = [...todos];
        const answers = { isLiked: false };
        const result = updateTodo('d5621df0-2f4b-11e8-af19-4159c8d704e5', currentTodos, answers);

        currentTodos[0].isLiked = false;

        assert.deepEqual(result.todos, currentTodos);
    });

    it('add a comment to the todo on id', () => {
        const currentTodos = [...todos];
        const comment = ['new comment'];
        const result = updateTodo('ad6ce6b0-2f4e-11e8-a6df-3d1a4aa104ba', currentTodos, {}, comment);

        currentTodos[1].comments.push('new comment');

        assert.deepEqual(result.todos, currentTodos);
    });
    it('read todo by id', () => {
        const currentTodos = [...todos];
        const result = readTodo('e0415520-2f4f-11e8-b501-2524686651e9', currentTodos);

        assert.deepEqual(result, currentTodos[2]);
    });
});