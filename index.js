const express = require('express');
const fs = require('fs');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get('/image', async (req, res) => {
  try {
    const response = await fetch('https://humble-train-wr97r45wx69j3gr7r-3000.app.github.dev/image');
    if (response.ok) {
      const data = await response.json();

      const imageUrls = data.map(photo => photo.urls.regular);
      res.status(200).json({
        success: true,
        images: imageUrls
      });
    } else {
      console.log("Problem while fetching API");
      res.status(500).json({
        success: false,
        message: "Failed to fetch images"
      });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});

// app.get('/users', (req, res) => {
//   fs.readFile('public/users.json', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     const users = JSON.parse(data);
//     res.json(users);
//   });
// });

// app.post('/usersId/', (req, res) => {
//   const userId = req.body ;
//   fs.readFile('public/users.json', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     const users = JSON.parse(data);
//     const user = users.find(user => user.id === parseInt(userId));
//     if (!user) {
//       res.status(404).json({ error: 'User not found' });
//       return;
//     }
//     res.json(user);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// const func1 = (a,b)=>{
//   return a+b
// }

// console.log(func1(5,6))

// const login = async(req,res)=>{
//   try {
//     // DB call
//     const res = await UserDB.findOne()
//     if(!res){
//       console.log("User not found")
//     }
//     const data = res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// rest operator
// function name(a,b,...c){
//   console.log(a,"  ",b)
//   console.log(c)
// }

// name(3,4,5,6,5,7)

// spread operator
// const arr = [1,2,[3,4,[5,6]]]
// const obj = {...arr}
// console.log(obj)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject); 
