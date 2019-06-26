function format(pattern){
    if(! (pattern instanceof String)){
        throw new TypeError("错误的参数类型");
    }
    var buf = [];
    for(var i=0; i<pattern.length; i++){
        if(pattern[i] == '{'){
            var flag = 0; //1:错误的左括号,2:匹配到对应右括号,3:错误
            var j = 0;
            for(j=i+1; j<pattern.length; j++){
                if(pattern[j] == '{'){
                    flag = 1;
                    break;
                } else if(pattern[j] == '}'){
                    flag = 2;
                    break;
                }
            }
            if(flag == 0){
                buf.push(pattern[i]);
                continue;
            }
            if(flag == 1){
                for(; i<j; i++){
                    buf.push(pattern[i]);
                }
                i--;
            } else if(flag == 2){
                var sub = pattern.substr(i+1, j-i-1);
                var pos = parseInt(sub);
                if(!isNaN(pos) && !isNaN(sub)){
                    if(pos < arguments.length-1 && pos >= 0){
                        buf.push(arguments[pos+1]);
                        i = j;
                    } else {
                        flag = 3;
                    }
                } else if (arguments.length >= 2 && arguments[1].hasOwnProperty(sub)){
                    buf.push(arguments[1][sub]);
                    i = j;
                }
                else {
                    flag = 3;
                }
                if(flag == 3){
                    for(; i<=j; i++){
                        buf.push(pattern[i]);
                    }
                    i--;
                }
            }
        } else {
            buf.push(pattern[i]);
        }
    }
    return buf.join("");
}

function isFunction(data){
    return typeof(data) == "function";
}
function _extends(sour, dest){
    for(var prop in dest){
        if(!isFunction(dest[prop])){
            sour[prop] = dest[prop];
        }
    }
}
