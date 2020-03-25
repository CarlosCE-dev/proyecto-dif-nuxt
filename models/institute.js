function random () {
    return Math.random().toString(36).substring(7); 
  }
  
  export class Institute {
  
      constructor( institute = {} ){
        this.instituteId = institute.instituteId || random();
        this.instituteCode = institute.instituteCode || -1;
        this.address = institute.address || random();
        this.email = institute.email || 'test@test.com';
        this.phoneNumber = institute.phoneNumber;
        this.suscriptionStatus = institute.suscriptionStatus || random();
        this.payReferenceNumber = institute.payReferenceNumber || random();
        this.payCardNumber = institute.payCardNumber || random();
        this.payCardExpiracy = institute.payCardExpiracy || '12/12/1234';
        this.payCardPin = institute.payCardPin || 'Masculino';
        this.payCardSaved = institute.payCardSaved || random();
        this.profileId = institute.profileId ||  random();
        this.stateId = institute.stateId || true;
        this.municipalityId = institute.municipalityId || 1;
        this.localityId = institute.localityId || 1;
        this.photo = institute.photo || 1;
      }
    }