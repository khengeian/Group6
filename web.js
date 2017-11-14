var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Dr. Hasan, we are from group 6 <br><br>Our group member are: <br> 1. Hii Wei Kai CB14155<br> 2. Zahra Syhida CB15169<br> 3. Kho Kheng Eian CB15173<br> 4. Wong Ying Shin CB15172 <br> 5. Toh Kok Cheng CB15177<br>6. Lim Jing Jie CB15170<br> THANK YOU...');
});

app.listen(process.env.PORT || 3000);
