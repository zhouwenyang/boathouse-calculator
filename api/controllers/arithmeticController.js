

'use strict';

exports.calculate = function(req, res) {
  req.app.use(function(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  var operations = {
    'add':      function(a,b) { return a + b },
    'subtract': function(a,b) { return a - b }

  };

  // Determine the operation

  if (! req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (! operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }



  var operand1 = parseInt(req.query.operand1, 10);
  var operand2 = parseInt(req.query.operand2, 10);

  res.json({ result: operation(req.query.operand1, req.query.operand2) });
};
