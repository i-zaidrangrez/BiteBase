import cartModel from "../models/cart.model.js";
import menuModel from "../models/menu.model.js";

export async function addToCart(req, res) {
  try {
    const { userId, menuItemId, quantity = 1 } = req.body;

    let cart = await cartModel.findOne({ userId });
    if (!cart) {
      cart = new cartModel({
        userId,
        items: [],
        totalCartPrice: 0,
      });
    }
    await cart.save();
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
      await cart.save();
    } else {
      isItemExist.quantity += 1;
      await cart.save();
    }

    cart.totalCartPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    await cart.save();

    return res.status(201).json({
      message: "item added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export async function getCart(req, res) {
  try {
    const { userId } = req.body;
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
    return res.status(200).json({
      message: "Cart Fetched SuccessFully",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export async function removeItemFromCart(req, res) {
  try {
    const { userId, menuItemId } = req.body;
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
    cart.items.filter((item) => {
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
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export async function increaseQuantity(req, res) {
  try {
    const { userId, menuItemId } = req.body;
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
    cart.items.filter((item) => {
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
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export async function decreaseQuantity(req, res) {
  try {
    const { userId, menuItemId } = req.body;
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
    cart.items.filter((item) => {
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
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export async function clearCart(req, res) {
  try {
    const { userId, menuItemId } = req.body;
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
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}
