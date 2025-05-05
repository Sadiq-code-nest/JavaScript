class Student {

    constructor(name, id) {

        this.name = name;
        this.id = id;

    }
    // set function
    set fullName(full_Name) {
        this.full_Name = full_Name;
    }
    //Get Function

    get studentInfo() {

        return this.name + " " + this.id;
    }

}

let student1 = new Student("Sadiq", 63);
console.log(student1);
student1.fullName = 'Islam';
console.log(student1.full_Name);
console.log(student1.studentInfo);