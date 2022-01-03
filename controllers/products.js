const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'get all products' });
};
const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: 'get all products static' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
