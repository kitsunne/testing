import { Lodash } from "../sync";

let _ = new Lodash();

describe("Lodash: compact", () => {
  let array;
  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hi"];
  });
  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hi"];
    expect(_.compact(array)).toEqual(result);
  });

  test("should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain("");
  });
});

describe("Lodash: groupBy", () => {
  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });
});
