import { setFilter } from "../Reducers/filterReducer";
import { togglePersonState, addPerson } from "../Reducers/peopleReducer";

export default class PeopleController {
  constructor($ngRedux) {
    "ngInject";
    this.inputName = "";

    this.filters = [
      { value: "All" },
      { value: "Active" },
      { value: "Inactive" }
    ];

    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {
      setFilter,
      togglePersonState,
      addPerson
    })(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    const { filter, data } = state;
    return {
      filter,
      data
    }
  }

  addHandler () {
    const person = { name: this.inputName, active: true };
    this.inputName = "";
    this.addPerson(person);

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
    this.setFilter(filter.value);
  }
}
