// import the data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

// create function to add data to a table
function buildTable(data){

    // clear the current data from the table
    tbody.html("");

    // create a forEach loop to loop through the data array
    data.forEach((dataRow)=>{

        // add row to body as table row
        let row = tbody.append("tr");

        //loop through each object in the data set
        Object.values(dataRow).forEach((val)=>{

            // add each object to it's row in table data
            let cell = row.append("td");

            // add the values of the key:value pair for each object to the cell
            cell.text(val);
            }
        );
    });
}

// create a filter for the table data
function handleClick() {
    // get the datetime value from filter
    let date = d3.select("#datetime").property("value");
    // set the unfiltered data to the table data
    let filteredData=tableData;
    // check to see if date was entered and then filter with that date
    if (date){
        filteredData=filteredData.filter(row=>row.datetime===date);
        // rebuild the table with the filtered data
        // if no date entered, table will have original unfiltered values
        buildTable(filteredData);
    };
};

// listen for the filter click (attaching an event to listen to the button)
d3.selectAll("#filter-btn").on("click",handleClick);

// display the original table when page loads
buildTable(tableData);