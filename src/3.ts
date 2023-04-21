//Numeric Enum
//Variable enum - Pac

const enum RollNumber {
  Jonn,
  Bil,
  Ivan,
  Petro,
}

//console.log(RollNumber);

let studentsList1: RollNumber = RollNumber.Ivan;
let studentsList2: RollNumber = RollNumber.Bil;
let studentsList3: RollNumber = RollNumber.Jonn;

console.log(studentsList1);
console.log(studentsList2);
console.log(studentsList3);

//String Enum type

const enum StudentsDetails {
  Name = "Bil",
  Major = "Teacher",
}

//console.log(RollNumber);

let studentsName: StudentsDetails = StudentsDetails.Name;
let studentsMajor: StudentsDetails = StudentsDetails.Major;

console.log(studentsName, studentsMajor);

//Heterogeneouus Enum

const enum StudentsNewDetails {
  ID = 1,
  Name = "Bil",
  Major = "Teacher",
}

//console.log(RollNumber);

let studentsNewID: StudentsNewDetails = StudentsNewDetails.ID;
let studentsNewName: StudentsNewDetails = StudentsNewDetails.Name;
let studentsNewMajor: StudentsNewDetails = StudentsNewDetails.Major;

console.log(studentsNewID, studentsName, studentsMajor);
console.log(
  `${studentsNewID} - ${studentsName} - has a major in ${studentsMajor}`
);

