import { Model } from "../models/Model.js";
import { View } from "./script.js";

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Enlazar manejadores de eventos
        this.view.bindAddService(this.handleAddService);
        this.view.bindSearchService(this.handleSearchService);
        this.view.bindShowAllServices(this.handleShowAllServices);
        this.view.bindLowestPriceService(this.handleLowestPriceService);
        this.view.bindHighestPriceService(this.handleHighestPriceService);
    }

    handleAddService = (serviceName, servicePrice) => {
        this.model.addService(serviceName, servicePrice);
        this.handleShowAllServices();
    };

    handleSearchService = (serviceName) => {
        const service = this.model.findService(serviceName);
        this.view.displayService(service);
    };

    handleShowAllServices = () => {
        const services = this.model.getAllServices();
        this.view.displayServices(services);
    };

    handleLowestPriceService = () => {
        const service = this.model.getLowestPriceService();
        this.view.displayService(service);
    };

    handleHighestPriceService = () => {
        const service = this.model.getHighestPriceService();
        this.view.displayService(service);
    };
}
