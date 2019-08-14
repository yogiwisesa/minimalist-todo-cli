const DeleteTask = require('../DeleteTask');

test('Should delete task', async () => {
  const todo = [{
    name: 'task 1',
    finished: false
  },
  {
    name: 'task 2',
    finished: false
  }];
  
  const expected = [{
    name: 'task 2',
    finished: false
  }]

  const spyOnFs = jest.spyOn(fs, 'writeFile');
  const spyOnConsole = jest.spyOn(console, 'log');

  await DeleteTask(1, todo)

  expect(spyOnFs).toHaveBeenCalledWith(filePath, JSON.stringify(expected));
  expect(spyOnConsole).toHaveBeenCalled();
});