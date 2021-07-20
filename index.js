// Your code here
function saturdayFun(activity='roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun('bathe my dog!');
function mondayWork(activity='go to the office'){
return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork("work from home")
function wrapAdjective() {
    let result = wrapAdjective();
    let emphatic = '*a hard worker*';
    return result(`You are ${wrap}${emphatic}${wrap}!`);
}
function wrapAdjective(a="*") {
    return function(b="special") {
      return `You are ${a}${b}${a}!`
    }
}