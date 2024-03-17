// Replace 'testdata.csv' with the actual path to your CSV file
const csvPath = 'testdata.csv';
const table = document.getElementById('data-table');

Papa.parse(csvPath, {
  header: true, // Assuming the first row contains headers
  complete: function(results) {
    const data = results.data;
    const headers = results.meta.fields;

    // Create table header row
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const headCell = document.createElement('th');
      headCell.textContent = header;
      headerRow.appendChild(headCell);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    // Create table body rows
    const tableBody = document.createElement('tbody');
    data.forEach(row => {
      const dataRow = document.createElement('tr');
      Object.values(row).forEach(cellValue => {
        const tableCell = document.createElement('td');
        tableCell.textContent = cellValue;
        dataRow.appendChild(tableCell);
      });
      tableBody.appendChild(dataRow);
    });
    table.appendChild(tableBody);
  }
});
