function random () {
    return Math.random().toString(36).substring(7); 
  }
  
  export class Advisor {
  
      constructor( advisor = {} ){
        this.advisorId = advisor.advisorId || -1;
        this.instituteId = advisor.instituteId || -1;
        this.username = advisor.username || random();
        this.password = advisor.password || random();
        this.firstName = advisor.firstName || random();
        this.lastName = advisor.lastName || random();
        this.secondLastName = advisor.secondLastName || random();
        this.birthdate = advisor.birthdate || random();
        this.gender = advisor.gender || random();
        this.phoneNumber = advisor.phoneNumber || random();
        this.profileId = advisor.profileId || -1;
        this.relationship = advisor.relationship || random();
        this.address = advisor.address || random();
        this.photo = advisor.photo ||  random();
        this.fcm_token = advisor.fcm_token || random();
        this.active = advisor.active || false;
        this.comments = advisor.comments || random();;
      }
    }