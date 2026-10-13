//complete this code
let name = "John";
let age = 25;


class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get _name{
		return this.name;
	}
	set _age{
		this.age=30;
		return this.age;
	}
}

class Student extends Person {
	super(name);
	study(){
		return `${this.name} is studying.`;
	}
}

class Teacher extends Person {
	super(name);
	teach(){
		return `${this.name} is teaching`
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
