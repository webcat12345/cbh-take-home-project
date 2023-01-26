const { normalizePartitionKey } = require("./dpk");

describe("normalizePartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = normalizePartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Should return the literal '0' when given partitionKey '0' in event", () => {
    const trivialKey = normalizePartitionKey({ partitionKey: '0' });
    expect(trivialKey).toBe('0');
  });

  it("Should not return the literal '0' when given partitionKey of not '123456' in event", () => {
    const trivialKey = normalizePartitionKey({ partitionKey: '1' });
    expect(trivialKey).not.toBe('0');
  });

  it("Should not return the literal '0' when given no input partitionKey in event", () => {
    const trivialKey = normalizePartitionKey({ anyField: '1' });
    expect(trivialKey).not.toBe('0');
  });

  it("Should not return the literal '0' when given partitionKey of number in event", () => {
    const trivialKey = normalizePartitionKey({ anyField: 1 });
    expect(trivialKey).not.toBe('0');
  });
});
