class UsersController {
    list(req, res){
        console.log('got require for users');

        res.json([]);
    }

    get(req, res){

        const id = Number( req.params.id );

        console.log('got require for one user for id');

        res.json({
            id
        });
    }

    add( req, res){
        const data = req.body;

        console.log('got require for add user', data);

        data.id = Date.now();
        res.json(data);
    }

    update(req, res){
        const data = req.body;

        console.log('got require for update user', data);

        res.json(data);
    }

    delete(req, res){
        const id = Number(req.params.id);

        console.log('got require for update user', id);

        res.json({id});
    }


}

module.exports = new UsersController;