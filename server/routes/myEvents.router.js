var router = require('express').Router();

router.delete('/', function(req, res){
    console.log('router delete req hit with req body:', req.body);
    
});

module.exports = router;