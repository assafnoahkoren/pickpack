const moment = require('moment') as typeof import('moment');

export const time = {
  now: () => moment.utc().format(),
};
