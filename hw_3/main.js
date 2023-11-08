let myGraph3=document.getElementById('myGraph3');

let hw3_trace1 ={};
hw3_trace1.type ="pie";
hw3_trace1.title = "中國的人口年齡分布";
hw3_trace1.labels =[];
hw3_trace1.values =[];
hw3_trace1.hole = 0.5;
hw3_trace1.domain = {
    row: 0,
    column: 0
};

for(let x = 0;x <中國的人口.length; x++)
{
    hw3_trace1.labels[x] = 中國的人口[x]["name"];
    hw3_trace1.values[x] = 中國的人口[x]["count"];
}

let hw3_trace2 ={};
hw3_trace2.type ="pie";
hw3_trace2.title ="日本的人口年齡分布" ;
hw3_trace2.labels =[];
hw3_trace2.values =[];
hw3_trace2.hole = 0.5;
hw3_trace2.domain = {
    row: 0,
    column: 1
};

for(let x = 0;x <日本的人口.length; x++)
{
    hw3_trace2.labels[x] = 日本的人口[x]["name"];
    hw3_trace2.values[x] = 日本的人口[x]["count"];
}

let hw3_trace3 ={};
hw3_trace3.type ="pie";
hw3_trace3.title = "南韓的人口年齡分布";
hw3_trace3.labels =[];
hw3_trace3.values =[];
hw3_trace3.hole = 0.5;
hw3_trace3.domain = {
    row: 1,
    column: 0
};

for(let x = 0;x <南韓的人口.length; x++)
{
    hw3_trace3.labels[x] = 南韓的人口[x]["name"];
    hw3_trace3.values[x] = 南韓的人口[x]["count"];
}

let hw3_trace4 ={};
hw3_trace4.type ="pie";
hw3_trace4.title = "北韓的人口年齡分布";
hw3_trace4.labels =[];
hw3_trace4.values =[];
hw3_trace4.hole = 0.5;
hw3_trace4.domain = {
    row: 1,
    column: 1
};

for(let x = 0;x <北韓的人口.length; x++)
{
    hw3_trace4.labels[x] = 北韓的人口[x]["name"];
    hw3_trace4.values[x] = 北韓的人口[x]["count"];
}

let hw3_trace5 ={};
hw3_trace5.type ="pie";
hw3_trace5.title = "臺灣的人口年齡分布";
hw3_trace5.labels =[];
hw3_trace5.values =[];
hw3_trace5.hole = 0.5;
hw3_trace5.domain = {
    row: 0,
    column:2
};

for(let x = 0;x <臺灣的人口.length; x++)
{
    hw3_trace5.labels[x] = 臺灣的人口[x]["name"];
    hw3_trace5.values[x] = 臺灣的人口[x]["count"];
}

let data3 =[];
data3.push(hw3_trace1);
data3.push(hw3_trace2);
data3.push(hw3_trace3);
data3.push(hw3_trace4);
data3.push(hw3_trace5);
let layout3 ={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows: 2,
        columns: 3
    },
    title:"臺灣鄰國人口年齡分布",
};

Plotly.newPlot(myGraph3, data3, layout3);
