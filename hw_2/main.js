let myGraph2=document.getElementById('myGraph2');
let trace1 ={};
trace1.type ="bar";
trace1.name ="0-14歲人口比例";
trace1.x =[];
trace1.y =[];

trace1.x[0] = "中國的人口年齡分布";
trace1.y[0] = 中國的人口[0]['count'];
trace1.x[1] = "日本的人口年齡分布";
trace1.y[1] = 日本的人口[0]['count'];
trace1.x[2] = "南韓的人口年齡分布";
trace1.y[2] = 南韓的人口[0]['count'];
trace1.x[3] = "北韓的人口年齡分布";
trace1.y[3] = 北韓的人口[0]['count'];
trace1.x[4] = "臺灣的人口年齡分布";
trace1.y[4] = 臺灣的人口[0]['count'];

trace1.text = trace1.y;
trace1.textfont = {
    color: 'white',
    size:20
};

let trace2 ={};
trace2.type ="bar";
trace2.name ="15-64歲人口比例";
trace2.x =[];
trace2.y =[];

trace2.x[0] = "中國的人口年齡分布";
trace2.y[0] = 中國的人口[1]['count'];
trace2.x[1] = "日本的人口年齡分布";
trace2.y[1] = 日本的人口[1]['count'];
trace2.x[2] = "南韓的人口年齡分布";
trace2.y[2] = 南韓的人口[1]['count'];
trace2.x[3] = "北韓的人口年齡分布";
trace2.y[3] = 北韓的人口[1]['count'];
trace2.x[4] = "臺灣的人口年齡分布";
trace2.y[4] = 臺灣的人口[1]['count'];

trace2.text = trace2.y;
trace2.textfont = {
    color: 'white',
    size:20
};

let trace3 ={};
trace3.type ="bar";
trace3.name ="64歲以上人口比例";
trace3.x =[];
trace3.y =[];

trace3.x[0] = "中國的人口年齡分布";
trace3.y[0] = 中國的人口[2]['count'];
trace3.x[1] = "日本的人口年齡分布";
trace3.y[1] = 日本的人口[2]['count'];
trace3.x[2] = "南韓的人口年齡分布";
trace3.y[2] = 南韓的人口[2]['count'];
trace3.x[3] = "北韓的人口年齡分布";
trace3.y[3] = 北韓的人口[2]['count'];
trace3.x[4] = "臺灣的人口年齡分布";
trace3.y[4] = 臺灣的人口[2]['count'];

trace3.text = trace3.y;
trace3.textfont = {
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
let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
let layout ={
    margin:{
        t:50
    },
    title:"各國人口年齡分布",
   // barmode:"stack"
};
Plotly.newPlot(myGraph2, data, layout);
