export class View {
    constructor() {
        this.serviceForm = document.getElementById('service-form');
        this.serviceNameInput = document.getElementById('service-name');
        this.servicePriceInput = document.getElementById('service-price');
        this.searchNameInput = document.getElementById('search-name');
        this.searchButton = document.getElementById('search-button');
        this.showAllButton = document.getElementById('show-all-button');
        this.lowestPriceButton = document.getElementById('lowest-price-button');
        this.highestPriceButton = document.getElementById('highest-price-button');
        this.serviceList = document.getElementById('services');
    }

    bindAddService(handler) {
        this.serviceForm.addEventListener('submit', event => {
            event.preventDefault();
            if (this.serviceNameInput.value && this.servicePriceInput.value) {
                handler(this.serviceNameInput.value, parseFloat(this.servicePriceInput.value));
                this.serviceNameInput.value = '';
                this.servicePriceInput.value = '';
            }
        });
    }

    bindSearchService(handler) {
        this.searchButton.addEventListener('click', () => {
            const serviceName = this.searchNameInput.value;
            if (serviceName) {
                handler(serviceName);
            }
        });
    }

    bindShowAllServices(handler) {
        this.showAllButton.addEventListener('click', () => {
            handler();
        });
    }

    bindLowestPriceService(handler) {
        this.lowestPriceButton.addEventListener('click', () => {
            handler();
        });
    }

    bindHighestPriceService(handler) {
        this.highestPriceButton.addEventListener('click', () => {
            handler();
        });
    }

    displayServices(services) {
        this.serviceList.innerHTML = '';
        services.forEach(service => {
            const li = document.createElement('li');
            li.textContent = `${service.serviceName} - $${service.servicePrice}`;
            this.serviceList.appendChild(li);
        });
    }

    displayService(service) {
        this.serviceList.innerHTML = '';
        if (service) {
            const li = document.createElement('li');
            li.textContent = `${service.serviceName} - $${service.servicePrice}`;
            this.serviceList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.textContent = 'Servicio no encontrado';
            this.serviceList.appendChild(li);
        }
    }
}
