const { md } = require("./script.js");
const expect = require("chai").expect;

describe("movieTheater", () => {
  describe("ageRestrictions", () => {
    it("should return appropriate message for G movie rating", () => {
      expect(movieTheater.ageRestrictions("G")).to.equal(
        "All ages admitted to watch the movie"
      );
    });
    it("should return appropriate message for PG movie rating", () => {
      expect(movieTheater.ageRestrictions("PG")).to.equal(
        "Parental guidance suggested! Some material may not be suitable for pre-teenagers"
      );
    });
    it("should return appropriate message for R movie rating", () => {
      expect(movieTheater.ageRestrictions("R")).to.equal(
        "Restricted! Under 17 requires accompanying parent or adult guardian"
      );
    });
    it("should return appropriate message for NC-17 movie rating", () => {
      expect(movieTheater.ageRestrictions("NC-17")).to.equal(
        "No one under 17 admitted to watch the movie"
      );
    });
    it("should return appropriate message for random string message", () => {
      expect(movieTheater.ageRestrictions("alabalaportkola")).to.equal(
        "There are no age restrictions for this movie"
      );
    });
  });

  describe("moneySpent", () => {
    it("should calculate total cost with discount and return message", () => {
      expect(
        movieTheater.moneySpent(5, ["Nachos"], ["Soda", "Water"])
      ).to.equal(
        `The total cost for the purchase with applied discount is 68.00`
      );
    });

    it("should calculate total cost without discount and return message", () => {
      expect(
        movieTheater.moneySpent(1, ["Nachos"], ["Soda", "Water"])
      ).to.equal(`The total cost for the purchase is 25.00`);
    });

    it("should throw an error for invalid input data", () => {
      expect(() =>
        movieTheater.moneySpent("alabalaba", ["Nachos"], ["Soda", "Water"])
      ).to.throw("Invalid input");
    });

    it("should throw an error for invalid input data", () => {
      expect(() => movieTheater.moneySpent(1, 23, ["Soda", "Water"])).to.throw(
        "Invalid input"
      );
    });

    it("should throw an error for invalid input data", () => {
      expect(() => movieTheater.moneySpent(1, ["Nachos"], 343)).to.throw(
        "Invalid input"
      );
    });
  });

  describe("reservation", () => {
    it("should return the row number with enough seats for reservation", () => {
      expect(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          6
        )
      ).to.equal(1);
    });

    it("should throw an error if the input is invalid", () => {
      expect(() => movieTheater.reservation("alabala", 6)).to.throw(
        "Invalid input"
      );
    });
    it("should throw an error if the input is invalid", () => {
      expect(() => movieTheater.reservation([], "alabala")).to.throw(
        "Invalid input"
      );
    });
  });
});
