const Menu = require('../../models/menu')


function homeController () {

    return {
        index(req, res) {

            Menu.find().then(function(makeups){
                
              return res.render('home', { makeups: makeups})
            })
            

        }
    }

}


module.exports = homeController