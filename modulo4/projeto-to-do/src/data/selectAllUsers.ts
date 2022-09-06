import  connection  from "../connection"

const selectAllUsers = async () => {

    const result = await connection
            .select("*")
            .from("TodoListUser")

    return result
}

export default selectAllUsers