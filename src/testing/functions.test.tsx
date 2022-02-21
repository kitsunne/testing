import {
  sum,
  nativeNull,
  shoppingList,
  filteredList,
  users,
  filteredUsers,
} from "../functions";

describe("sum function", () => {
  test("should return 5", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toEqual(5);
  });
  test(" should return value correctly comparing to other values", () => {
    expect(sum(12, 3)).toBeGreaterThan(10);
    expect(sum(12, 3)).toBeGreaterThanOrEqual(15);
    expect(sum(12, 3)).toBeLessThan(20);
  });
  test(" should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("native null function", () => {
  test(" should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

describe("shopping list", () => {
  test(" has or not milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
  test(" has no bananas on it", () => {
    expect(shoppingList).not.toContain("bananas");
    expect(new Set(shoppingList)).not.toContain("bananas");
  });
});

describe("filteredList function", () => {
  test("should return 'milk' ", () => {
    expect(filteredList(shoppingList)).toBeDefined();
    expect(filteredList(shoppingList)).toEqual(["milk"]);
    expect(filteredList(shoppingList)).not.toContain(["water"]);
  });
});

describe("users", () => {
  test("we should have id 3", () => {
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 3 })])
    );
  });
  test("we should haven't id 4", () => {
    expect(users).not.toEqual(
      expect.not.arrayContaining([expect.not.objectContaining({ id: 4 })])
    );
  });
  test("number of users should be 3", () => {
    expect(users.length).toBe(3);
  });
  test("number of users shouldn't be 5", () => {
    expect(users.length).not.toBe(5);
  });
});

describe("filteredUsers", () => {
  test("filter shouldn't have value", () => {
    expect(filteredUsers).not.toEqual([
      { id: 3, job: "teacher", name: "Frank" },
    ]);
  });
  test("filter should have value", () => {
    expect(filteredUsers).toEqual([
      {
        id: 2,
        job: "developer",
        name: "Francesco",
      },
    ]);
  });
});
