let obj = {
  firstName: "sidharth",
  lastname: "baby",
};

function printFullName(stateName) {
  console.log(
    this.firstName + " " + this.lastname + " " + "from" + " " + stateName
  );
}

printFullName.call(obj, "kerala");
