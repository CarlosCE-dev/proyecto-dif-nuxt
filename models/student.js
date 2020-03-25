function random () {
    return Math.random().toString(36).substring(9); 
  }
  
  export class Student {
  
      constructor( student = {} ){
        this.studentId = student.userId || -1;
        this.instituteId = student.instituteId || -1;
        this.studentCardFolio = student.studentCardFolio || random();
        this.firstName = student.firstName ||  random();
        this.lastName = student.lastName || random();
        this.secondLastName = student.secondLastName || random();
        this.gender = student.gender || random();
        this.birthdate = student.birthdate || '12/12/1234';
        this.photo = student.photo ||  random();
        this.active = student.active || true;
      }
    }