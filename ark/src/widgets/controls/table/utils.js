const ColumnModel = function(){
    this.name = "";
    this.text = "";
    this.width = "";
    this.key = false;
    this.controlType = "text";
    this.show = true;
    this.format = null;
    this.children = [];
    this.isChecked = false;
    this.isOperation = false;
    this.sort = 0;  //0:无序, 1:升序, -1:降序
    this.sortable = false;
    this.deep = 0;
}

ColumnModel.extend = function(column){
    var res = new ColumnModel();
    for(var prop in res){
        if(column.hasOwnProperty(prop)){
            if(prop != "children"){
                res[prop] = column[prop];
            } else if(column.children){
                for(var i=0; i<column.children.length; i++){
                    res.children.push(ColumnModel.extend(column.children[i]));
                }
            }
        }
    }
    return res;
}

const ColumnCollection = function(){
    this.columnModels = [];
    this.mapColumns = [];
    this.headRows = [];
    this.hasChecked = false;
    this.hasIndex = false;
}

ColumnCollection.parse = function(columns){
    var columnCollection = new ColumnCollection();
    for(var i=0; i<columns.length; i++){
        var column = ColumnModel.extend(columns[i]);
        if(columns[i].children && columns[i].children.length > 0){
            column.children = ColumnCollection._parse(columns[i].children);
            var max = 0;
            column.children.forEach(x=>{
                if(x.deep > max){
                    max = x.deep;
                }
            });
            column.deep = max + 1;
        }
        columnCollection.columnModels.push(column);
        max = 0;
        columnCollection.columnModels.forEach(x=>{
            if(x.deep > max){
                max = x.deep;
            }
        });
        columnCollection.deep = max + 1;
    }
    columnCollection.headRows = ColumnCollection.parseRow(columnCollection);
    return columnCollection;
}

ColumnCollection._parse = function(columns){
    var res = [];
    for(var i=0; i<columns.length; i++){
        var column = ColumnModel.extend(columns[i]);
        if(columns[i].children && columns[i].children.length > 0){
            column.children = ColumnCollection._parse(columns[i].children);
            var max = 0;
            column.children.forEach(x=>{
                if(x.deep > max){
                    max = x.deep;
                }
            });
            column.deep = max + 1;
        }
        res.push(column)
    }
    return res;
}
ColumnCollection.parseRow = function(columns, deep){
    var res = [];
    for(var i=0; i<deep; i++){
        var cols = [];
        for(var j=0; j<columns.length; j++){
            cols.push(columns[i]);
        }
        res.push(cols);
    }
    
    return res;
}

ColumnCollection.findColumnByDeep = function(columns, deep){
    var res = [];
    return res;
}


export{
    ColumnModel, ColumnCollection
}