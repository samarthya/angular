import { VoterService } from "./voter.service";
import { ISession } from '../events';
import { of } from 'rxjs';

describe(" Voter Service Tests", () => {
  let voterService: VoterService, mockHttp, session: ISession;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);
    voterService = new VoterService(mockHttp);
    session = {
      id: 3,
      name: 'Saurabh Sharma',
      presenter: 'Saurabh',
      duration: 2,
      level: "beginner",
      abstract:"Some dummy abstract",
      voters: ["Joe", "John"]
    };
  });

  describe(" Delete Voter", () =>{
    it("Deletes the voter from the list.", () => {
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session, "Joe");
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('John');
    });

    it("Deletes the voter by calling the right URL.", () => {

      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session, "Joe");
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/vote/3/sessions/3/voters/Joe')

    });
  });

  describe(" Add Voter works fine?", () =>{
    it(" Adds voter to the list.", () => {
      mockHttp.post.and.returnValue(of(true));
      voterService.addVoter(3, session, "Harry");
      expect(session.voters.length).toBe(3);
      expect(session.voters[2]).toBe('Harry');
    });

    it(" Adds voter and calls the rigth URL.", () => {
      mockHttp.post.and.returnValue(of(true));
      voterService.addVoter(3, session, "Harry");
      expect(mockHttp.post).toHaveBeenCalledWith('/api/vote/3/sessions/3/voters/Harry',{}, jasmine.any(Object));
    });

  });
});
