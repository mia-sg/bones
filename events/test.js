const { subscribe } = require('apico/dispatcher');

subscribe('test', (data) => {    
    console.log('Test event', data);
});