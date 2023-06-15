describe('Arithmetic', function() {  

  describe('Subtraction', function() {
    it('subtracts two positive integers', function(done) {
      request.get('/arithmetic?operation=subtract&operand1=42&operand2=21')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 21 });
              done();
          });
    });
    it('subtracts an integer from itself', function(done) {
      request.get('/arithmetic?operation=subtract&operand1=42&operand2=42')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0 });
              done();
          });
    });
    it('subtracts a larger integer from another', function(done) {
      request.get('/arithmetic?operation=subtract&operand1=21&operand2=42')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: -21 });
              done();
          });
    });
    it('subtracts a negative integer from a positive integer', function(done) {
      request.get('/arithmetic?operation=subtract&operand1=21&operand2=-21')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 42 });
              done();
          });
    });
  });

  describe('Multiplication', function() {
    it('multiplies two positive integers', function(done) {
      request.get('/arithmetic?operation=multiply&operand1=21&operand2=2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 42 });
              done();
          });
    });
    it('multiplies a positive integer with zero', function(done) {
      request.get('/arithmetic?operation=multiply&operand1=21&operand2=0')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0 });
              done();
          });
    });
    it('multiplies a positive integer and negative integer', function(done) {
      request.get('/arithmetic?operation=multiply&operand1=21&operand2=-2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: -42 });
              done();
          });
    });
    it('multiplies two negative integers', function(done) {
      request.get('/arithmetic?operation=multiply&operand1=-21&operand2=-2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 42 });
              done();
          });
    });
    it('multiplies two floating point numbers', function(done) {
      request.get('/arithmetic?operation=multiply&operand1=.5&operand2=0.5')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0.25 });
              done();
          });
    });
  });

  describe('Division', function() {
    it('divides a positive integer by an integer factor ', function(done) {
      request.get('/arithmetic?operation=divide&operand1=42&operand2=2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 21 });
              done();
          });
    });
    it('divides a negative integer by an integer factor ', function(done) {
      request.get('/arithmetic?operation=divide&operand1=-42&operand2=2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: -21 });
              done();
          });
    });
    it('divides a positive integer by a non-factor', function(done) {
      request.get('/arithmetic?operation=divide&operand1=21&operand2=42')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0.5 });
              done();
          });
    });
    it('divides a positive integer by a negative integer', function(done) {
      request.get('/arithmetic?operation=divide&operand1=21&operand2=-42')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: -0.5 });
              done();
          });
    });
    it('divides zero by a positive integer', function(done) {
      request.get('/arithmetic?operation=divide&operand1=0&operand2=42')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0 });
              done();
          });
    });
    it('divides by zero', function(done) {
      request.get('/arithmetic?operation=divide&operand1=0.5&operand2=2')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: 0.25 });
              done();
          });
    });
    it('divides by zero', function(done) {
      request.get('/arithmetic?operation=divide&operand1=21&operand2=0')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.eql({ result: null });
              done();
          });
    });
  });
});
