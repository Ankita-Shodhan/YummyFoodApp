Ext.define('FirstApp.view.Details',{
    extend:'Ext.Panel',
    xtype:'details',
    config:{
        layout:'fit',
        title:'Details',
        styleHtmlContent:true,
        styleHtmlCls:'details',
        scrollable:true,
        tpl:'<img src="{icon}"></img><h1>{name}</h1> <h3>{vicinity}</h3>',
        items:[
            {
                xtype:'button',
                text:'Add to Favorites',
                iconMask:true,
                iconCls:'star',
                ui:'confirm',
                docked:'top',
                action:'favButton'
            }
        ]
    }
})