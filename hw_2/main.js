let myGraph2 = document.getElementById('myGraph2');
let hw2_trace1 ={};
hw2_trace1.type ="bar";
hw2_trace1.name ="第一產業（農、林、漁、牧業）";
hw2_trace1.x =[];
hw2_trace1.y =[];

hw2_trace1.x[0] = "中國的職業人口分布";
hw2_trace1.y[0] = 中國的職業人口[0]['count'];
hw2_trace1.x[1] = "日本的職業人口分布";
hw2_trace1.y[1] = 日本的職業人口[0]['count'];
hw2_trace1.x[2] = "南韓的職業人口分布";
hw2_trace1.y[2] = 南韓的職業人口[0]['count'];
hw2_trace1.x[3] = "臺灣的職業人口分布";
hw2_trace1.y[3] = 臺灣的職業人口[0]['count'];

hw2_trace1.text = hw2_trace1.y;
hw2_trace1.textfont = {
    color: 'white',
    size:20
};

let hw2_trace2 ={};
hw2_trace2.type ="bar";
hw2_trace2.name ="第二產業（工業製造業";
hw2_trace2.x =[];
hw2_trace2.y =[];

hw2_trace2.x[0] = "中國的職業人口分布";
hw2_trace2.y[0] = 中國的職業人口[1]['count'];
hw2_trace2.x[1] = "日本的職業人口分布";
hw2_trace2.y[1] = 日本的職業人口[1]['count'];
hw2_trace2.x[2] = "南韓的職業人口分布";
hw2_trace2.y[2] = 南韓的職業人口[1]['count'];
hw2_trace2.x[3] = "臺灣的職業人口分布";
hw2_trace2.y[3] = 臺灣的職業人口[1]['count'];

hw2_trace2.text = hw2_trace2.y;
hw2_trace2.textfont = {
    color: 'white',
    size:20
};

let hw2_trace3 ={};
hw2_trace3.type ="bar";
hw2_trace3.name ="第三產業（服務業）";
hw2_trace3.x =[];
hw2_trace3.y =[];

hw2_trace3.x[0] = "中國的職業人口分布";
hw2_trace3.y[0] = 中國的職業人口[2]['count'];
hw2_trace3.x[1] = "日本的職業人口分布";
hw2_trace3.y[1] = 日本的職業人口[2]['count'];
hw2_trace3.x[2] = "南韓的職業人口分布";
hw2_trace3.y[2] = 南韓的職業人口[2]['count'];
hw2_trace3.x[3] = "臺灣的職業人口分布";
hw2_trace3.y[3] = 臺灣的職業人口[2]['count'];

hw2_trace3.text = hw2_trace3.y;
hw2_trace3.textfont = {
    color: 'white',
    size:20
};
//let trace2 ={};
//trace2.type ="bar";
//trace2.name ="Taoyuan Zoo";
//trace2.x =[];
//trace2.y =[];
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
    //trace2.x[i] =animals_Taoyuan_Zoo[i]['name'];
    //trace2.y[i] =animals_Taoyuan_Zoo[i]['count'];
//}
//let trace1 ={};
//trace1.type ="bar";
//trace1.name ="lion";
//trace1.x = "Taipei Zoo";
//trace1.y = animals_Taipei_Zoo[0]['count'];
//,animals_Taoyuan_Zoo[0]['count'];
//let trace2 ={};
//trace2.type ="bar";
//trace2.name ="Taoyuan Zoo";
//trace2.x =[];
//trace2.y =[];
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
    //trace2.x[i] =animals_Taoyuan_Zoo[i]['name'];
    //trace2.y[i] =animals_Taoyuan_Zoo[i]['count'];
//}
let data2 =[];
data2.push(hw2_trace1);
data2.push(hw2_trace2);
data2.push(hw2_trace3);
let layout2 ={
    margin:{
        t:50
    },
    title:"臺灣鄰國職業人口分布",
    barmode:"stack"
};
Plotly.newPlot(myGraph2, data2, layout2);
