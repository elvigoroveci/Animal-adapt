const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')

/**
 * constrsuctor to be added with required fields
 */
// class Pets {
//   constructor(category, name, breed) {
//     this.category = category;
//     this.name = name;
//     this.breed = breed;
//   }

//   addNewItem() {
//     let items = JSON.parse(localStorage.getItem(this.category)) || [];
//     let newItem = {
//       id: items.length + 1,
//       name: this.name,
//       breed: this.breed
//     };
//     items.push(newItem);
//     localStorage.setItem(this.category, JSON.stringify(items));
//   }
// }

const LS = {

  
  /**
   * Get all items of a given model
   * 
   * @param {string} model 
   * @returns array
   */
  all: (model) => {
    return JSON.parse(localStorage.getItem(model) || '[]');
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
    return localStorage.setItem(model, JSON.stringify(items));
  },

  /**
   * Find a single item from a given ID
   * 
   * @param {string} model 
   * @param {number} id 
   * 
   * @returns {object} item
   */
  find: (model, id) => {
    const items = LS.all(model);

    return items.find((i) => i.id == id);
  },

  /**
   * 
   * @param {string} model 
   * @param {object} data 
   */
  create: (model, data) => {
    let items = LS.all(model);

    data.id = Math.max(...items.map(i => i.id)) + 1;

    items.push(data);
    
    LS.addALL(model, items);

    return data;
  },

  /**
   * 
   * @param {string} model 
   * @param {number} id 
   * @returns {string} newModel
   */
  delete: (model,id) =>{
    let items = LS.all(model);
    let deleted = items.findIndex((i) => i.id == id);
    items.splice(deleted,1);
    return localStorage.setItem(model,JSON.stringify(items));

  }
}

module.exports = LS;