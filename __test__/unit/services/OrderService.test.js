
const Order = require('../../../src/entity/order');
const OrderService = require('../../../src/services/OrderService');
const Model = require('../../../src/repositories/OrderRepository');

describe('OrderService', () => {
    let service;
    beforeEach(() => {
        service = new OrderService(new Model);       
    });

    test('should be able find all orders', async () => {
        const order = await service.save(new Order({name: "Willian", address: "Rua X"}));
        const orders = await service.find();
        expect(order.name).toBe("Willian");
        expect(order.address).toBe("Rua X");
        expect(orders.length).toBe(1)
    });

    it('should be able list all orders', async () => {
        await service.save(new Order({name: "Willian", address: "Rua X"}));
        await service.save(new Order({name: "Willian1", address: "Rua X1"}));
        const orders = await service.find();      
        expect(orders.length).toBe(2)
    });

    it('should be able list order by id', async () => {
        const order = await service.save(new Order({name: "Willian", address: "Rua X"}));
        const orders = await service.findById(order._id);    
        expect(orders).toEqual(order)
    });

    it('should be able delete order by id', async () => {
        const order = await service.save(new Order({name: "Willian", address: "Rua X"}));
        await service.delete(order._id);    
        const orderByID = await service.findById(order._id);
        expect(orderByID).toBeUndefined();
    });

    it('should be able update order', async () => {
        const order = await service.save(new Order({name: "Willian", address: "Rua X"}));
        await service.update(order._id, new Order({name: "Willian UPDATE", address: "X"}));    
        const orderByID = await service.findById(order._id);
        expect(orderByID.name).toBe("Willian UPDATE");
    });
});