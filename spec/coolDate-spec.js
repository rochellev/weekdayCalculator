// test suite for coolDate

// Date(year month day)

describe('CoolDate', function() {

  it('should test whether constructor works', function() {
    var mydate = new CoolDate(2016, 5, 24);
    expect(mydate.getFullYear()).toEqual(2016);
    expect(mydate.getMonth()).toEqual(5);
    expect(mydate.getDate()).toEqual(24);
  });

});
