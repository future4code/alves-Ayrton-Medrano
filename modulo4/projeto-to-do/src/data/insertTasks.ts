import  connection  from "../connection"

const insertTasks = async (newTask: any): Promise<any> => {

    await connection
        .insert(newTask)
        .into("TodoListTask")
}

export default insertTasks