import {Request, Response} from 'express';
//import knex from '../database/connection';
import DatabaseError from '../models/database.error.model';
import {connection, connectionTest} from '../database/connection';


//Alterar a connection para connectionTest para utilizar o banco sqlite(testes)
const knex = connectionTest;

class CarsController{

    async index ( req: Request, res: Response){ 
  
        try{
            const listCars = await knex('cars').select('*')

            return res.status(200).json(listCars)
        }catch(error){
            throw new DatabaseError('Erro ao buscar lista de carros inseridos', error); 
        }
    }



    async show (req: Request, res: Response){ //EXIBIR UM ÚNICO CARRO
        const idCar = req.params.id;
        try{
            const selectedCar = await knex('cars').where('id', idCar).select('*')

            return res.status(200).json(selectedCar[0])
        }catch(error){
            throw new DatabaseError('Erro ao buscar carro selecionado', error); 
        }
    }




    async create (req: Request, res: Response){
        const {
            placa,
            chassi,
            renavam,
            modelo, 
            marca,
            ano
        } = req.body;

        const newCar = {placa, chassi, renavam, modelo, marca, ano}
        
        try {
            let newcarId = await knex('cars').insert(newCar);
            
            let carId = newcarId[0];

            return res.status(200).json({
                carId,
                ...newCar,
            });   
        } catch (error) {    
            return res.status(400).json(error) 
        }
    }


    async update (req: Request, res: Response){
        const idCar = req.params.id;

        const {
            placa,
            chassi,
            renavam,
            modelo, 
            marca,
            ano
        } = req.body;

        try{
            await knex('cars').where('id', idCar).update({
                placa: placa,
                chassi: chassi,
                renavam: renavam,
                modelo: modelo,
                marca: marca,
                ano: ano
            })

            return res.status(200).json('Carro Atualizado')

        }catch(error){
            throw new DatabaseError('Erro ao atualizar o carro selecionado', error); 
        }
    }



    async delete (req: Request, res: Response){
        const idCar = req.params.id;

        try{
            await knex('cars')
            .where('id', idCar)
            .del();

            return res.status(200).json('Carro deletado com sucesso')
        }catch(error){
            throw new DatabaseError('Erro ao deletar o carro selecionado', error); 
        }
    }




}


export default CarsController;