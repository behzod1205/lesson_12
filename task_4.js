// let students = new Map([
// 	["first-year students", [{id: 1, name: "Behzodbek Abdumutalov", feild: "Management"}, 
// 		{id: 2, name: "Choriyev Ulug'bek", feild: "Management"},
// 		{id: 3, name: "Abdumaxmudov Ravshanbek", feild: "Accounting"}]],
// 	["second-year students", [{id: 1, name: "Behzodbek Abdumutalov", feild: "Management"}, 
// 		{id: 2, name: "Choriyev Ulug'bek",feild: "Management"},
// 		{id: 3, name: "Abdumaxmudov Ravshanbek", feild: "Accounting"}]],
// 	["third-year students", [{id: 1, name: "Behzodbek Abdumutalov", feild: "Management"}, 
// 		{id: 2, name: "Choriyev Ulug'bek",feild: "Management"},
// 		{id: 3, name: "Abdumaxmudov Ravshanbek", feild: "Accounting"}]],
// 	["fourth-year students", [{id: 1, name: "Behzodbek Abdumutalov", feild: "Management"}, 
// 		{id: 2, name: "Choriyev Ulug'bek", feild: "Management"},
// 		{id: 3, name: "Abdumaxmudov Ravshanbek", feild: "Accounting"}]]
// ])

// console.log(students)



class Classes{
	constructor(){
		this.students = new Map([
			["first-year students", []],
			["second-year students", []],
			["third-year students", []],
			["fourth-year students", []]
		])
	}

	createOne(grade, student){
		this.students.get(grade).push(student)
		console.log(`You added ${student.name} to the ${grade}`)
		console.log("\n------------------------------------------------------\n")
	}

	createMany(grade, stds){
		this.students.get(grade).push(...stds)


		let names = stds.map(s => s.name).join(" and ")

		console.log(`You added ${names} to the ${grade}`)
		console.log("\n------------------------------------------------------\n")
	}

	updateOne(grade, id, new_info){
		let student = this.findOne(grade, id)

		if(student){
			Object.assign(student, new_info)
			console.log(`\nYou upgraded ${student.name}'s info!`)
			console.log("\n------------------------------------------------------\n")
		}else{
			console.log("Not found!")
			console.log("\n------------------------------------------------------\n")
		}
	}

	updateMany(grade, new_infos){
		new_infos.forEach(new_info => {
			this.updateOne(grade, new_info.id, new_info)
		})

	}

	findAll(grade){
		return this.students.get(grade)
	}

	findOne(grade, id){
		return this.students.get(grade).find(s => s.id === id)
	}

	deleteOne(grade, id){
		let arr = this.students.get(grade)


		 let student = arr.find(s => s.id === id)

    	if (student) {
        	console.log(`You removed ${student.name} from class!`)
        	console.log("\n------------------------------------------------------\n")


        	this.students.set(grade, arr.filter(s => s.id !== id))
    	} else {
        	console.log(`Student with id_${id} not found in ${grade}`)
    	}
	}

	deleteMany(grade, all_id){
		all_id.forEach(id => this.deleteOne(grade, id))
	}

}


let student = new Classes()


student.createOne("first-year students", {id: 1, name: "Behzodbek Abdumutalov", feild: "Management"})


student.createMany("first-year students", [
	{id: 2, name: "Choriyev Ulug'bek", feild: "Management"},
	{id: 3, name: "Abdumaxmudov Ravshanbek", feild: "Accounting"}
])


console.log(student.findAll("first-year students"))
console.log(student.findOne("first-year students", 1))


student.updateOne("first-year students", 2, {feild: "Finance"})

student.updateMany("first-year students", [
  {id: 1, feild: "Finance"}, 
  {id: 3, name: "Ravshan", feild: "Economics"}
])

student.deleteOne("first-year students", 3)

console.log(student.findAll("first-year students"))