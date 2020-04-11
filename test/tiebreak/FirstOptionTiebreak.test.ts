import { expect } from "chai";
import "mocha";
import { FirstOptionTiebreaker } from "../../src/tiebreaker/FirstOptionTiebreaker";
import { Participant, ParticipantType } from "../../src/Participant";

const mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(1), {});
const mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(1), {});
const mentee3 = new Participant(ParticipantType.Mentee, "mentee3", new Date(1), {});
const firstOptionTiebreaker = new FirstOptionTiebreaker();
describe("FirstOptionTiebreaker tests", () => {
    describe("run", () => {
        it("should return null when the options are zero", () => {
            expect(
                firstOptionTiebreaker.run([])
            ).to.be.null;                
        });
        it("should return the first in the list", () => {
            expect(
                firstOptionTiebreaker.run([mentee1, mentee2, mentee3])
            ).to.be.equals(mentee1);                
        });
    }); 
}); 