import { Model } from '../models/Model.js';
import { View } from './script.js';
import { Controller } from './Controller.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new Controller(new Model(), new View());
});
