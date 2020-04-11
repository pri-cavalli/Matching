import { expect } from "chai";
import "mocha";
import { ParticipantType, Participant } from "../src/Participant";

const mentor = new Participant(ParticipantType.Mentor, "mentor", new Date(), {});
mentor.preferenceList.getRankNumberFromParticipant = (mentee) => {
    switch (mentee.name) {
        case "mentee1":
            return 1;    
        default:
            return 2;
    }
};
const mentee1 = new Participant(ParticipantType.Mentee, "mentee1", new Date(), {});
const mentee2 = new Participant(ParticipantType.Mentee, "mentee2", new Date(), {});
const mentee3 = new Participant(ParticipantType.Mentee, "mentee3", new Date(), {});
describe("Participant tests", () => {
    describe("whoPrefer", () => {
        it("should return first option when this one has the rank number lower", () => {
            expect(mentor.whoPrefer(mentee1, mentee2)).to.be.deep.equals(mentee1);
            expect(mentor.whoPrefer(mentee2, mentee1)).to.be.deep.equals(mentee1);
        }); 
        it("should return both options when they have the same rank", () => {
            expect(mentor.whoPrefer(mentee2, mentee3)).to.be.deep.equals([mentee2, mentee3]);
            expect(mentor.whoPrefer(mentee3, mentee2)).to.be.deep.equals([mentee3, mentee2]);
        }); 
    }); 
}); 