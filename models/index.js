// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: `category_id`
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: `category_id`
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: `test_name`, <-- I'm not sure when this is necessary. It threw an error when I tried it, so I'm sure I'd have to add another "as" in the routes, but it works fine without it.
  foreignKey: `product_id`
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: `test_name`,
  foreignKey: `tag_id`
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
