describe("Check prototypes were defined", function() {
  beforeEach(function() {
  });

  it('User prototype should be defined', function() {
    expect(User).toBeDefined();
  });
  it('Student prototype should be defined', function() {
    expect(Student).toBeDefined();
  });
  it('Support prototype should be defined', function() {
    expect(Support).toBeDefined();
  });
  it('Admin prototype should be defined', function() {
    expect(Admin).toBeDefined();
  });
});
