const { LocalStorage } = require('node-localstorage');
const loginStorage = new LocalStorage('./usersList');


const USERS = {

  /**
   * Get all items of a given model
   * 
   * @param {string} model 
   * @returns array
   */
  all: (model) => {
    return JSON.parse(loginStorage.getItem(model) || '[]');
  },

  /**
   * This method will set the first dummy data
   * 
   * @param {string} model
   * @param {Array} items 
   * 
   * @returns {void}
   */
  addALL: (model, items) => {
    return loginStorage.setItem(model, JSON.stringify(items));
  },

  /**
   * Find a single item from a given ID
   * 
   * @param {string} model 
   * @param {number} id 
   * 
   * @returns {object} item
   */
  find: (model, data) => {
    const users = USERS.all(model);

    const user = users.find((i) => i.user == data.user);

    if (user !== undefined &&  user.password == data.password) {
      
      return user;

    } else if (user == undefined || user.password !== data.password) {
      
      return JSON.stringify({ message: 'wrong username or password' });
    }

  },

  /**
   * 
   * @param {string} model 
   * @param {object} data 
   */
  create: (model, data) => {
    let user = USERS.all(model);

    data.id = Math.max(...user.map(i => i.id)) + 1;

    user.push(data);

    USERS.addALL(model, user);

    return data;
  },

  /**
   * 
   * @param {string} model 
   * @param {number} id 
   * @returns {string} newModel
   */
  delete: (model, id) => {
    let users = USERS.all(model);
    let deleted = users.findIndex((i) => i.id == id);
    console.log(deleted);
    users.splice(deleted, 1);
    return loginStorage.setItem(model, JSON.stringify(users));

  }
}

module.exports = USERS;