const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT,() => {
  console.log(`Server online at port ${PORT}`);
});