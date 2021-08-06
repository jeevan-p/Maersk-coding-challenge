import shuffle from "./shuffle.js";

describe("Test for util shuffle.js", () => {
  it('should return the same number of array elements', () => {
    expect(shuffle([1, 2, 3]).length).toBe(3);
  });
});
