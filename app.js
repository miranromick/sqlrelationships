let listowner = require('./models').listowner

listowner.create({
    name: 'Melissa',
  }).then(function(listowner) {
    console.log(listowner.get())

    return listowner.createTask({
      taskname: 'eat all the cookies',
      completed: false
    })
  })
  .then(function(task) {
    console.log("new world order", task.get())
  }).catch(function(error) {
    console.log(error)
  })
