import { division} from "./division";

test("Test", () => {
  expect(division(1, 0)).toBe("El divisor debe ser diferente de 0");
});

test("Test", () => {
    expect(division(10, 2)).toBe(5);
  });
  