import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const res = calculator.sum(3, 4);
    expect(res).toBe(7);
  });
  it("should substract two numbers", async () => {
    const res = calculator.sub(5, 4);
    expect(res).toBe(1);
  });
  it("should mul two numbers", async () => {
    const res = calculator.mul(3, 4);
    expect(res).toBe(12);
  });
  it("should div two numbers", async () => {
    const res = calculator.div(12, 4);
    expect(res).toBe(3);
  });
  it("should return 0 when div for 0", async () => {
    const res = calculator.div(12, 0);
    expect(res).toBe(0);
  });
})