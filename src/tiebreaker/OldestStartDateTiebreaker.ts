import { Participant } from "../Participant";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export class OldestStartDateTiebreaker extends Tiebreaker{
    constructor(private rangeDate?: Date) {
        super();     
    }

    public run(options: Participant[]): TiebreakerReturns {
        const filteredOptions = options.filter(option => 
            (this.rangeDate && this.rangeDate.getTime() > option.startDate.getTime()) || !this.rangeDate);
        if (filteredOptions.length === 0) {
            return this.decideHowReturnOptionsByItsLength(options);
        }

        const sortedOptions = filteredOptions.sort((option1, option2) => 
            option1.startDate.getTime() - option2.startDate.getTime());
        const oldestoptions = sortedOptions.filter(option => option.startDate.getTime() === sortedOptions[0].startDate.getTime());
        
        return this.decideHowReturnOptionsByItsLength(oldestoptions);
    }
}