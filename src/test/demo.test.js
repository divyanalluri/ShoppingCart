import Add from "../components/Add";

test("adds numbers", () => {
  let value = Add(1, 1);
  expect(value).toEqual(2);
});
