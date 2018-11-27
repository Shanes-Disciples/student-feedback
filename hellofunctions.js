'use strict';

module.exports = {
  generateRandomData
};

function generateRandomData(userContext, events, done) {
    const id = Math.floor(Math.random() * 100);
    userContext.vars.id = id;
    return done();
};

/*
By convention, a function called from a scenario with a function 
command is given 3 arguments: the virtual user’s context, an EventEmitter 
which can be used to communicate with Artillery, and a callback which needs
to be called for the control to be returned to the scenario. (There are
other ways to call functions, e.g. with a beforeRequest attribute on a 
request definition but we won’t be using those for our current task.)
*/