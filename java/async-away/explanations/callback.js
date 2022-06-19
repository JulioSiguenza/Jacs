
//EJEMPLO EN UN CALLBACK DE UNA LLAMADA A LA BASE DE DATOS PARA PEDIR UN USUARIO, LUEGO SI DEVUELVE EL USUARIO, VER QUE TAREAS TIENE, Y MARCARLA COMO COMPLETADA y guardarla nuevamente en la base)
function requesrHanler(req, res) {
    user.findById(req, res){
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId, function (err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Task Completed');
                        }
                    })
                }
            })
        }
    
}

    
}




//MISMO EJEMPLO PERO CON UNA PROMESA

function requesrHanler(req, req) {
    user.findById(req.userId)
        .then(function (user){
            return Tasks.findById(user.taskId)
        })
        .then(function (tasks) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {
            res.send('Tasks completed');
        })
        .catch(function (errors) {
            res.send(errors);
        })
    
}



//MISMA CON ASYNC AWAIT


async function reuestHandler(req, res) {
    try {
        const user = await User.findById(req.userId);
        const tasks = await Tasks.findById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        res.send('Tasks completed');
        
    } catch (error) {
        res.send(e);
        
    }
}