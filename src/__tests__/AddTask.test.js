const AddTask = require('../AddTask');

test('Should add new task if todo is empty', async () => {
  const todo = [];
  const task = 'task';
  const expected = [{
    name: task,
    finished: false
  }]

  const spyOnFs = jest.spyOn(fs, 'writeFile');
  const spyOnConsole = jest.spyOn(console, 'log');

  await AddTask(task, todo)

  expect(spyOnFs).toHaveBeenCalledWith(filePath, JSON.stringify(expected));
  expect(spyOnConsole).toHaveBeenCalled();
});

test('Should add new task if todo isn`t empty', async () => {
  const todo = [{
    task: 'yep',
    finished: false
  }];
  const task = 'task 2';

  const expected = [
    ...todo,
    {
      name: task,
      finished: false
    }
  ]

  const spyOnFs = jest.spyOn(fs, 'writeFile');
  const spyOnConsole = jest.spyOn(console, 'log');

  await AddTask(task, todo);

  expect(spyOnFs).toHaveBeenCalledWith(filePath, JSON.stringify(expected));
  expect(spyOnConsole).toHaveBeenCalled();
});