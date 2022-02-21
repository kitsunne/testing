export const sum = (a:number, b:number) => a + b;

export const nativeNull = () => null;

export let shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

export const filteredList = (shoppingList: Array <string>) => {
  return shoppingList.filter((el) => el === "milk");
};

 type User = {
  id: number;
  name: string;
  job:string;
};

export let users :Array <User>= [
  { id: 1, name: "Hugo",job: "tester" },
  { id: 2, name: "Francesco", job: "developer" },
  { id: 3, name: "Rico",job: "teacher" },
];

export const filteredUsers = users.filter(function (j) {
  return j.job == "developer";
});
