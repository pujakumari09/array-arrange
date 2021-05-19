const rp = require('request-promise');
const axios = require('axios');

const getPosts = () => {
	return new Promise(async(resolve, reject)=> {

		var options = {
			'method': 'GET',
			'url': 'https://jsonplaceholder.typicode.com/posts',
		};
        const result = await axios(options);

        resolve(result.data);
	})
}

const getComments = () => {
	return new Promise(async(resolve, reject)=> {

		var options = {
			'method': 'GET',
			'url': 'https://jsonplaceholder.typicode.com/comments',
		};
        const result = await axios(options);

        resolve(result.data);
	})
}

const getPostsComments = async(req, res) => {
	try{
		var posts = await getPosts();
	    var comments = await getComments();
        
        var d = []

		for(let i = 0; i < posts.length; i++)
		{
			for(let j = 0; j < comments.length; j++)
			{   
			let n = {}
			
				if(posts[i].id == comments[j].postId)
				{
					d.push(posts[i])
					n.comments = comments[j]
					d.push(n);
				}
			}
		}
		
		if(d)
		    res.json({status: true, msg : d})
	    else
	    	res.send({status: true, msg: "n"})
	}
	catch(error){
		res.send({status: false, msg : error})
	}
}


module.exports = {
	getPostsComments,
}
