import { currencyFormatter } from "../../utils /helpers/numberFormatter";

const numberValue = 12;
const stringValue = "25";
const floatNumber = 50.548549468964;

const formattedCADNumberValue = "CA$12.00";
const formattedCADStringValue = "CA$25.00";
const formattedCADFloatNumberValue = "CA$50.55";

const formattedNumberValue = "$12.00";
const formattedStringValue = "$25.00";
const formattedFloatNumberValue = "$50.55";

const _NaN = "$NaN";
const CAD_NaN = "CA$NaN";

const { locale } = Intl.DateTimeFormat().resolvedOptions();
describe("Currency Formatter Func", () => {
  if (locale === "en-CA") {
    it("should return formatted currency value for CA", () => {
      expect(currencyFormatter(numberValue)).toBe(formattedNumberValue);
      expect(currencyFormatter(stringValue)).toBe(formattedStringValue);
      expect(currencyFormatter(floatNumber)).toBe(formattedFloatNumberValue);
    });

    it("should fail with NAN string", () => {
      expect(currencyFormatter(undefined)).toBe(_NaN);
      expect(currencyFormatter(null)).toBe(_NaN);
    });
  } else if ("en-US") {
    it("should return formatted CAD value", () => {
      expect(currencyFormatter(numberValue)).toBe(formattedCADNumberValue);
      expect(currencyFormatter(stringValue)).toBe(formattedCADStringValue);
      expect(currencyFormatter(floatNumber)).toBe(formattedCADFloatNumberValue);
    });

    it("should fail", () => {
      expect(currencyFormatter(undefined)).toBe(CAD_NaN);
      expect(currencyFormatter(null)).toBe(CAD_NaN);
    });
  }
});
