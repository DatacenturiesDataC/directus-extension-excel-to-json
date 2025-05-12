import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export default {
	id: 'excel-to-json',
	handler: async (options, { database, env }) => {
		const fileId = options.fileID;
		if (!fileId) throw new Error('fileID is required');

		const fileMeta = await database('directus_files').where({ id: fileId }).first();
		if (!fileMeta) throw new Error('File not found');

		const filenameDisk = fileMeta.filename_disk;

		const allowedExtensions = ['.xlsx', '.xls', '.xlsm', '.csv', '.tsv'];
		const ext = path.extname(filenameDisk).toLowerCase();

		if (!allowedExtensions.includes(ext)) {
			throw new Error(`Unsupported file type: ${ext}.`);
		}

		// Use Directus-configured upload path
		const uploadDir = env.STORAGE_LOCAL_ROOT || './uploads';
		const filePath = path.join(uploadDir, filenameDisk);

		// Read file buffer
		const fileBuffer = await fs.readFile(filePath);
		let workbook = XLSX.read(fileBuffer, { type: 'buffer' });

		// Get first sheet
		const sheetName = workbook.SheetNames[0];
		const worksheet = workbook.Sheets[sheetName];

		// Convert to JSON
		const jsonData = XLSX.utils.sheet_to_json(worksheet);

		return jsonData;
	},
};
