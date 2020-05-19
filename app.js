const simpleGit = require('simple-git');
const jsonfile = require('jsonfile');
const moment = require('moment');
const FILE_PATH = './dummy.json';
const random = require('random');

const makeCommit = (n) => {

  if (n === 0) return simpleGit().push();;
  x = random.int(0, 52);
  y = random.int(0, 6);
  const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();

  const data = { date: DATE };
  console.log(DATE);

  //  git commit --date 'DD Aug YYYY' -m 'message'
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE },
      makeCommit.bind(this, (n - 1)));
  });

  console.log(n);

}


makeCommit(50);







