import cartModel from "../models/cart.model.js";
import menuModel from "../models/menu.model.js";

export async function addToCart(req, res) {
  try {
    const {  menuItemId, quantity = 1 } = req.body;
    const userId = req.user._id;

    let cart = await cartModel.findOne({ userId });
    if (!cart) {
      cart = new cartModel({
        userId,
        items: [],
        totalCartPrice: 0,
      });
    }
    const menu = await menuModel.findById(menuItemId);
    if (!menu) {
      return res.status(400).json({
        message: "Menu Item is not found",
      });
    }

    const isItemExist = cart.items.find((Item) =>
      Item.menuItemId.equals(menu._id),
    );
    if (!isItemExist) {
      cart.items.push({ menuItemId: menu._id, quantity, price: menu.price });
    } else {
      isItemExist.quantity += 1;
    }

    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();

    return res.status(201).json({
      message: "item added successfully",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCart(req, res) {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: "You have to login First!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        message: "No Cart Found",
      });
    }
    return res.status(200).json({
      message: "Cart Fetched SuccessFully",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function removeItemFromCart(req, res) {
  try {
    const { menuItemId } = req.body;
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({
        message: "You have to login First!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "No Cart Found",
      });
    }
    cart.items.find((item) => {
      if (menuItemId.toString() === item.menuItemId.toString()) {
        cart.items.remove(item);
      }
    });
    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();

    return res.status(200).json({
      message: "Item Removed Successfully",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function increaseQuantity(req, res) {
  try {
    const { menuItemId } = req.body;
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: "You have to login First!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "No Cart Found",
      });
    }
    cart.items.find((item) => {
      if (menuItemId.toString() === item.menuItemId.toString()) {
        item.quantity += 1;
      }
    });
    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();
    return res.status(200).json({
      message: "Item Quantity increased",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function decreaseQuantity(req, res) {
  try {
    const { menuItemId } = req.body;
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: "You have to login First!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "No Cart Found",
      });
    }
    cart.items.find((item) => {
      if (menuItemId.toString() === item.menuItemId.toString()) {
        if (item.quantity <= 1) {
          return res.status(400).json({
            message: "item quantity cant be 0 or less please remove the item",
          });
        }
        item.quantity -= 1;
      }
    });

    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();
    return res.status(200).json({
      message: "Item Quantity decreased",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function clearCart(req, res) {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: "You have to login First!",
      });
    }
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "No Cart Found",
      });
    }
    cart.items = [];
    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();
    return res.status(200).json({
      message: "Cart is Empty now",
      cart : cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
