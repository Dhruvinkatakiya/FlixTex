const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stylish'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database successfully');
});


app.post('/signup', (req, res) => {
    const { email, password, mobile, address, city, state, country, pincode } = req.body;

    // Check if email already exists
    const checkQuery = "SELECT * FROM customer WHERE email = ?";
    db.query(checkQuery, [email], (err, rows) => {
        if (err) {
            console.error('Error checking existing data:', err);
            return res.status(500).json({ error: 'Failed to check existing data' });
        }

        if (rows.length > 0) {
            // Email already exists
            return res.status(409).json({ error: 'Email already exists' });
        } else {
            // Insert the new customer into the database
            const insertQuery = 'INSERT INTO customer (email, password, mobile, address, city, state, country, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(insertQuery, [email, password, mobile, address, city, state, country, pincode], (error, results, fields) => {
                if (error) {
                    console.error('Error occurred while signing up:', error);
                    if (error.code === 'ER_DUP_ENTRY') {
                        return res.status(409).json({ error: 'Email already exists' });
                    } else {
                        return res.status(500).json({ error: 'Internal server error' });
                    }
                } else {
                    console.log('Registered successfully..!');
                    return res.status(200).json({ message: 'Registered successfully' });
                }
            });
        }
    });
});

//get product
// app.get('/products', (req, res) => {
//     const sql = 'SELECT * FROM Product';
//     db.query(sql, (err, result) => {
//       if (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Error fetching products');
//       } else {
//         res.json(result);
//         console.log(`fetched products`);
//       }
//     });
//   });

  app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM product';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Error fetching products' }); // Send error response as JSON
      } else {
        console.log('Fetched products:', result);
        res.json(result); // Send products as JSON response
      }
    });
  });



  app.get('/cart', (req, res) => {
    const sql = 'SELECT * FROM cart';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Error fetching products' }); // Send error response as JSON
      } else {
        console.log('Fetched products:', result);
        res.json(result); // Send products as JSON response
      }
    });
  });

//   app.get('/cart/:id', (req, res) => {
//     const productId = req.params.id; // Get the value of the 'id' parameter from the URL
//     const sql = 'SELECT * FROM product WHERE ProductID = ?'; // Using parameterized query
//     db.query(sql, productId, (err, result) => {
//         if (err) {
//             console.error('Error fetching products:', err);
//             res.status(500).json({ error: 'Error fetching products' }); // Send error response as JSON
//         } else {
//             console.log('Fetched products:', result);
//             res.json(result); // Send products as JSON response
//         }
//     });
// });

app.get('/cart/:id', (req, res) => {
  const productId = req.params.id; // Get the value of the 'id' parameter from the URL
  const email = req.headers.email; // Assuming the email is passed as a header in the request
  const selectSql = 'SELECT * FROM product WHERE ProductID = ?'; // Using parameterized query
  db.query(selectSql, productId, (err, productResult) => {
      if (err) {
          console.error('Error fetching product:', err);
          res.status(500).json({ error: 'Error fetching product' }); // Send error response as JSON
      } else {
          const product = productResult[0]; // Assuming there's only one product with the given ID
          const insertSql = 'INSERT INTO cart (ProductID, Name, DiscountPrice, Gender, MRP, email) VALUES (?, ?, ?, ?, ?, ?)';
          const values = [product.ProductID, product.Name, product.DiscountPrice, product.Gender, product.MRP, email];
          db.query(insertSql, values, (err, cartResult) => {
              if (err) {
                  console.error('Error adding product to cart:', err);
                  res.status(500).json({ error: 'Error adding product to cart' });
              } else {
                  console.log('Product added to cart:', product);
                  res.json({ message: 'Product added to cart', product }); // Send success response with added product
              }
          });
      }
  });
});

app.delete('/deleteproduct/:id', (req, res) => {
  const productId = req.params.id;
  const sql = `DELETE FROM cart WHERE CartId = ${productId}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Product deleted successfully');
    res.json({ success: true });
  });
});



  
  // app.post('/cart/:id', (req, res) => {
  //   const productId = req.params.id; // Extract the product ID from the URL parameter
  //   const { email, quantity } = req.body; // Assuming you're sending email and quantity in the request body
  
  //   // Assuming the product name and discount price are fetched from the Product table based on the product ID
  //   const getProductInfoSQL = `SELECT name, discount_price FROM Product WHERE id = ?`;
  
  //   db.query(getProductInfoSQL, [productId], (err, productResult) => {
  //     if (err) {
  //       console.error('Error fetching product information:', err);
  //       res.status(500).json({ error: 'Error fetching product information' });
  //     } else {
  //       if (productResult.length === 0) {
  //         res.status(404).json({ error: 'Product not found' });
  //       } else {
  //         const { name, discount_price } = productResult[0];
  //         const insertCartSQL = `INSERT INTO cart (email, product_id, product_name, quantity, discount_price) VALUES (?, ?, ?, ?, ?)`;
  //         const values = [email, productId, name, quantity, discount_price];
  
  //         db.query(insertCartSQL, values, (err, insertResult) => {
  //           if (err) {
  //             console.error('Error adding product to cart:', err);
  //             res.status(500).json({ error: 'Error adding product to cart' });
  //           } else {
  //             console.log('Product added to cart:', insertResult);
  //             res.status(200).json({ message: 'Product added to cart successfully' });
  //           }
  //         });
  //       }
  //     }
  //   });
  // });
  


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//clothes items
app.get('/clothItems', (req, res) => {
    const sql = "SELECT * FROM cloth_items";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching cloth items:', err);
            return res.status(500).json({ error: 'Failed to fetch cloth items' });
        }
        res.json(results);
    });
});



app.post('/login', (req, res) => {
    console.log('Received login request:', req.body);

    const sql = "SELECT * FROM customer WHERE email = ? AND password = ?";

    console.log('Executing SQL query:', sql, 'with values:', [req.body.email, req.body.password]);

    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Failed to execute SQL query' });
        }

        if (result.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});











