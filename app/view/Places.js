Ext.define('FirstApp.view.Places',{
    extend:'Ext.Panel',
    xtype:'places',

    config:{

        title:'Places',
        iconCls:'maps',
        layout:'fit',
        items:[

           /* {
                xtype:'titlebar',
                title:'Places Listing',
                docked:'top'
            },*/
            {
                xtype:'list',
                store:'Places',
                itemTpl:'<img src="{icon}"></img> <h1>{name:ellipsis(22)}</h1> <h3>{vicinity:ellipsis(30)}</h3>',
                itemCls:'place-entry'
            }
        ]

    }

})