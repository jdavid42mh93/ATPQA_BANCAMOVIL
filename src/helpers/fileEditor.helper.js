/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
const fsLibrary = require('fs');
const os = require('os');

export const createBasePath = () => {
  const dir = './src/data/';
  if (!fsLibrary.existsSync(dir)) {
    fsLibrary.mkdirSync(dir);
  }
  return dir;
};

export const searchEntry = (path, condition) => {
    const stream = fsLibrary.readFileSync(path, 'utf8');
    const lines = stream.split(os.EOL);
  
    const result = [];
    lines.slice().reverse().forEach((element) => {
        if (!element) {
          return;
        }
        const parsedData = JSON.parse(element);
        console.log(parsedData);
        const evaluation = eval(`parsedData${condition.join(' && parsedData')}`);
        console.log('Evaluation ===>',evaluation);
        if (evaluation) {
          result.push(parsedData);
        };
    });
    return result;
  };