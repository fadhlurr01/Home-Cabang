import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Path to data files
const templatesPath = path.join(__dirname, 'data', 'templates.json');
const branchesPath = path.join(__dirname, 'data', 'branches.json');
const submissionsPath = path.join(__dirname, 'data', 'submissions.json');

// Helper to read JSON
function readJSON(file, fallback = []) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
  return fallback;
}

// Helper to write JSON
function writeJSON(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
    return false;
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'TOYHUB Multi-Branch Toy Store API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET /api/templates
app.get('/api/templates', (req, res) => {
  const templates = readJSON(templatesPath, []);
  res.json({ success: true, count: templates.length, data: templates });
});

// GET /api/branches
app.get('/api/branches', (req, res) => {
  const branches = readJSON(branchesPath, []);
  res.json({ success: true, count: branches.length, data: branches });
});

// POST /api/consultation
app.post('/api/consultation', (req, res) => {
  const { name, company, phone, email, branchCount, needs, notes } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Nama dan nomor WhatsApp wajib diisi.'
    });
  }

  const submissions = readJSON(submissionsPath, []);
  const newSubmission = {
    id: 'TOY-' + Date.now().toString(36).toUpperCase(),
    type: 'consultation',
    name,
    company: company || '-',
    phone,
    email: email || '-',
    branchCount: branchCount || '1-5 Gerai Toko',
    needs: needs || 'Konsultasi Ekosistem Multi-Cabang Mainan',
    notes: notes || '',
    createdAt: new Date().toISOString(),
    status: 'BARU'
  };

  submissions.unshift(newSubmission);
  writeJSON(submissionsPath, submissions);

  return res.status(201).json({
    success: true,
    message: 'Pengajuan konsultasi berhasil diterima. Tim konsultan TOYHUB akan segera menghubungi Anda.',
    referenceId: newSubmission.id
  });
});

// POST /api/brochure
app.post('/api/brochure', (req, res) => {
  const { name, email, phone, company } = req.body;

  if (!email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Email dan nomor WhatsApp wajib diisi untuk mengunduh brosur.'
    });
  }

  const submissions = readJSON(submissionsPath, []);
  const newLead = {
    id: 'BR-TOY-' + Date.now().toString(36).toUpperCase(),
    type: 'brochure_download',
    name: name || 'Tamu Retailer Mainan',
    email,
    phone,
    company: company || '-',
    createdAt: new Date().toISOString(),
    downloadUrl: '/downloads/TOYHUB_MultiBranch_ToyStore_Guide_2026.pdf'
  };

  submissions.unshift(newLead);
  writeJSON(submissionsPath, submissions);

  return res.status(201).json({
    success: true,
    message: 'Panduan Arsitektur Toko Mainan 2026 siap diunduh.',
    downloadUrl: newLead.downloadUrl
  });
});

app.listen(PORT, () => {
  console.log(`[TOYHUB] Toy Store Network API Server running on port ${PORT}`);
});
