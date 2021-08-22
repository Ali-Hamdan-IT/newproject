import {classes} from '../../../database/classes.js';
export default function handler(req, res){
	if(req.method==='GET'){
		res.status(200).json(classes);}
	}