// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - need review
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products - need review
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // define an alias for when data is retrieved
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // define an alias for when data is retrieved
  as: 'tags_list'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
