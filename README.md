# 📦 Directus Operation: Excel to JSON

A Directus custom operation that converts Excel (`.xlsx`, `.xls`, `.xlsm`), CSV or TSV files into structured JSON format.

---

![Excel to JSON Operation](https://raw.githubusercontent.com/DatacenturiesDataC/directus-extension-excel-to-json/main/assets/excel-to-json-operation.png)

## ✅ Features

This extension uses the [xlsx package](https://www.npmjs.com/package/xlsx) for parsing Excel and spreadsheet files.

- Converts Excel, CSV, or XML files into formatted JSON
- Supports the following file formats:
  - ✅ `.xlsx` – Excel Workbook
  - ✅ `.xls` – Legacy Excel format
  - ✅ `.xlsm` – Macro-Enabled Workbook
  - ✅ `.csv` – Comma-Separated Values
  - ✅ `.tsv` – Tab-Separated Values
- Validates file type before processing

---

## ⛔ Limitations

> ❗ **This extension currently only supports files stored in local storage.**  
> If you're using S3, Google Cloud Storage, or any other external storage adapter, this operation will **not work as expected**.

---

## 🧩 Planned Features

| Feature                                   | Status     |
| ----------------------------------------- | ---------- |
| Support for cloud storage (S3, GCS, etc.) | 🔜 Planned |
| Support for multiple sheets               | 🔜 Planned |

---

## 📦 Installation

Refer to the [Official Guide](https://docs.directus.io/extensions/installing-extensions.html) for details on installing the extension from the Marketplace or manually.

npm package:

```bash
npm install directus-operation-excel-to-json
```

## ⚙️ Usage

1. Create or edit a flow.
2. Add the `Excel to JSON` operation.
3. Pass the file ID of an uploaded file in the `File ID` input.
4. The output will be a JSON array containing the parsed content of the provided file.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests on GitHub if you'd like to help improve this extension!
