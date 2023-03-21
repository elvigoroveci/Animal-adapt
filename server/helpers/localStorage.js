const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')

/**
 * constrsuctor to be added with required fields
 */
// class Pet {
//   constructor(id, category, name, breed) {
//     this.id = id;
//     this.category = category;
//     this.name = name;
//     this.breed = breed;
//   }
//   static addPet(pets, category, name, breed) {
//     const newId = Math.max(...pets.map(pet => pet.id), 0) + 1;
//     const newPet = new Pet(newId, category, name, breed);
//     pets.push(newPet);
//     localStorage.setItem('pets', JSON.stringify(pets));
//   }
// }

const LS = {

  addPet:Pet,
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
  }
}

module.exports = LS;