const re =
  /select|update|delete|truncate|join|union|exec|insert|drop|count|\*|\'|\"|;|>|<|%/g;

module.exports = function judgeIsNull(obj) {
  let flag = false;
  if (obj === null || obj === undefined) return flag;
  if (typeof obj !== "object") {
    //console.log(typeof obj,obj.constructor.name);
    switch (typeof obj) {
      case "string":
        if (obj !== "" && obj.toLowerCase().match(re) === null) {
          //console.log(typeof obj);
          flag = true;
        }
        break;
      case "number":
        if (obj !== NaN && obj !== Infinity) {
          //console.log(typeof obj);
          flag = true;
        }
        break;
    }
  } else {
    //console.log("Object1");
    if (obj.constructor.name === "Array" && obj.length !== 0) {
      //console.log("Array");
      flag = true;
    } else if (
      obj.constructor.name === "Object" &&
      obj !== null &&
      obj !== undefined
    ) {
      //console.log("Object2");
      let tempFlag = true;
      for (let i in obj) {
        if (!judgeIsNull(obj[i])) {
          tempFlag = false;
          break;
        }
      }
      if (tempFlag) {
        flag = true;
      }
    }
  }
  if (!flag) console.log("检测:", obj, " 为:", flag);
  return flag;
};
