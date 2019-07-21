export default{
    state:{
        longName:'Ark',
        shortName:'A',
        minWidth:760,
        currentSkin:'a-skin-green',
        functions:[
            {id:6, text:"选择皮肤", icon:"fa fa-paint-brush", component:"skin"},
            {id:5, text:"信息列表", icon:"fa fa-envelope", component:"message"},
            {id:4, text:"通知列表", icon:"fa fa-bell", component:"notify"},
            {id:3, text:"任务列表", icon:"fa fa-tasks", component:"task"},
            {id:2, text:"用户信息", icon:"fa fa-user-o", component:"user"},
            {id:1, text:"配置", icon:"fa fa-gears", component:"settings"},
        ],
        currentLeftMenuId:1,
        leftMenu:[
            { id:1, icon:"fa fa-home", text:"主页", url:"/pc/main"}, 
            { id:4, icon:"fa fa-th", text:"布局", url:"/pc/layout"}, 
            {
                id:2, icon:"fa fa-gears", text:"组件", items:[
                    {id:21, icon:"fa fa-bars", text:"表单", url:"/pc/form"},
                    {id:22, icon:"fa fa-table", text:"表格", url:"/pc/table"},
                    {id:23, icon:"fa fa-window-maximize", text:"对话框", url:"/pc/dialog"}
                ]
            }, {
                id:3, icon:"fa fa-edit", text:"编辑器", items:[
                    {id:31, icon:"fa fa-file-text-o", text:"富文本", url:"/pc/richtext"},
                    {id:32, icon:"fa fa-file-code-o", text:"Markdown", url:"/pc/markdown"}
                ]
            }, {
                id:5, icon:"fa fa-bar-chart", text:"图表", url:"/pc/chart"
            },
        ],
        mailUrl:{ id:6, icon:"fa fa-envelope", text:"邮件", url:"/pc/mail"},
        notifyUrl:{ id:7, icon:"fa fa-bell", text:"通知", url:"/pc/notify"},
        taskUrl:{ id:8, icon:"fa fa-tasks", text:"任务", url:"/pc/task"},
        userUrl:{ id:9, icon:"fa fa-user-o", text:"用户信息", url:"/pc/userinfo"},
        firstPage:{ id:1, icon:"fa fa-home", text:"主页", url:"/pc/main"},
        currentTab:{}
    },
    mutations:{
        changeCurrentLeftMenuId(currentState, id){
            currentState.currentLeftMenuId = id;
        },
        changeCurrentTab(currentState, tab){
            currentState.currentTab = tab;
        },
        changeCurrentSkin(currentState, skin){
            currentState.currentSkin = skin;
        }
    }
}