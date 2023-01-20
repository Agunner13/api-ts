import newsServices from "../services/newsServices";
import * as HttpStatus from "http-status";

import httpStatus = require("http-status");

import helper from "../infra/helper";



class NewsController{

    get(req,res){
        
        newsServices.get()
        .then(news => helper.sendResponse(res, HttpStatus.OK,news))
        .catch(error => console.error.bind(console, `ERROR ${error}`));
    }

    getById(req,res){

        const _id = req.params.id;

        newsServices.getById(_id)
        .then(news => helper.sendResponse(res, HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `ERROR ${error}`));

    }

    create(req,res){
        let vm = req.body;
        
        newsServices.create(vm)
        .then(news => helper.sendResponse(res,HttpStatus.OK,"Noticia cadastrada com sucesso"))
        .catch(error => console.error.bind(console,`ERROR ${error}`));
    }

    update(req,res){
        const _id = req.params.id;
        let news = req.body;

        newsServices.update(_id, news)
        .then(news =>
            helper.sendResponse(
                res,
                HttpStatus.OK,
                `${news.title}Foi atualizada com sucesso`

            )
        )
        .catch(error => console.error.bind(console,`ERROR ${error}`));
    }

    delete(req,res) {
        
        const _id = req.params.id;
     
        newsServices.delete(_id)
          .then(() => helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!")
          
          )
          .catch(error => console.error.bind(console, `ERROR ${error}`));
    }

}


export default new NewsController();