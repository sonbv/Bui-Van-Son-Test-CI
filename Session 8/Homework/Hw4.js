console.log('1. In JS, Initialize a variable named timeSheetData to store the data above, log/print it out');
let timeSheetData = [
    ["Learn front-end", "Learn HTML", 6],
    ["Learn front-end", "Learn CSS", 8],
    ["Learn front-end", "Learn JS Variables and Data Types", 6],
    ["Learn git", "Learn git basics", 2]
    ];
$(document).ready(function() {
        $('#example').DataTable( {
            data: timeSheetData,
            columns: [
                { title: "Project" },
                { title: "Task" },
                { title: "Time Spent" },
            ]
        } );
    } );
console.log(timeSheetData);
{/* <table>
<thead>
    <th>Project</th>
    <th>Task</th>
    <th>Time Spent</th>
</thead>
<tbody id="ts_tbody">
  <tr>
    <td>Learn front-end</td>
    <td>Learn HTML</td>
    <td>6</td>
  </tr>
  <tr>
    <td>Learn front-end</td>
    <td>Learn CSS</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Learn front-end</td>
    <td>Learn JS Variables and Data Types</td>
    <td>6</td>
  </tr>
  <tr>
    <td>Learn git</td>
    <td>Learn git basics</td>
    <td>2</td>
  </tr>
</tbody>
</table> */}
console.log('2. In HTML, create a <table> with the same headers as the above timesheet.');
// Làm ở file HTML
console.log('3. Get (Read) the table body from DOM');

console.log('4. Insert ALL of the data in timeSheetData into the table body, each task in a row');

console.log('4.2. The first, placeholder, row now can be removed');

console.log('5. Update the UI (HTML) as follows:');

console.log('6. Perform add new line when ‘Add’ button is clicked (note: Instead of only inserting new HTML into the table body, you should update timeSheetData first, then use timeSheetData to update the table)');

console.log('7. Add new columns name Actions, with each line, add a delete button in the newly added column');

console.log('8. When users click on the delete button, remove the respective line');
