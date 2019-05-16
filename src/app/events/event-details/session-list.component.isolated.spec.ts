import { SessionListComponent } from "./session-list.component";

describe("Tests the session list component.", () => {

  let sessionListComponent: SessionListComponent
  let mockAuth, mockVoter;

  beforeEach(()=>{
    sessionListComponent = new SessionListComponent(mockAuth, mockVoter);
  });

  describe(" NgOnChanges suite", () => {
    it("Should filter the sessions correctly.", () => {
      sessionListComponent.sessions= [{
        name: "Session A", level: "beginner", id: 2,
      presenter: "Saurabh Sharma", duration: 2,
      abstract: " ", voters: []}, {
        name: "Session B", level: "advanced", id: 3,
      presenter: "Saurabh Sharma", duration: 4,
      abstract: " ", voters: []},
      {
        name: "Session C", level: "intermediate", id: 4,
      presenter: "Saurabh Sharma", duration: 1,
      abstract: " ", voters: []}];
      sessionListComponent.filterBy = "intermediate";
      sessionListComponent.sortBy = "name";
      sessionListComponent.eventId = 2;

      sessionListComponent.ngOnChanges();
      expect(sessionListComponent.visibleSession.length).toBe(1);
      expect(sessionListComponent.visibleSession[0].name).toBe("Session C");
    });

    it("Should sort the sessions correctly.", () => {
      sessionListComponent.sessions= [{
        name: "Session A", level: "beginner", id: 2,
      presenter: "Saurabh Sharma", duration: 2,
      abstract: " ", voters: []}, {
        name: "Session B", level: "advanced", id: 3,
      presenter: "Saurabh Sharma", duration: 4,
      abstract: " ", voters: []},
      {
        name: "Session C", level: "intermediate", id: 4,
      presenter: "Saurabh Sharma", duration: 1,
      abstract: " ", voters: []}];
      sessionListComponent.filterBy = "all";
      sessionListComponent.sortBy = "name";
      sessionListComponent.eventId = 2;

      sessionListComponent.ngOnChanges();
      expect(sessionListComponent.visibleSession.length).toBe(3);
      expect(sessionListComponent.visibleSession[0].name).toBe("Session A");
    });
  });
});
