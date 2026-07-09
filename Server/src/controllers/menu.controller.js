import cloudinary from "../config/cloudinary.js";
import menuModel from "../models/menu.model.js";

export async function createMenuItem(req, res) {
  try {
    const { name, description, price, category, isAvailable } = req.body;
    if (!name && !description && !price && !category) {
      return res.status(400).json({
        message: "You have to give details",
      });
    }
    
      const filepath = req.file.path;
      if (!filepath) {
        return res.status(400).json({
          message: "there is some problem accepting the image",
        });
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
    return res.status(201).json({
      message: "item Created Successfully",
      item,
    });
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function getItems(req, res) {
  try {
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
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function getItem(req, res) {
  try {
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
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function deleteItem(req, res) {
 try {
   const { id } = req.params;
   console.log(id);
   await menuModel.findByIdAndDelete(id);
   return res.status(200).json({
     message: "deleted",
   });
 } catch (error) {
  return res.status(500).json({
      message : error
    })
 }
}

export async function updateItem(req, res) {
  try {
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
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function changeAvailablity(req,res) {
   try {
    const id = req.params.id;
    const item = await menuModel.findById(id);
  
    if (item.isAvailable) {
      item.isAvailable = false
    }else{
      item.isAvailable = true
    }
    console.log(item.isAvailable)
    await item.save()
    return res.status(200).json({
      message: "availability is Changed",
      item,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message : error
    })
  }
}