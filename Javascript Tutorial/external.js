let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    gender: "Male",
    grade: "A",
    subjects: ["Math", "Science", "History"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    },
    // Method to calculate the full name of the student
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // Method to add a new subject to the student's subjects array
    addSubject: function(subject) {
        this.subjects.push(subject);
    },
    // Method to display the student's address
    displayAddress: function() {
        return this.address.street + ", " + this.address.city + ", " + this.address.state + " " + this.address.zipCode;
    }
};

// Object representing the student's guardian
let guardian = {
    firstName: "Jane",
    lastName: "Doe",
    relationship: "Parent",
    contact: {
        email: "jane.doe@example.com",
        phone: "123-456-7890"
    }
};

// Adding the guardian object to the student data
student.guardian = guardian;

// Adding a function to calculate the student's birth year based on age
student.birthYear = function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
};

// Adding a boolean property to indicate if the student is eligible for graduation
student.isEligibleForGraduation = true;

// Adding a null property for any additional notes
student.additionalNotes = null;

// Adding a Symbol property to represent a unique identifier for the student
student.studentId = Symbol("studentId");

// Adding a BigInt property for a large student ID
student.bigStudentId = BigInt(123456789);

// Adding a Map object to store additional information about the student
student.additionalInfo = new Map();
student.additionalInfo.set("height", 175);
student.additionalInfo.set("weight", 70);

/* Testing the functions and properties
console.log("Full Name:", student.fullName());
student.addSubject("English");
console.log("Subjects:", student.subjects);
console.log("Guardian:", student.guardian.fullName());
console.log("Birth Year:", student.birthYear());
console.log("Address:", student.displayAddress());
console.log("Eligible for Graduation:", student.isEligibleForGraduation);
console.log("Additional Notes:", student.additionalNotes);
console.log("Student ID Symbol:", student.studentId);
console.log("Big Student ID:", student.bigStudentId);
console.log("Additional Info:", student.additionalInfo);
*/