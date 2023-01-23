describe("sortString", () => {
  const { sortString } = require("./sort_string");

  test("should be declared", () => {
    expect(sortString).toBeInstanceOf(Function);
  });

  test("return '' if string is empty", () => {
    const result = sortString("");

    expect(result).toEqual("");
  });

  test("return 'yo1u 2hould practic3 h4rder' if string to equal 'practic3 h4rder yo1u 2hould'", () => {
    const result = sortString("practic3 h4rder yo1u 2hould");

    expect(result).toEqual("yo1u 2hould practic3 h4rder");
  });

  test("return 'use1 your2 ski3lls to4 g5et on6 7top' if string to equal 'g5et ski3lls on6 use1 your2 to4 7top'", () => {
    const result = sortString("g5et ski3lls on6 use1 your2 to4 7top");

    expect(result).toEqual("use1 your2 ski3lls to4 g5et on6 7top");
  });
});
