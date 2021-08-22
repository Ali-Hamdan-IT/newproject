import {classes} from '../../../database/classes.js';
export default function handler(req, res){
	if(req.method==='GET'){
		const id=req.query.classid;
		const data= classes[id-1];
		res.status(200).json(data);
	}

}