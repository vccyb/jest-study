import sum from "../../src/utils/sum";

describe("sum", () => {
  it("可以做加法", () => {
    expect(sum(1, 1)).toEqual(2);
    expect(sum(2, 2)).toEqual(4);
  });
});
