Ext.define('FirstApp.store.Places',{
    extend:'Ext.data.Store',
    config:{
        model:'FirstApp.model.Place',
        data:[
            {
                name:'Contarst',
                icon:'resources/icons/Icon1.gif',
                vicinity:'21, Super Mall 2, Infocity, Gandhinagar - 382007, Contact Number:9824410021'
            },
            {
                name:'Lazzez',
                icon:'resources/icons/Icon2.gif',
                vicinity:'115, Super Mall - 1 Infocity, Gandhinagar - 382009, Contact Number:079-23213324'
            },
            {
                name:'Dominos',
                icon:'resources/icons/Icon3.gif',
                vicinity:'Shop No.1, Haveli Arcade, Plot no.231, Near Fortune Inn Haveli, Sector-11, Gandhinagar - 382011, Contact Number:39843300'
            }
        ]
    }
})


