const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  //  Drop existing categories
  await Category.deleteMany();

  // Add drink categories to the collection and await the results
  const categories = await Category.insertMany([
    { name: "Apple" },
    { name: "Samsung" },
    { name: "Others" },
  ]);

  // Log out the seed data to indicate what should appear in the database
  console.log("Categories seeded");

  // Drop existing drink items[]
  await Product.deleteMany();

  // Add drink items to the collection and await the results
  await Product.insertMany([
    {
        name: "Iphone SE (3rd Gen)",
        description:
          "128GB Starlight - Refurbished - As New",
        image: "iphone_se-3rdgen.png",
        category: categories[0]._id,
        price: 568,
        quantity: 1
    },
    {
        name: "Iphone 12 Pro Max",
        description:
          "128GB Silver - Excellent - Refurbished",
        image: "iphone_12-promax.png",
        category: categories[0]._id,
        price: 1068,
        quantity: 1
    },    
    {
        name: "Iphone XR",
        description:
          "64GB White - Refurbished - As New",
        image: "iphone_xr.png",
        category: categories[0]._id,
        price: 435,
        quantity: 1
    },    
    {
        name: "Iphone 8",
        description:
          "64GB Gold - Very Good - Refurbished with New Battery",
        image: "iphone_8.png",
        category: categories[0]._id,
        price: 249,
        quantity: 1
    },    
    {
        name: "Iphone 13 Mini",
        description:
          "256GB Pink - Excellent - Refurbished",
        image: "iphone_13-mini.png",
        category: categories[0]._id,
        price: 899,
        quantity: 1
    },
    {
        name: "Galaxy S20+",
        description:
          "128GB/12GB - 64MP - VF - Black",
        image: "samsung_galaxy-s20.png",
        category: categories[1]._id,
        price: 799,
        quantity: 1
    }, 
    {
        name: "Galaxy S21",
        description:
          "128GB Phantom Violet - Refurbished - As New",
        image: "samsung_galaxy-s21.png",
        category: categories[1]._id,
        price: 999,
        quantity: 1
    }, 
    {
        name: "Galaxy S23",
        description:
          "Dual Sim - 6.8\"",
        image: "samsung_galaxy-s23.png",
        category: categories[1]._id,
        price: 2599,
        quantity: 1
    }, 
    {
        name: "Galaxy A52s",
        description:
          "128GB White - Refurbished - As New",
        image: "samsung_galaxy-a52s.png",
        category: categories[1]._id,
        price: 419,
        quantity: 1
    }, 
    {
        name: "Galaxy S22+",
        description:
          "Dual Sim - 6.6 inches - SM-S906",
        image: "samsung_galaxy-s22.png",
        category: categories[1]._id,
        price: 1199,
        quantity: 1
    },
    {
        name: "Xiaomi Redmi Note 5",
        description:
          "3GB RAM - 32GB ROM - Black - Refurbished - As New",
        image: "xiaomi_mi-note.png",
        category: categories[2]._id,
        price: 122,
        quantity: 1
    },
    {
        name: "Xiaomi Redmi 4X",
        description:
          "3GB RAM - 32GB ROM - Gold - Refurbished - As New",
        image: "xiaomi_mi-4x.png",
        category: categories[2]._id,
        price: 112,
        quantity: 1
    }, 
    {
        name: "Asus ROG Phone 5",
        description:
          "16GB/256GB - Black - Refurbished - As New",
        image: "asus_rog-phone5.png",
        category: categories[2]._id,
        price: 747,
        quantity: 1
    }, 
    {
        name: "Google Pixel 4a",
        description:
          "128GB Black - Refurbished - As New",
        image: "google_pixel-4a.png",
        category: categories[2]._id,
        price: 419,
        quantity: 1
    }, 
    {
        name: "Oppo Find X3 Pro",
        description:
          "12/256GB - 50MP - Black - Refurbished - As New",
        image: "oppo_find-x3pro.png",
        category: categories[2]._id,
        price: 488,
        quantity: 1
    } 
  ]);

  // Log out the seed data to indicate what should appear in the database
  console.log("Products seeded");

  //  Drop existing users
  await User.deleteMany();

  // Add users to the collection and await the results
  await User.create(
    {
        firstName: "Grethel",
        lastName: "Reyes",
        email: "grethel.r@gmail.com",
        password: "password01"
    },
    {
        firstName: "Mark",
        lastName: "Go",
        email: "mark.g@gmail.com",
        password: "password02"
    },
    {
        firstName: "Margaret",
        lastName: "Francis",
        email: "margaret.f@gmail.com",
        password: "password03"
    }
  );
  // Log out the seed data to indicate what should appear in the database
  console.log("Users seeded");

  process.exit();
});

