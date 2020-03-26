function random () {
  return Math.random().toString(36).substring(7); 
}

export class Guardian {

    constructor( guardian = {} ){
      this.userId = guardian.userId || random();
      this.instituteId = guardian.instituteId || -1;
      this.password = guardian.password || random();
      this.email = guardian.email || 'test@test.com';
      this.fcmToken = 'NA';
      this.firstName = guardian.firstName || random();
      this.lastName = guardian.lastName || random();
      this.secondLastName = guardian.secondLastName || random();
      this.birthdate = guardian.birthdate || '12/12/1234';
      this.gender = guardian.gender || '';
      this.phoneNumber = guardian.phoneNumber || random();
      this.photo = guardian.photo ||  random();
      this.active = guardian.active || false;
      this.profileId = guardian.profileId || 1;
    }
  }