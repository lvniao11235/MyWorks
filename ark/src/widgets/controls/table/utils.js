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
    this.parent = {};
    this.colspan = 0;
    this.rowspan = 0;
    this.index = 0;
}

ColumnModel.extend = function(column){
    var res = new ColumnModel();
    for(var prop in res){
        if(column.hasOwnProperty(prop)){
            if(prop != "children"){
                res[prop] = column[prop];
            } else if(column.children){
                for(var i=0; i<column.children.length; i++){
                    var col = ColumnModel.extend(column.children[i]);
                    col.parent = res;
                    res.children.push(col);
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
    columnCollection.headRows = 
        ColumnCollection.parseRow(columnCollection.columnModels, columnCollection.deep);
    columnCollection.mapColumns = 
        ColumnCollection.getDisplayColumn(columnCollection.columnModels);
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

ColumnCollection.getDisplayColumn = function(columns){
    var res = [];
    for(var i=0; i<columns.length; i++){
        if(columns[i].children.length == 0){
            res.push(columns[i])
        } else {
            var cols = ColumnCollection.getDisplayColumn(columns[i].children);
            for(var j=0; j<cols.length; j++){
                res.push(cols[j]);
            }
        }
    }
    return res;
}
ColumnCollection.parseRow = function(columns, deep){
    var res = [];
    for(var i=0; i<deep; i++){
        if(i == 0){
            var cols = [];
            for(var j=0; j<columns.length; j++){
                cols.push(columns[j]);
            }
            res.push(cols);
        } else {
            cols = [];
            for(j=0; j<res[i-1].length; j++){
                if(res[i-1][j].children && res[i-1][j].children.length > 0){
                    for(var k=0; k<res[i-1][j].children.length; k++){
                        cols.push(res[i-1][j].children[k])
                    }
                }
            }
            res.push(cols);
        }
    }
    for(i=res.length-1; i>=0; i--){
        for(j=0; j<res[i].length; j++){
            if(res[i][j].children.length == 0){
                res[i][j].colspan = 1;
            } else {
                for(k=0; k<res[i][j].children.length; k++){
                    res[i][j].colspan += res[i][j].children[k].colspan;
                }
            }
        }
    }
    for(i=0; i<res.length; i++){
        for(j=0; j<res[i].length; j++){
            if(res[i][j].children.length > 0){
                res[i][j].rowspan = 1;
            } else {
                res[i][j].rowspan = deep - res[i][j].deep - i;
            }
            
        }
    }
    return res;
}

export{
    ColumnModel, ColumnCollection
}