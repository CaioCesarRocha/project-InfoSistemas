import express , { Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from 'celebrate';



import CarsController from '../controllers/CarsController';

const carController = new CarsController();

const carsRoutes = express.Router();


carsRoutes.get('/cars', carController.index)

carsRoutes.get('/cars/:id', carController.show)


carsRoutes.post('/cars',celebrate({  
    body: Joi.object().keys({
        placa: Joi.string().required().length(7),
        chassi: Joi.string().required().length(17),
        renavam: Joi.number().required(),
        modelo: Joi.string().required(),
        marca: Joi.string().required(),
        ano: Joi.number().required()
    })
},{
    abortEarly: false, 
}), 
    carController.create
)


carsRoutes.put('/cars/:id', celebrate({  
    body: Joi.object().keys({
        placa: Joi.string().required().length(7),
        chassi: Joi.string().required().length(17),
        renavam: Joi.number().required(),
        modelo: Joi.string().required(),
        marca: Joi.string().required(),
        ano: Joi.number().required()
    })
},{
    abortEarly: false,
}), 
    carController.update
)


carsRoutes.delete('/cars/:id', carController.delete)



export default carsRoutes;


