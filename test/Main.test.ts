import "mocha";
import { mentors, mentees } from "../src/Data";
import MatchingFinder from "../src/MatchingFinder";
import { Display } from "../src/MatchingDisplayer";
import { OptionsPreferenceTiebreaker } from "../src/tiebreaker/OptionsPreferenceTiebreaker";
import { VoteClassificationTiebreaker } from "../src/tiebreaker/VoteClassificationTiebreaker";
import { OldestStartDateTiebreaker } from "../src/tiebreaker/OldestStartDateTiebreaker";
import { FirstOptionTiebreaker } from "../src/tiebreaker/FirstOptionTiebreaker";
import { MostDesiredTiebreaker } from "../src/tiebreaker/MostDesiredTiebreaker";

describe("Main tests", async () => {
  it("", async () => {
    const voteClassificationTiebreaker = new VoteClassificationTiebreaker();
    const optionsPreferenceTiebreaker = new OptionsPreferenceTiebreaker();
    const oldestStartDateTiebreaker = new OldestStartDateTiebreaker();
    const firstOptionTiebreaker = new FirstOptionTiebreaker();
    const mostDesiredOptionTiebreaker = new MostDesiredTiebreaker(mentors, mentees);

    const menteesTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, mostDesiredOptionTiebreaker]//, getFirstOptionTiebreaker);
    const mentorsTiebreakers = [voteClassificationTiebreaker, optionsPreferenceTiebreaker, oldestStartDateTiebreaker]//, getFirstOptionTiebreaker);


    const matching = new MatchingFinder(mentors, mentees);
    matching.setPreferenceListInMentors(mentorsTiebreakers);
    matching.setPreferenceListInMentees(menteesTiebreakers);
    
    const result = await matching.run()
    Display.matching(result);
    process.exit();
  });
});

