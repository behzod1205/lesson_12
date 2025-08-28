class University{
    constructor(name, departments){
        this.name = name
        this.departments = []
    }

    addDepartment(department){
        this.departments.push(department)
    }

    removeDepartment(department){
        this.departments = this.departments.filter(dep => dep !== department)
    }

    showDepartments(){
        return this.departments
    }
}

let univer = new University("TSUE")

univer.addDepartment("Management")
univer.addDepartment("Tourism")
univer.addDepartment("Accounting")
univer.addDepartment("Economy")
univer.addDepartment("Logistics")

univer.removeDepartment("Tourism")
univer.removeDepartment("Accounting")

console.log(univer.showDepartments())