var request = require('http');
var body_parser = require('body_parser');

request.get('/action',function(req,res)
{
	res.send('your name is'+req.body.name)<br>
	res.send('your age is'+req.body.age)
});
app.listen(3000,()=>
{
	console.log(your server running at 'http://localhost:3000')
});