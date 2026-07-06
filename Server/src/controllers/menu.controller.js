import cloudinary from "../config/cloudinary.js";
import menuModel from "../models/menu.model.js";

export async function createMenuItem(req, res) {
  const { name, description, price, category, isAvailable } = req.body;
  if (!name && !description && !price && !category) {
    return res.status(400).json({
      message: "You have to give details",
    });
  }
  if (req.file) {
    const filepath = req.file.path;
    if (!filepath) {
      return res.status(400).json({
        message: "there is some problem accepting the image",
      });
    }
  }
  if (!req.file) {
    return res.status(400).json({
      message: "something went wrong",
    });
  }

  const result = await cloudinary.uploader.upload(filepath, { folder: "Menu" });
  const image = result.secure_url;

  const item = await menuModel.create({
    name,
    description,
    image,
    price,
    category,
    isAvailable,
  });
  console.log(item);
  return res.status(201).json({
    message: "item Created Successfully",
    item,
  });
}

export async function getItems(req, res) {
  const category = req.query.category;
  const filter = category
    ? { category, isAvailable: true }
    : { isAvailable: true };
  const items = await menuModel.find(filter);
  if (!items) {
    return res.status(400).json({
      message: "No Items Found",
    });
  }
  return res.status(200).json({
    message: "Items Fetched Successfull",
    items,
    total: items.length,
  });
}

export async function getItem(req, res) {
  const id = req.params.id;
  const item = await menuModel.findById(id);

  if (item.isAvailable === false) {
    return res.status(400).json({
      message: "item is not available",
    });
  }
  return res.status(200).json({
    message: "item fetched",
    item,
  });
}

export async function deleteItem(req, res) {
  const { id } = req.params;
  console.log(id);
  await menuModel.findByIdAndDelete(id);
  return res.status(200).json({
    message: "deleted",
  });
}

export async function updateItem(req, res) {
  const { id } = req.params;
  const item = await menuModel.findById(id);
  if (!item) {
    return res.status(400).json({
      message: "item not found",
    });
  }
  const updateditem = { ...req.body };
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Menu",
    });

    updatedItem.image = result.secure_url;
  }
  const newItem = await menuModel.findByIdAndUpdate(id, updateditem, {
    new: true,
  });
  return res.status(200).json({
    message: "item Updated Successfully",
    newItem,
  });
}
