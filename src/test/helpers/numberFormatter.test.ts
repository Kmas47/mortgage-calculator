import { currencyFormatter } from "../../utils /helpers/numberFormatter";

const numberValue = 12;
const stringValue = "25";
const floatNumber = 50.548549468964;

const formattedNumberValue = "$12.00";
const formattedStringValue = "$25.00";
const formattedFloatNumberValue = "$50.55";

const _NaN = '$NaN';

describe("Currency Formatter Func", () => {
  it("should return formatted cad value", () => {
    expect(currencyFormatter(numberValue)).toBe(formattedNumberValue);
    expect(currencyFormatter(stringValue)).toBe(formattedStringValue);
    expect(currencyFormatter(floatNumber)).toBe(formattedFloatNumberValue);
});

  it('should fail', () => {
    expect(currencyFormatter(undefined)).toBe(_NaN);
    expect(currencyFormatter(null)).toBe(_NaN);
  })
});
