Ext.define('FirstApp.view.Home',{
    extend:'Ext.Panel',

    xtype:'home',
    config:{
        title:'Home',
        iconCls:'home',
        /*html:'<h1>Yummy Food App</h1><hr><p>Welcome to Sencha Touch 2 First App by Ankita Mehta</p>',
        style: 'background-color: #FBB117',
        layout:'fit',*/
        scrollable:true,
        styleHtmlContent:true,
        styleHtmlCls:'home',
        items:[

            {
                xtype:'titlebar',
                title:'Home Page',
                docked:'top'
            },
            {
                 xtype:'button',
                 ui:'action',
                 layout:'fit',
                 cls:'home',
                 text:"<h1>Yummy Food App</h1><hr><p>Welcome to Sencha Touch 2 First App by Ankita Mehta</p><img src='resources/images/HomeImage.gif' style='padding:20px;width:250px;height:300px;' />"
                /*xtype: 'image',
                src: 'resources/images/HomeImage.gif',
                flex: 1*/
            },
			{
            xtype: 'toolbar',
            docked: 'bottom',

            defaults: {
                xtype: 'button',
                handler: function() {
                    var container = this.getParent().getParent(),
                        audio = container.down('audio');

                    audio.toggle();
                    this.setText(audio.isPlaying() ? 'Pause Music' : 'Play Music To Dance Now');
                }
            },
            items: [
                { text: 'Play Music To Dance Now', flex: 1 ,
                    badgeText:'Enjoy :)',
                    ui: 'confirm'}

            ]
        },
        {
            xtype : 'audio',
            hidden: true,
            url   : 'resources/Audio/crash.mp3'
        }
 
        ]
    }
})