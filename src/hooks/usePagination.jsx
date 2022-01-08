import _ from 'lodash';

export const paginate = (collection, current, pageSize) => {
  const start = (current - 1) * pageSize;
  return _(collection).slice(start).take(pageSize).value();
};
