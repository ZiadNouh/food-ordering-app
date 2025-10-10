import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: "alice@example.com",
      password: "password123",
      name: "Alice",
      phone: "1234567890",
      city: "Wonderland",
      country: "Fantasy",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "bob@example.com",
      password: "password456",
      name: "Bob",
      phone: "0987654321",
      city: "Builderland",
      country: "Reality",
    },
  });

  // Create Categories
  const pizzaCategory = await prisma.category.create({
    data: { name: "Pizza" },
  });

  const burgerCategory = await prisma.category.create({
    data: { name: "Burger" },
  });

  // Create Products
  const pizza = await prisma.product.create({
    data: {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato and cheese",
      image:
        "https://t3.ftcdn.net/jpg/03/07/65/18/360_F_307651812_yiydVwvUeeZlTCuUs4E2aqsUMUlwIo86.jpg",
      basePrice: 10.0,
      categoryId: pizzaCategory.id,
    },
  });

  const burger = await prisma.product.create({
    data: {
      name: "Cheeseburger",
      description: "Beef burger with cheese",
      image: "",
      basePrice: 8.0,
      categoryId: burgerCategory.id,
    },
  });

  // Create Sizes
  await prisma.size.createMany({
    data: [
      { name: "Small", price: 0, productId: pizza.id },
      { name: "Medium", price: 2, productId: pizza.id },
      { name: "Large", price: 4, productId: pizza.id },
      { name: "Regular", price: 0, productId: burger.id },
      { name: "Double", price: 3, productId: burger.id },
    ],
  });

  // Create Extras
  await prisma.extra.createMany({
    data: [
      { name: "Cheese", price: 1, productId: pizza.id },
      { name: "Bacon", price: 1.5, productId: burger.id },
      { name: "Tomato", price: 0.5, productId: burger.id },
    ],
  });

  // Create Orders
  const order1 = await prisma.order.create({
    data: {
      paid: true,
      subTotal: 12,
      deliveryFee: 2,
      totalPrice: 14,
      userEmail: user1.email,
      phone: user1.phone!,
      streetAddress: "123 Main St",
      postalCode: "11111",
      city: user1.city!,
      country: user1.country!,
    },
  });

  // Add products to order
  await prisma.orderProduct.create({
    data: {
      quantity: 1,
      orderId: order1.id,
      userId: user1.id,
      productId: pizza.id,
    },
  });

  await prisma.orderProduct.create({
    data: {
      quantity: 2,
      orderId: order1.id,
      userId: user1.id,
      productId: burger.id,
    },
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