/*
For Mentee natalia, which Mentor is more appropriate?
1 - luis                                                                      
2 - lucas                                                                     
3 - daniel                                                                    
1                                                                             
natalia proposed to luis                                                      
For Mentee pedro, which Mentor is more appropriate?                           
1 - carol                                                                     
2 - marcia                                                                    
3 - lucas                                                                     
3                                                                             
pedro proposed to lucas                                                       
For Mentee giovana, which Mentor is more appropriate?                         
1 - priscila                                                                  
2 - marcia                                                                    
2                                                                             
giovana proposed to marcia                                                    
For Mentee vinicius, which Mentor is more appropriate?                        
1 - luis                                                                      
2 - carol                                                                     
3 - maiara                                                                    
4 - daniel                                                                    
1                                                                             
vinicius proposed to luis                                                     
For Mentee natalia, which Mentor is more appropriate?                         
1 - lucas                                                                     
2 - daniel                                                                    
1                                                                             
natalia proposed to lucas                                                     
natalia proposed to daniel                                                    
athos proposed to mateus                                                      
felipe proposed to marcia                                                     
giovana proposed to priscila                                                  
henrique proposed to daniel                                                   
For Mentor daniel, which Mentee is more appropriate?                          
1 - natalia                                                                   
2 - henrique                                                                  
2                                                                             
natalia proposed to carol                                                     
For Mentee joao, which Mentor is more appropriate?                            
1 - carol                                                                     
2 - maiara                                                                    
1                                                                             
joao proposed to carol                                                        
natalia proposed to marcia                                                    
For Mentee natalia, which Mentor is more appropriate?                         
1 - cassiano                                                                  
2 - gabriel                                                                   
1                                                                             
natalia proposed to cassiano                                                  
For Mentee wagner, which Mentor is more appropriate?                          
1 - maiara                                                                    
2 - priscila                                                                  
3 - marcia                                                                    
1                                                                             
wagner proposed to maiara                                                     
willian proposed to mateus                                                    
For Mentee athos, which Mentor is more appropriate?                           
1 - lucas                                                                     
2 - daniel                                                                    
2                                                                             
athos proposed to daniel                                                      
athos proposed to lucas                                                       
For Mentee athos, which Mentor is more appropriate?                           
1 - priscila                                                                  
2 - cassiano                                                                  
3 - gabriel                                                                   
3                                                                             
athos proposed to gabriel                                                     
For Mentee nicolas, which Mentor is more appropriate?                         
1 - luis                                                                      
2 - carol                                                                     
1                                                                             
nicolas proposed to luis                                                      
For Mentee vinicius, which Mentor is more appropriate?                        
1 - carol                                                                     
2 - maiara                                                                    
3 - daniel                                                                    
1                                                                             
vinicius proposed to carol                                                    
joao proposed to maiara                                                       
For Mentee joao, which Mentor is more appropriate?                            
1 - luis                                                                      
2 - daniel                                                                    
2                                                                             
joao proposed to daniel                                                       
joao proposed to luis                                                         
For Mentee joao, which Mentor is more appropriate?                            
1 - mateus                                                                    
2 - gabriel                                                                   
2                                                                             
joao proposed to gabriel                                                      
For Mentee athos, which Mentor is more appropriate?                           
1 - priscila                                                                  
2 - cassiano                                                                  
2                                                                             
athos proposed to cassiano                                                    
athos proposed to priscila                                                    
For Mentee athos, which Mentor is more appropriate?                           
1 - luis                                                                      
2 - luan                                                                      
3 - guilherme                                                                 
3                                                                             
athos proposed to guilherme                                                   
joice proposed to luis                                                        
For Mentee joice, which Mentor is more appropriate?                           
1 - gabriel                                                                   
2 - luan                                                                      
2                                                                             
joice proposed to luan                                                        
[                                                                             
  {                                                                           
    pair0: { mentor: 'lucas voted Green', mentee: 'pedro voted Green' },      
    pair1: { mentor: 'marcia voted Green', mentee: 'felipe voted Green' },    
    pair2: { mentor: 'priscila voted Green', mentee: 'giovana voted Green' }, 
    pair3: { mentor: 'daniel voted Green', mentee: 'henrique voted Green' },  
    pair4: { mentor: 'cassiano voted Green', mentee: 'natalia voted Yellow' },
    pair5: { mentor: 'maiara voted Green', mentee: 'wagner voted Green' },    
    pair6: { mentor: 'mateus voted Green', mentee: 'willian voted Green' },   
    pair7: { mentor: 'luis voted Green', mentee: 'nicolas voted Green' },     
    pair8: { mentor: 'carol voted Green', mentee: 'vinicius voted Green' },   
    pair9: { mentor: 'gabriel voted Green', mentee: 'joao voted Yellow' },    
    pair10: { mentor: 'guilherme voted Yellow', mentee: 'athos voted Yellow' }
    pair11: { mentor: 'luan voted Yellow', mentee: 'joice voted Yellow' },    
    votesNumber: { green: 18, yellow: 6, red: 0 }                             
  }                                                                           
]                     



natalia proposed to luis 
pedro proposed to marcia
giovana proposed to marcia
giovana proposed to priscila
vinicius proposed to luis
natalia proposed to daniel
athos proposed to mateus
felipe proposed to marcia
pedro proposed to carol
henrique proposed to daniel
natalia proposed to lucas
joao proposed to carol
joao proposed to maiara
wagner proposed to marcia
wagner proposed to maiara
joao proposed to luis
joao proposed to daniel
joao proposed to mateus
joao proposed to gabriel
willian proposed to mateus
athos proposed to daniel
athos proposed to lucas
athos proposed to gabriel
athos proposed to cassiano
nicolas proposed to luis
vinicius proposed to carol
pedro proposed to lucas
natalia proposed to carol
natalia proposed to marcia
natalia proposed to gabriel
natalia proposed to cassiano
athos proposed to priscila
athos proposed to guilherme
joice proposed to luis
joice proposed to gabriel
joice proposed to luan
*/