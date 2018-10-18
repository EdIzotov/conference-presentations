describe("Check prototype have methods", function() {
  describe('Check methods for User prototype', function() {
    var user;
    beforeEach(function() {
      user = new User({});
    });
    it('user instance should not have save method', function() {
      expect(user.hasOwnProperty('save')).toBeFalsy();
    });
    it('user instance should not have remove method', function() {
      expect(user.hasOwnProperty('remove')).toBeFalsy();
    });
    it('User prototype should have save method', function() {
      expect(User.prototype.hasOwnProperty('save')).toBeTruthy();
    });
    it('User prototype should have remove method', function() {
      expect(User.prototype.hasOwnProperty('remove')).toBeTruthy();
    });
  });
  describe('Check methods for Admin prototype', function() {
    var admin;
    beforeEach(function() {
      admin = new Admin({});
    });
    it('admin instance should not have save method', function() {
      expect(admin.hasOwnProperty('save')).toBeFalsy();
    });
    it('admin instance should not have remove method', function() {
      expect(admin.hasOwnProperty('remove')).toBeFalsy();
    });
    it('Admin prototype should have save method', function() {
      expect(Admin.prototype.hasOwnProperty('save')).toBeTruthy();
    });
    it('Admin prototype should have remove method', function() {
      expect(Admin.prototype.hasOwnProperty('remove')).toBeFalsy();
    });
  });
  describe('Check methods for Support prototype', function() {
    var support;
    beforeEach(function() {
      support = new Support({});
    });
    it('support instance should not have save method', function() {
      expect(support.hasOwnProperty('save')).toBeFalsy();
    });
    it('support instance should not have remove method', function() {
      expect(support.hasOwnProperty('remove')).toBeFalsy();
    });
    it('Support prototype should have save method', function() {
      expect(Support.prototype.hasOwnProperty('save')).toBeFalsy();
    });
    it('Support prototype should have remove method', function() {
      expect(Support.prototype.hasOwnProperty('remove')).toBeFalsy();
    });
  });
  describe('Check methods for Student prototype', function() {
    var student;
    beforeEach(function() {
      student = new Student({});
    });
    it('student instance should not have save method', function() {
      expect(student.hasOwnProperty('save')).toBeFalsy();
    });
    it('student instance should not have remove method', function() {
      expect(student.hasOwnProperty('remove')).toBeFalsy();
    });
    it('Student prototype should have save method', function() {
      expect(Student.prototype.hasOwnProperty('save')).toBeFalsy();
    });
    it('Student prototype should have remove method', function() {
      expect(Student.prototype.hasOwnProperty('remove')).toBeFalsy();
    });
  });
});
