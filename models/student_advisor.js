function random () {
    return Math.random().toString(36).substring(7); 
  }
  
  export class StudentAdvisor {
  
      constructor( student = {} ){
        this.studentAdvisorId = student.studentAdvisorId || random();
        this.studentId = student.userId || random();
        this.instituteId = student.instituteId || -1;
        this.advisorId = student.advisorId || -1;
        this.active = student.active || -1;
        this.lastUpdate = student.lastUpdate || -1;
      }
    }