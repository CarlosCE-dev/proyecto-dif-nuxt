export class Profile {

    constructor( profile = {} ){
      this.profileId = profile.profileId || 1;
      this.profileName = profile.profileName || '';
      this.canAddInstitute = profile.canAddInstitute || false;
      this.canAddPrincipal = profile.canAddPrincipal || false;
      this.canAddTeacher = profile.canAddTeacher || false;
      this.canAddStudent = profile.canAddStudent || false;
      this.canAddTutor = profile.canAddTutor || false;
      this.canDeliver = profile.canDeliver || false;
      this.canCheckIn = profile.canCheckIn || false;
      this.canReadReport = profile.canReadReport || false;
      this.canPickUp = profile.canPickUp || false;
    }
  }