export default {
	id: 'excel-to-json',
	name: 'Excel to JSON',
	description: 'Converts Excel, CSV, or XML files into structured JSON format.',
	icon: 'grid_view',
	overview: ({ fileID }) => [
		{
			label: 'File ID',
			text: fileID,
		},
	],
	options: [
		{
			field: 'fileID',
			name: 'File ID',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				note: 'The ID of the uploaded file. Must be a valid Excel, CSV, or XML file.',
			},
		}
	],
};
