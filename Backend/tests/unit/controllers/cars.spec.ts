import { should } from 'chai';
var server = require('../../../src/server');
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);


let car = { 
    placa: "BRA2013", //UNIQUE -TEM Q SER DIFERENTE DOS CRIADOS NO BANCO
    chassi: "9BWSU19F09B377711", //UNIQUE- TEM Q SER DIFERENTE DOS CRIADOS NO BANCO
    renavam: "00891352235", //UNIQUE- TEM Q SER DIFERENTE DOS CRIADOS NO BANCO
    marca: "Fiat",
    modelo: "Siena",
    ano: 2008
}


describe('GET/ cars', () => { // the tests container
    it('checking return list car', (done) => { 
        chai.request(server)
        .get('/cars')
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(200);
            res.body.should.be.a('array');
            console.log(res.body)

            done();
        });
    });
});



/*describe('POST/ cars', () => { // the tests container
    it('checking create a new car', (done) => {      
        chai.request(server)
        .post('/cars')
        .send(car)
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('carId'); //somente se tiver conseguido criar o item no banco

            done();
        });
    });

    it("shouldn't create a new car, because it has the same PLACA, CHASSI or RENAVAM", (done) => {
        
        chai.request(server)
        .post('/cars')
        .send(car)
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('code').eql('SQLITE_CONSTRAINT') // Valor único já utilizado
            done();
        });
    });
});*/



/*describe('PUT/:id cars', () => { // the tests container
    it('checking updating info car', (done) => {
        const carId = 16 //id do ultimo carro criado usando as info da varaivel car

        let updateCar = {...car, ano: 2007}

        chai.request(server)
        .put(`/cars/${carId}`)
        .send(updateCar)
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(200);
            res.body.should.be.a('string').eql('Carro Atualizado');

            done();
        });
    });

    
    it('checking if the year changes according to what was passed in the PUT', (done) => {
        const carId = 16 //id do carro atualizado

        chai.request(server)
        .get(`/cars/${carId}`)
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('ano').eql(2007)

            done();
        });
    });
});*/





/*describe('/DELETE/:id cars', () => { // the tests container
    it('checking if the car is being excluded by id', (done) => { 
        const idCar = 16;

        chai.request(server)
        .delete(`/cars/:${idCar}`)
        .end(function(error, res) {
            should().exist(res.body);
            res.should.have.status(200);
            res.body.should.be.a('string').eql('Carro deletado com sucesso');

            done();
        });
    });
});*/


