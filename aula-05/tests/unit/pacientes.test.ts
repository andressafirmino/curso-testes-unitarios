import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";


jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mock protocol"
    }
  }
})

describe("protocol", () => {
  it("should create protocol", async () => {
    const name = faker.person.firstName();
    const lastName = faker.person.lastName();
    const priority = faker.datatype.boolean();
    const protocol = generateProtocolForPacient(name, lastName, priority);

    expect(protocol).toEqual({
      pacient: `${name} ${lastName}`,
      priority,
      protocol: "mock protocol",
      date: expect.any(Date)
    });
  });
});