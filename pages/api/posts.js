import {posts} from '../../database/posts.js';
export default function handler(req, res){
	if(req.method==='GET'){
		if(req.query.author){
			const filt= req.query.author;
			let filtePosts=[];
	posts.forEach (( post)=>{
			if(post.author.toLowerCase().includes(filt))
				filtePosts.push(post);
		} );
		res.status(200).json(filtePosts);}
		else if(req.query.category)
		{
	const filt= req.query.category;
			let filtePosts=[];
	posts.forEach (( post)=>{
			if(post.topic.toLowerCase().includes(filt.toLowerCase()))
				filtePosts.push(post);
		
		});
	res.status(200).json(filtePosts);}

		else{
			res.status(200).json(posts);
		}

	}
	if(req.method==='POST'){
		let imgsrc;
		switch(req.body.topic.toLowerCase()){
			case 'bodybuilding':{ imgsrc="/sport.jpg"; break;}
			case 'yoga':{ imgsrc="/post1.jpg"; break;}
			case 'fitness':{ imgsrc="/post2.jpg"; break;}
			default : {imgsrc="/post3.jpg"}
		}
		let d=new Date();
		let dt= `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
		const newPost={
			"postId": Date.now(),
			"author": req.body.author,
			"body": req.body.body,
			"image": imgsrc,
			"postDate": dt,
			"topic": req.body.topic,
			"ratting": req.body.ratting 
		}
		posts.unshift(newPost);
		res.status(201).json(posts);
	}
}