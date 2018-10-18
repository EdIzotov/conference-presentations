describe("Check user CRUD operations with request", function() {
  it('GET request to load users', function(done) {
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send').and.callThrough();
    User.load(function() {
      done();
    });
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('GET', window.crudURL);
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });
  it('DELETE request to remove user', function(done) {
    var user = new User({id: 5});
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send').and.callThrough();
    user.remove(function() {
      done();
    });
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('DELETE', window.crudURL + '/5');
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });
  it('PUT request to edit user', function(done) {
    var user = new User({id: 5});
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send').and.callThrough();
    user.save(function() {
      done();
    });
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('PUT', window.crudURL + '/5');
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });
  it('PUT request to edit admin', function(done) {
    var user = new Admin({id: 5});
    spyOn(User.prototype, 'save').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    user.save(function() {
      done();
    });
    expect(User.prototype.save).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('PUT', window.crudURL + '/5');
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('GET', window.crudURL + '/refreshAdmins')
  });
  it('POST request to create student', function(done) {
    var user = new Student({});
    expect(user.id).not.toBeDefined();
    spyOn(User.prototype, 'save').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    user.save(function() {
      done();
    });
    expect(User.prototype.save).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('POST', window.crudURL);
    expect(XMLHttpRequest.prototype.open).not.toHaveBeenCalledWith('GET', window.crudURL + '/refreshAdmins')
  });
  it('POST request to create support', function(done) {
    var user = new Support({});
    expect(user.id).not.toBeDefined();
    spyOn(User.prototype, 'save').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    user.save(function() {
      done();
    });
    expect(User.prototype.save).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('POST', window.crudURL);
    expect(XMLHttpRequest.prototype.open).not.toHaveBeenCalledWith('GET', window.crudURL + '/refreshAdmins')
  });
  it('POST request to create admin', function(done) {
    var user = new Admin({});
    expect(user.id).not.toBeDefined();
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(User.prototype, 'save').and.callThrough();
    user.save(function() {
      done();
      expect(user.id).toBeDefined();
    });
    expect(User.prototype.save).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('POST', window.crudURL);
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalledWith('GET', window.crudURL + '/refreshAdmins')
  });
});
