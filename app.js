// var mobiles = {
//     apple:{
//        iphone12:{
//          camera:'48megaPx',
//          ram:'4gb',
//          rom:'64gb'
//        },
//        iphone13:{
//          camera:'48megaPx',
//          ram:'6gb',
//          rom:'128gb'
//        },
//        iphone14:{
//          camera:'48megaPx',
//          ram:'8gb',
//          rom:'256gb'
//        },
//     },
//     samsung:{
//        s6:{
//          camera:'48megaPx',
//          ram:'3gb',
//          rom: '32gb',
//        },
//        s6Edge:{
//          camera:'48megaPx',
//          ram:'4gb',
//          rom: '64gb',
//        },
//        s7:{
//          camera:'48megaPx',
//          ram:'6gb',
//          rom: '128gb',
//        },
//        s7Edge:{
//          camera:'48megaPx',
//          ram:'8gb',
//          rom: '256gb',
//        },
//     },
//     vivo:{
//       y85:{
//          camera:'48megaPx',
//          ram:'6gb',
//          rom:'128gb',
//       },
//       y85A:{
//          camera:'48megaPx',
//          ram:'8gb',
//          rom:'256gb',
//       },
//     },
// }
var div = document.getElementById('div')
var company = document.getElementById('company')
var model = document.getElementById('model')
// function render(){
//   if(mobiles.hasOwnProperty(company.value) && mobiles[company].hasOwnProperty(model.value)){
//      console.log('hello')
// }
// }

var mobileModels = {
  "samsung": {
    "galaxy s21": {"Camera":"45 mega px","RAM":"6gb","ROM":"128gb"},
    "galaxy note 20": {"Camera":"38 mega px","RAM":"6gb","ROM":"128gb"},
    "galaxy a52": {"Camera":"40 mega px","RAM":"8gb","ROM":"256gb"},
  },
  "apple": {
    "iphone 12": {"Camera":"35 mega px","RAM":"4gb","ROM":"64gb"},
    "iphone se": {"Camera":"36 mega px","RAM":"6gb","ROM":"128gb"},
    "iphone 11": {"Camera":"48 mega px","RAM":"8gb","ROM":"256gb"},
  }
};

var company = document.getElementById('company')
var model = document.getElementById('model')
function render(){
if (mobileModels.hasOwnProperty(company.value) && mobileModels[company.value].hasOwnProperty(model.value)) {
  var information = Object.values( mobileModels[company.value][model.value])
  document.write(`Information : ${information}`);
} else {
  alert("Sorry,This model isn't available");
}
}
