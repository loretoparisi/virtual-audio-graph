"use strict";var capitalizeFirst=function(a){return a[0].toUpperCase()+a.slice(1)},namesToParamsKey={delay:"maxDelayTime"};module.exports=function(a,e,t){var r=namesToParamsKey[e],i=r?a["create"+capitalizeFirst(e)](t[r]):a["create"+capitalizeFirst(e)]();return"oscillator"===e&&i.start(),i};