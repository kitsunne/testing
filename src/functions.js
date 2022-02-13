export const sum = (a, b) => a + b;

export const nativeNull = () => null;

export let shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

export const filteredList = (shoppingList) => {
  return shoppingList.filter((el) => el === "milk");
};

export const users = [
  { id: 1, name: "Hugo" },
  { id: 2, name: "Francesco", job: "developer" },
  { id: 3, name: "Rico" },
];

export const filteredUsers = users.filter(function (j) {
  return j.job == "developer";
});
