const { subscribe } = require('apico/dispatcher');

/**
 * Here you can subscribe to the app events and implement your logic.
 * This will bw maintained by Apico.
 */

/// Subscribe to the error event
subscribe( 'error', ( data )=>{ 
    console.log('Error event', data);
    /**
     * Implement your logic to handle errors here
     */
});

