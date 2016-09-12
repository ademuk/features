export function addProject() {
  return { type: "ADD_PROJECT", name: Math.random() };
}