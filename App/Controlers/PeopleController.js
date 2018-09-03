export default class PeopleController {
  constructor() {
    "ngInject";
    this.inputName = "";
    this.filter = "All";
    this.data = [
      { name: "Juan SIN REDUX", age: 29, active: true },
      { name: "Angie SIN REDUX", age: 27, active: false },
      { name: "Oscar SIN REDUX", age: 19, active: true }
    ];
    this.filters = [
      { value: "All" },
      { value: "Active" },
      { value: "Inactive" }
    ];
  }

  activeHandler (index) {
    const { data } = this;
    const person = data[index];

    this.data = [
      ...data.slice(0, index),
      Object.assign({}, person, { active: !person.active }),
      ...data.slice(index + 1)
    ];
  }

  addHandler () {
    const { data } = this;
    const person = { name: this.inputName, active: true };
    this.inputName = "";

    this.data = [...data, person];
  }

  classNames(person) {
   return { active: person.active, inactive: !person.active }
  }

  isActive(person) {
    return ['All', person.active ? 'Active' : 'Inactive'].includes(this.filter);
  }

  filtersClassNames(filter) {
    return this.filter === filter.value ? "filter-active" : "filter-inactive"
  }

  filterChange (filter) {
    this.filter = filter.value;
  }
}
