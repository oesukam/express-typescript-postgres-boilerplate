import app from './app';

const { PORT = 4000 } = process.env;

// Start server
app.listen(PORT, () =>
  console.log(`\nServer is running on http://localhost:${PORT}/api/v1/swagger ...\n`),
);

export default app;
