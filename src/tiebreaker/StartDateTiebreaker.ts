import { Participant } from "../Participant";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export enum TimeTiebreakType {
    Oldest = "Oldest",
    Newest = "Newest"
}

export class StartDateTiebreaker extends Tiebreaker{
    constructor(private timeTiebreakType: TimeTiebreakType, private rangeDate?: Date) {
        super();     
    }

    public run(options: Participant[]): TiebreakerReturns {
        const filteredOptions = options.filter(this.filterByRangeDate);
        if (filteredOptions.length === 0) {
            return this.decideHowReturnOptionsByItsLength(options);
        }

        const sortedOptions = filteredOptions.sort(this.sort);
        const oldestoptions = sortedOptions.filter(option => option.startDate.getTime() === sortedOptions[0].startDate.getTime());
        
        return this.decideHowReturnOptionsByItsLength(oldestoptions);
    }

    private filterByRangeDate = (option: Participant) => {
        return !this.rangeDate ? true :
            this.timeTiebreakType === TimeTiebreakType.Newest ? 
                this.rangeDate.getTime() < option.startDate.getTime() :
                this.rangeDate.getTime() > option.startDate.getTime()
    }

    private sort = (option1: Participant, option2: Participant) => {
        return this.timeTiebreakType === TimeTiebreakType.Newest ? 
            option2.startDate.getTime() - option1.startDate.getTime() :
            option1.startDate.getTime() - option2.startDate.getTime()
    }
}