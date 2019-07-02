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
}

ColumnModel.extend = function(column){
    var res = new ColumnModel();
    for(var prop in res){
        if(column.hasOwnProperty(prop)){
            if(prop != "children"){
                res[prop] = column[prop];
            } else {
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
    this.hasManyRows = false;
    this.columns = 0;
}

ColumnCollection.parse = function(columns){
    var res = new ColumnCollection();
    for(var i=0; i<columns.length; i++){
        res.columnModels.push(ColumnModel.extend(columns[i]));
    }
    for(i=0; i<res.columnModels.length; i++){
        if(res.columnModels[i].children && res.columnModels[i].children.length > 0){
            res.hasManyRows = true;
            break;
        }
    }
    res.columns = 0;
    for(i=0; i<res.columnModels.length; i++){
        if(res.columnModels[i].children.length == 0){
            res.columns += 1;
            res.mapColumns.push(res.columnModels[i]);
        } else {
            res.columns += res.columnModels[i].children.length;
            res.columnModels[i].children.forEach(x=>res.mapColumns.push(x));
        }
    }
    return res;
}

const ModelWrapper = function(data){
    this.checked = false;
    this.data = data;
}

const ModelWrapperCollection = function(){
    this.modelCollection = [];
}

ModelWrapperCollection.parse = function(data){
    var res = new ModelWrapperCollection();
    for(var d in data){
        res.modelCollection.push(new ModelWrapper(data[d]));
    }
    return res;
}

const defaultOptions = {
    hasIndex:true
}

export{
    ColumnModel, ColumnCollection, defaultOptions, ModelWrapperCollection
}
