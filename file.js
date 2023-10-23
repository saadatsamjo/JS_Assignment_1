
// alert(`length of queries array = ${numberOfQueries}`);
// alert(` markup text = ${RowsMarkUpText}`);

// the query objects array/list
const queries = [
    {id: 1, student: "Genesis", query: "Permission to absent from tech class", status: "APPROVED"},
    {id: 2, student: "Nunya", query: "Permission to Absa Hackathon", status: "APPROVED"},
    {id: 3, student: "Fleeur", query: "Permission to shoot film", status: "DECLINED"},
    {id: 4, student: "Delight", query: "Need some delightful time to cool off", status: "DECLINED"},
    {id: 5, student: "Sila", query: "Permission to participate in Absa Hackathon", status: "PENDING"},
    ]





// appending the rows to rows span
const numberOfQueries = queries.length;
let i = 0;
const rowsBody = document.getElementById("rows-body");

while (i < numberOfQueries) {
    const query = queries[i];

    const row = document.createElement("tr");
row.innerHTML = `
    <td id="student-data-id-${query.id}" class="td student-id">${query.id}</td>
    <td id="student-data-name-${query.id}" class="td">${query.student}</td>
    <td id="student-data-query-${query.id}" class="td">${query.query}</td>
    <td id="student-data-status-${query.id}" class="td">${query.status}</td>
    
    <td id="student-data-status-${query.id}" class="td">
        <button class="approve-button"> <a href="">Approve</a></button>
        <button class="decline-button"> <a href="">Decline</a> </button>
    </td>

`;
rowsBody.appendChild(row);

    
    i = i + 1;
}
