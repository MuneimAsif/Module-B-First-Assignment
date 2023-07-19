
var company = document.getElementById('company')
var model = document.getElementById('model')

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
