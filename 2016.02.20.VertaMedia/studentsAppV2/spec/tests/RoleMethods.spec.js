describe("Check roles have methods", function() {
  describe('Check User.load method', function() {
    it('User.load method should be function', function() {
      expect(typeof User.load).toBe('function');
    });
  });
  describe('Check methods for Admin role', function() {
    var admin;
    beforeEach(function() {
      admin = new Admin({});
    });
    it('Admin role should have save method', function() {
      expect(typeof admin.save).toBe('function');
    });
    it('Admin role should have remove method', function() {
      expect(typeof admin.remove).toBe('function');
    });
    it('Admin role should not have getStrikesCount method', function() {
      expect(typeof admin.getStrikesCount).toBe('undefined');
    });
  });
  describe('Check methods for Support role', function() {
    var support;
    beforeEach(function() {
      support = new Support({});
    });
    it('Support role should have save method', function() {
      expect(typeof support.save).toBe('function');
    });
    it('Support role should have remove method', function() {
      expect(typeof support.remove).toBe('function');
    });
    it('Support role should not have getStrikesCount method', function() {
      expect(typeof support.getStrikesCount).toBe('undefined');
    });
  });
  describe('Check methods for Student role', function() {
    var student;
    beforeEach(function() {
      student = new Student({});
    });
    it('Student role should have save method', function() {
      expect(typeof student.save).toBe('function');
    });
    it('Student role should have remove method', function() {
      expect(typeof student.remove).toBe('function');
    });
    it('Student role should have getStrikesCount method', function() {
      expect(typeof student.getStrikesCount).toBe('function');
    });
  });
});
