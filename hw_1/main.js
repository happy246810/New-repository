let myGraph1=document.getElementById('myGraph1');
let trace1 ={};
trace1.mode ="markers+lines+text";
trace1.type ="scatter";
trace1.name ="中國";
trace1.marker = {
    size:10
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition ="bottom center";
trace1.textfont={
    family:"Raleway, sans-serif",
    size:10
};
for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
    trace1.text[i] =set1[i][2];
}

let trace2 ={};
trace2.mode ="markers+lines+text";
trace2.type ="scatter";
trace2.name ="日本";
trace2.marker = {
    size:10
};
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.textposition ="bottom center";
trace2.textfont={
    family:"Raleway, sans-serif",
    size:10
};
for(let i=0;i<set1.length;i++){
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] =set2[i][2];
}

let trace3 ={};
trace3.mode ="markers+lines+text";
trace3.type = "scatter";
trace3.name ="南韓";
trace3.marker = {
    size:10
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.textposition ="bottom center";
trace3.textfont={
    family:"Raleway, sans-serif",
    size:10
};
for(let i=0;i<set1.length;i++){
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i] =set3[i][2];
}

let trace4 ={};
trace4.mode ="markers+lines+text";
trace4.type = "scatter";
trace4.name ="北韓";
trace4.marker = {
    size:10
};
trace4.x = [];
trace4.y = [];
trace4.text = [];
trace4.textposition ="bottom center";
trace4.textfont={
    family:"Raleway, sans-serif",
    size:10
};
for(let i=0;i<set1.length;i++){
    trace4.x[i] =set4[i][0];
    trace4.y[i] =set4[i][1];
    trace4.text[i] =set4[i][2];
}

let trace5 ={};
trace5.mode ="markers+lines+text";
trace5.type = "scatter";
trace5.name ="臺灣";
trace5.marker = {
    size:10
};
trace5.x = [];
trace5.y = [];
trace5.text = [];
trace5.textposition ="bottom center";
trace5.textfont={
    family:"Raleway, sans-serif",
    size:10
};
for(let i=0;i<set1.length;i++){
    trace5.x[i] =set5[i][0];
    trace5.y[i] =set5[i][1];
    trace5.text[i] =set5[i][2];
}
let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
data.push(trace5);
let layout ={
    margin:{
        t:50
    },
    xaxis:{
        range:[2017.5,2022.5]
    },
    yaxis:{
        range:[0.6,2]
    },
    title:"臺灣周遭各國生育率" ,
    updatemenus:[
        {
        y:1.2,
        x:0.2,
        yanchor:'top',
        buttons:[
            {
                method:'restyle',
                args:['visible',[true, false, false, false, false]],
                label:'中國'
            },
            {
                method:'restyle',
                args:['visible',[false, true, false, false, false]],
                label:'日本'
            },
            {
                method:'restyle',
                args:['visible',[false, false, true, false, false]],
                label:'南韓'
            },
            {
                method:'restyle',
                args:['visible',[false, false, false, true, false]],
                label:'北韓'
            },
            {
                method:'restyle',
                args:['visible',[false, false, false, false, true]],
                label:'臺灣'
            },
            {
                method: 'restyle',args: ['visible', [true, true, true, true, true]],
                label: 'Display All'
            }
                ]
        }
                ]

};
Plotly.newPlot(myGraph1, data, layout);