export const user = {

    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

user.setFullName('Peter Merkury');
console.log(user.getFullName());