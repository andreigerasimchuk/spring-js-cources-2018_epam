import TodoService from './TodoService';
import { guid } from '../utils';

describe('TodoService', () => {
  let todoService;

  beforeAll(() => {
    todoService = new TodoService();
  });

  describe('When creating new todo', () => {
    let justCreatedTodo;
    let todoParams;

    beforeAll(() => {
      todoParams = {
        title: 'Test',
        description: 'Test description',
      };

      justCreatedTodo = todoService.createTodo(todoParams);
    });

    it('"id" should be generated automatically', () => {
      expect(justCreatedTodo.id).toEqual(expect.any(String));
      expect(justCreatedTodo.id).toHaveLength(36);
    });

    it('"createdDate" should be generated automatically', () => {
      expect(justCreatedTodo.createdDate).toEqual(expect.any(String));
    });

    it('"lastUpdateDate" should be equals to "createdDate"', () => {
      expect(justCreatedTodo.lastUpdateDate).toBe(justCreatedTodo.createdDate);
    });

    it('passed params should be applied correctly', () => {
      expect(justCreatedTodo).toEqual(expect.objectContaining({
        title: todoParams.title,
        description: todoParams.description,
      }));
    });
    it('properties "isLiked" and "comments" must be filled correctly', () => {
      expect(justCreatedTodo.isLiked).toBe(false);
      expect(justCreatedTodo.comments).toEqual(expect.any(Array));
    });
  });
  describe('When updating todo', () => {
    const now = new Date().toLocaleString();

    let change;
    let targetTodo;
    let updatedTodo;

    beforeAll(() => {
      change = {
        title: 'New title',
        description: 'New description',
      };

      targetTodo = {
        id: guid(),
        title: 'Test title',
        description: 'Test description',
        comments: [],
        createdDate: now,
        isLiked: true,
        lastUpdateDate: now,
      };

      updatedTodo = todoService.updateTodo(change, targetTodo);
    });
    it('new params should be applied correctly', () => {
      expect(updatedTodo).toEqual(expect.objectContaining({
        title: change.title,
        description: change.description,
      }));
    });
    it('property "isLiked" when like that is true', () => {
      expect(updatedTodo.isLiked).toBe(true);
    });
  });
});
