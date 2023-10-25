let myGraph=document.getElementById('myGraph');

let trace1 ={};
trace1.type ="pie";
trace1.title = "機器學習概論";
trace1.labels =[];
trace1.values =[];
trace1.domain = {
    row: 0,
    column: 0
};

for(let x = 0;x <機器學習概論.length; x++)
{
    trace1.labels[x] = 機器學習概論[x]["name"];
    trace1.values[x] = 機器學習概論[x]["count"];
}

let trace2 ={};
trace2.type ="pie";
trace2.title = "資料視覺化";
trace2.labels =[];
trace2.values =[];
trace2.domain = {
    row: 0,
    column: 1
};

for(let x = 0;x <資料視覺化.length; x++)
{
    trace2.labels[x] = 資料視覺化[x]["name"];
    trace2.values[x] = 資料視覺化[x]["count"];
}

let trace3 ={};
trace3.type ="pie";
trace3.title = "人工智慧與永續發展";
trace3.labels =[];
trace3.values =[];
trace3.domain = {
    row: 1,
    column: 0
};

for(let x = 0;x <人工智慧與永續發展.length; x++)
{
    trace3.labels[x] = 人工智慧與永續發展[x]["name"];
    trace3.values[x] = 人工智慧與永續發展[x]["count"];
}

let trace4 ={};
trace4.type ="pie";
trace4.title = "Python程式設計";
trace4.labels =[];
trace4.values =[];
trace4.domain = {
    row: 1,
    column: 1
};

for(let x = 0;x <Python程式設計.length; x++)
{
    trace4.labels[x] = Python程式設計[x]["name"];
    trace4.values[x] = Python程式設計[x]["count"];
}

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
let layout ={
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows: 2,
        columns: 2
    }
};

Plotly.newPlot(myGraph, data, layout);
