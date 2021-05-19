const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rp = require('request-promise');
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/posts', require('./router/routes'));


// async function getPostsCommets(){
// 	var posts = await getPost();
// 	var comments = await getComments();
//     console.log("==============================0000000000000000000000000000")
// 	for(let i = 0; i < posts.length; i++){
// 		for(let j = 0; j < comments.length; j++){
// 			if(posts[i].id == comments[j].postId){
// 				posts[i].comments.push(comments[j])
// 			}
// 		}
// 	}

// 	return posts;
// }


const port = 3000;

app.listen(port, ()=>{
	console.log("Server is running on port ",+port);
})