"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsServices_1 = require("../services/newsServices");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsServices_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `ERROR ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsServices_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `ERROR ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsServices_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso"))
            .catch(error => console.error.bind(console, `ERROR ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsServices_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `${news.title}Foi atualizada com sucesso`))
            .catch(error => console.error.bind(console, `ERROR ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsServices_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `ERROR ${error}`));
    }
}
exports.default = new NewsController();
