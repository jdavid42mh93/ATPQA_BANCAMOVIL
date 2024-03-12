const fsLibrary = require('fs');
const os = require('os');

export const createBasePath = () => {
    const dir = './src/data/';
    if (!fsLibrary.existsSync(dir)) {
      fsLibrary.mkdirSync(dir);
    }
    return dir;
};

export const restartFile = (path) => {
  fsLibrary.writeFileSync(path, '');
};

export const writeLine = (path, data = '') => {
  fsLibrary.appendFileSync(path, data + os.EOL);
};

export const readFile = (path, encoding = 'utf8') => {
  return fsLibrary.readFileSync(path, encoding);
};

export const searchEntry = (path, condition) => {
    const stream = readFile(path);
    const lines = stream.split(os.EOL);
    
    const result = [];
    lines.slice().reverse().forEach((element) => {
        if (!element) {
          return;
        }
        const parsedData = JSON.parse(element);
        const evaluation = eval(`parsedData${condition.join(' && parsedData')}`);
        if (evaluation) {
          result.push(parsedData);
        }
    });
    return result;
  };

export const editEntry = (path, condition, edit) => {
    const stream = readFile(path);
    const lines = stream.split(os.EOL);

    restartFile(path);

    lines.forEach((element) => {
      if (!element) {
        return;
      }
      const data = JSON.parse(element);
      const evaluation = eval(`data${condition.join(' && data')}`);
      if (evaluation) {
        edit.forEach((instruction) => {
          eval(`data${instruction}`);
        });
      }
      writeLine(path, JSON.stringify(data));
    });
};