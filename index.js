import express from 'express';

const app = express();
app.get('/', (req, res) => {
	res.send('Olá, T5! O deploy automágico está funcionando!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
