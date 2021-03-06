const aDialog = {
    eventBus:null,
    init:function(eventBus){
        this.eventBus = eventBus;
    },
    wait:function(msg, timeout, callback){
        this.eventBus.$emit("showDialog", {
            type:"wait", 
            msg:msg, 
            timeout:timeout, 
            callback:callback
        });
    },
    closeAll:function(){
        this.eventBus.$emit("hideDialog", {type:"all"});
    },
    close:function(){
        this.eventBus.$emit("hideDialog");
    },
    alert:function(msg, title, callback){
        this.eventBus.$emit("showDialog", {type:"alert", 
            msg:msg, 
            title:title, 
            callback:callback
        });
    },
    confirm:function(msg, title, okCallback, cancelCallback){
        this.eventBus.$emit("showDialog", {type:"confirm", 
            msg:msg, 
            title:title, 
            okCallback:okCallback, 
            cancelCallback:cancelCallback
        });
    },
    datetime:function(datetime, controlType, callback){
        this.eventBus.$emit("showDialog", {type:"datetime", 
            datetime:datetime,
            controlType:controlType,
            callback:callback
        });
    },
    form:function(metaData, callback){
        this.eventBus.$emit("showDialog", {type:"form", 
            metaData:metaData,
            callback:callback
        });
    },
}

export default {
    aDialog
}