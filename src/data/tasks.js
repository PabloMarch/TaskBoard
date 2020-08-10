const SAMPLES = [
  {
    "id":"5fceac02-ec85-41bb-9796-c3c712d8127a",
    "content_type":"jpg",
    "metadata":null,
    "resource_url":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a.jpg",
    "size_urls":{
       "small":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a.jpg",
       "medium":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a@2x.jpg",
       "large":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a@3x.jpg"
    }
  }, {
    "id":"e9853996-7beb-4184-aac8-f896a602c8ed",
    "content_type":"jpg",
    "metadata":null,
    "resource_url":"https://cdn.joinsaturn.com/task-images/e9853996-7beb-4184-aac8-f896a602c8ed.jpg",
    "size_urls":{
      "small":"https://cdn.joinsaturn.com/task-images/e9853996-7beb-4184-aac8-f896a602c8ed.jpg",
      "medium":"https://cdn.joinsaturn.com/task-images/e9853996-7beb-4184-aac8-f896a602c8ed@2x.jpg",
      "large":"https://cdn.joinsaturn.com/task-images/e9853996-7beb-4184-aac8-f896a602c8ed@3x.jpg"
    }
  }, {
    "id":"5bb9b000-a648-4628-8175-41608b8b0c30",
    "content_type":"jpg",
    "metadata":null,
    "resource_url":"https://cdn.joinsaturn.com/task-images/5bb9b000-a648-4628-8175-41608b8b0c30.jpg",
    "size_urls":{
       "small":"https://cdn.joinsaturn.com/task-images/5bb9b000-a648-4628-8175-41608b8b0c30.jpg",
       "medium":"https://cdn.joinsaturn.com/task-images/5bb9b000-a648-4628-8175-41608b8b0c30@2x.jpg",
       "large":"https://cdn.joinsaturn.com/task-images/5bb9b000-a648-4628-8175-41608b8b0c30@3x.jpg"
    }
  }, {
    "id":"6b6bee27-deb7-4158-aa44-4d372eee1ca2",
    "content_type":"jpg",
    "metadata":null,
    "resource_url":"https://cdn.joinsaturn.com/task-images/6b6bee27-deb7-4158-aa44-4d372eee1ca2.jpg",
    "size_urls":{
       "small":"https://cdn.joinsaturn.com/task-images/6b6bee27-deb7-4158-aa44-4d372eee1ca2.jpg",
       "medium":"https://cdn.joinsaturn.com/task-images/6b6bee27-deb7-4158-aa44-4d372eee1ca2@2x.jpg",
       "large":"https://cdn.joinsaturn.com/task-images/6b6bee27-deb7-4158-aa44-4d372eee1ca2@3x.jpg"
    }
  }, {
    "id": "1b112cbf-c40c-46dd-a34a-8d7d11e090e9",
    "content_type": "jpg",
    "metadata": null,
    "resource_url": "https://cdn.joinsaturn.com/task-images/1b112cbf-c40c-46dd-a34a-8d7d11e090e9.jpg",
    "size_urls": {
      "small": "https://cdn.joinsaturn.com/task-images/1b112cbf-c40c-46dd-a34a-8d7d11e090e9.jpg",
      "medium": "https://cdn.joinsaturn.com/task-images/1b112cbf-c40c-46dd-a34a-8d7d11e090e9@2x.jpg",
      "large": "https://cdn.joinsaturn.com/task-images/1b112cbf-c40c-46dd-a34a-8d7d11e090e9@3x.jpg"
    }
  }
];

const demoTasks = [
  {
    createdAt               : '2020-07-10T12:31:36.861988',
    title                   : 'My very first task!',
    dueDate                 : '2020-07-07',
    dueSecondsSinceMidnight : 26340,
    isCompleted             : true,
    serverId                : 1258,
    images                  : []
  },
  {
    createdAt               : '2020-07-10T17:09:21.690824',
    title                   : 'Make some more tasks later',
    dueDate                 : '2020-08-03',
    dueSecondsSinceMidnight : 29940,
    isCompleted             : false,
    serverId                : 1272,
    images                  : SAMPLES.slice(3,5)
  },
  {
    createdAt               : '2020-07-08T19:19:41.556477',
    title                   : 'Finish the programming project!',
    dueDate                 : null,
    dueSecondsSinceMidnight : null,
    isCompleted             : false,
    serverId                : 1241,
    images                  : SAMPLES
  }
];

export default demoTasks;