Ext.define('FirstApp.view.Favorites', {
    extend:'Ext.Panel',
    xtype:'favorites',
    config:{
        title:'Favorites',
        iconCls:'star',
        layout:'fit',
        items:[

            {
                xtype:'list',
                store:'Favorites',
                itemTpl:'<img src="{icon}"></img> <h1>{name:ellipsis(22)}</h1> <h3>{vicinity:ellipsis(30)}</h3>',
                itemCls:'place-entry'

            }
        ]
    }
})