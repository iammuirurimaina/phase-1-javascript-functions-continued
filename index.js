saturdayFun()
function saturdayFun(activity = 'roller-skate') {
    
    return `This Saturday, I want to ${activity}!`

}
(saturdayFun("bathe my dog"))
const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
      return `You are ${flair}${adj}${flair}!`;
    };
}