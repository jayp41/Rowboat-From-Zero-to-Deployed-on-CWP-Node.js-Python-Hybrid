const express = require('express');
const { execFile } = require('child_process');
const app = express();
app.use(express.json());

app.post('/run', (req, res) => {
  const task = req.body.task || '';
  // Call Python agent logic
  execFile('python3', ['agent.py', task], (error, stdout, stderr) => {
    if (error) {
      console.error(`Python error: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    console.log(`Python output: ${stdout}`);
    res.json({ reply: stdout.trim() });
  });
});

app.get('/health', (req, res) => res.json({ ok: true });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rowboat agent running on port ${PORT}`));
