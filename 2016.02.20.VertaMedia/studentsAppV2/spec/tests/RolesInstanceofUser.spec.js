describe("Check roles are instance of User", function() {
  beforeEach(function() {
  });

  it('Student prototype should be instance of User', function() {
    expect(Student.prototype instanceof User).toBeTruthy();
  });
  it('Support prototype should be instance of User', function() {
    expect(Support.prototype instanceof User).toBeTruthy();
  });
  it('Admin prototype should be instance of User', function() {
    expect(Admin.prototype instanceof User).toBeTruthy();
  });
});
