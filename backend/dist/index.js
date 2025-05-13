"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = 3001;
// Middleware to parse JSON
app.use(express_1.default.json());
// Example API endpoint: Get categories
app.get('/api/categories', (req, res) => {
    db_1.default.all('SELECT * FROM categories', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
