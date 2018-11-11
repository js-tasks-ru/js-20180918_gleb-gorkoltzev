let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
  let current = new Date(Date.parse(this.from) + 86400000),
      finish = this.to;

  return {
    next() {
      let getDayFromDate = (date) => {
        let result = date.getDate().toString();
        if (result.length === 1) {
          result = `0${result}`;
        }
        return result;
      };

      let makeWeekend = (date) => {
        return `[${date}]`;
      };

      let incrementDate = (date) => {
        let result = date;
        result.setDate(result.getDate() + 1);
        return result;
      };

      if (current.getMonth() === finish.getMonth() && current.getDate() > finish.getDate()) {
        return {
          done: true
        }
      } else {
        if (current.getDay() === 0 || current.getDay() === 6) {
          let temp = getDayFromDate(current);
          temp = makeWeekend(temp);
          current = incrementDate(current);
          return {
            value: temp
          }
        }
        let temp = getDayFromDate(current);
        current = incrementDate(current);
        return {
          value: temp
        }
      }
    }
  }
};

function launch() {
  for (val of calendar) {
    console.log(val);
  }
}
