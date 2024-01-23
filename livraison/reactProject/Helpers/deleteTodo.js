//query to delete the todo item
const API_URL = 'http://graphql.unicaen.fr:4000'
const DELETE_TODO = `
mutation Mutation($where: TodoWhere) {
    deleteTodos(where: $where) {
      nodesDeleted
    }
  }`



export async function deleteTodoItem(idTodo , idList , token) {
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: DELETE_TODO,
                variables: {
                    where : {
                        belongsTo: {
                          id: idList
                        },
                        id: idTodo
                      }
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.deleteTodos
    } catch (error) {
        throw error
    }
  }