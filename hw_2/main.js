let myGraph2 = document.getElementById('myGraph2');
let hw2_trace1 ={};
hw2_trace1.type ="bar";
hw2_trace1.name ="惡性腫瘤";
hw2_trace1.x =[];
hw2_trace1.y =[];


hw2_trace1.x[0] = "臺北市";
hw2_trace1.y[0] = 臺北市死因統計[0]['count'];
hw2_trace1.x[1] = "新北市";
hw2_trace1.y[1] = 新北市死因統計[0]['count'];
hw2_trace1.x[2] = "桃園市";
hw2_trace1.y[2] = 桃園市死因統計[0]['count'];
hw2_trace1.x[3] = "臺中市";
hw2_trace1.y[3] = 臺中市死因統計[0]['count'];
hw2_trace1.x[4] = "臺南市";
hw2_trace1.y[4] = 臺南市死因統計[0]['count'];
hw2_trace1.x[5] = "高雄市";
hw2_trace1.y[5] = 高雄市死因統計[0]['count'];

// hw2_trace1.text = hw2_trace1.y;
//hw2_trace1.textposition = "outside";
//hw2_trace1.marker = 
//{
  //  size:1
//}
// hw2_trace1.textfont = {
//     color: 'black',
    size:20 
// };

let hw2_trace2 ={};
hw2_trace2.type ="bar";
hw2_trace2.name ="心臟疾病";
hw2_trace2.x =[];
hw2_trace2.y =[];

hw2_trace2.x[0] = "臺北市";
hw2_trace2.y[0] = 臺北市死因統計[1]['count'];
hw2_trace2.x[1] = "新北市";
hw2_trace2.y[1] = 新北市死因統計[1]['count'];
hw2_trace2.x[2] = "桃園市";
hw2_trace2.y[2] = 桃園市死因統計[1]['count'];
hw2_trace2.x[3] = "臺中市";
hw2_trace2.y[3] = 臺中市死因統計[1]['count'];
hw2_trace2.x[4] = "臺南市";
hw2_trace2.y[4] = 臺南市死因統計[1]['count'];
hw2_trace2.x[5] = "高雄市";
hw2_trace2.y[5] = 高雄市死因統計[1]['count'];

// hw2_trace2.text = hw2_trace2.y;
// hw2_trace2.textfont = {
//     color: 'white',
//     size:20
// };

let hw2_trace3 ={};
hw2_trace3.type ="bar";
hw2_trace3.name ="COVID-19";
hw2_trace3.x =[];
hw2_trace3.y =[];

hw2_trace3.x[0] = "臺北市";
hw2_trace3.y[0] = 臺北市死因統計[2]['count'];
hw2_trace3.x[1] = "新北市";
hw2_trace3.y[1] = 新北市死因統計[2]['count'];
hw2_trace3.x[2] = "桃園市";
hw2_trace3.y[2] = 桃園市死因統計[2]['count'];
hw2_trace3.x[3] = "臺中市";
hw2_trace3.y[3] = 臺中市死因統計[2]['count'];
hw2_trace3.x[4] = "臺南市";
hw2_trace3.y[4] = 臺南市死因統計[2]['count'];
hw2_trace3.x[5] = "高雄市";
hw2_trace3.y[5] = 高雄市死因統計[2]['count'];

// hw2_trace3.text = hw2_trace3.y;

let hw2_trace4 ={};
hw2_trace4.type ="bar";
hw2_trace4.name ="肺炎";
hw2_trace4.x =[];
hw2_trace4.y =[];

hw2_trace4.x[0] = "臺北市";
hw2_trace4.y[0] = 臺北市死因統計[3]['count'];
hw2_trace4.x[1] = "新北市";
hw2_trace4.y[1] = 新北市死因統計[3]['count'];
hw2_trace4.x[2] = "桃園市";
hw2_trace4.y[2] = 桃園市死因統計[3]['count'];
hw2_trace4.x[3] = "臺中市";
hw2_trace4.y[3] = 臺中市死因統計[3]['count'];
hw2_trace4.x[4] = "臺南市";
hw2_trace4.y[4] = 臺南市死因統計[3]['count'];
hw2_trace4.x[5] = "高雄市";
hw2_trace4.y[5] = 高雄市死因統計[3]['count'];

// hw2_trace4.text = hw2_trace4.y;
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
data2.push(hw2_trace4);
let layout2 ={
    margin:{
        t:50
    },
    title:"臺灣六都四大死因",
    barmode:"stack"
};
Plotly.newPlot(myGraph2, data2, layout2);
