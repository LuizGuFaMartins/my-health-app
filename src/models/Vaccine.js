let ids = 0;
let vaccines = [];

module.exports = {
  new(vaccine) {
    let newVaccine = {
      id: ++ids,
      date: vaccine.date,
      vaccine: vaccine.vaccine,
      dose: vaccine.dose,
      uploadUrl: vaccine.uploadUrl,
      nextDate: vaccine.nextDate,
    };
    vaccines.push(newVaccine);
    return newVaccine;
  },
  update(id, vaccine) {
    let pos = this.getPositionById(id);
    if (pos >= 0) {
      vaccines[pos].date = vaccine.date;
      vaccines[pos].vaccine = vaccine.vaccine;
      vaccines[pos].dose = vaccine.dose;
      vaccines[pos].uploadUrl = vaccine.uploadUrl;
      vaccines[pos].nextDate = vaccine.nextDate;
    }
  },
  list() {
    return vaccines.length > 0 ? vaccines : [];
  },
  getElementById(id) {
    let pos = this.getPositionById(id);
    if (pos >= 0) {
      return vaccines[pos];
    }
    return null;
  },
  getPositionById(id) {
    for (let i = 0; i < vaccines.length; i++) {
      if (vaccines[i].id == id) {
        return i;
      }
    }
    return -1;
  },
  getElementByEmail(email) {
    let findedUser;
    vaccines.forEach(vaccine => {
      if (vaccine.email === email) findedUser = vaccine;
      else findedUser = null;
    });
    return findedUser;
  },
  delete(id) {
    let i = this.getPositionById(id);
    if (i >= 0) {
      vaccines.splice(i, 1);
      return true;
    }
    return false;
  },
};
