const AddTask = require('../AddTask');

test('Should add new task if todo is empty', () => {
  const todo = [];
  const task = 'task';
  const expected = [{
    name: task,
    finished: false
  }]

  const spyOnFs = jest.spyOn(fs, 'writeFile');

  AddTask(task, todo);

  expect(spyOnFs).toHaveBeenCalledWith(filePath, JSON.stringify(expected));
})

test('Should add new task if todo isn`t empty', () => {
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

  AddTask(task, todo);

  expect(spyOnFs).toHaveBeenCalledWith(filePath, JSON.stringify(expected));
})