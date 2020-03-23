import { expect } from "chai";
import "mocha";
import { getGreaterVoteClassification, VoteClassification } from "../src/Vote";

describe("Vote tests", () => {
  describe("getGreaterVoteClassification", () => {
    it("should return undefined when draw", () => {
      expect(
        getGreaterVoteClassification(VoteClassification.Green, VoteClassification.Green)
      ).to.be.equals(undefined);
      expect(
        getGreaterVoteClassification(VoteClassification.Yellow, VoteClassification.Yellow)
      ).to.be.equals(undefined);
      expect(
        getGreaterVoteClassification(VoteClassification.Red, VoteClassification.Red)
      ).to.be.equals(undefined);
    });
    it("should return Green when one of the option is Green", () => {
      expect(
        getGreaterVoteClassification(VoteClassification.Green, VoteClassification.Yellow)
      ).to.be.equals(VoteClassification.Green);
      expect(
        getGreaterVoteClassification(VoteClassification.Yellow, VoteClassification.Green)
      ).to.be.equals(VoteClassification.Green);
      expect(
        getGreaterVoteClassification(VoteClassification.Green, VoteClassification.Red)
      ).to.be.equals(VoteClassification.Green);
      expect(
        getGreaterVoteClassification(VoteClassification.Red, VoteClassification.Green)
      ).to.be.equals(VoteClassification.Green);
    });
    it("should return Yellow when the options are Yellow and Red", () => {
      expect(
        getGreaterVoteClassification(VoteClassification.Yellow, VoteClassification.Red)
      ).to.be.equals(VoteClassification.Yellow);
      expect(
        getGreaterVoteClassification(VoteClassification.Red, VoteClassification.Yellow)
      ).to.be.equals(VoteClassification.Yellow);
    });
  }); 
}); 