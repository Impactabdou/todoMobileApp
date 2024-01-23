// mutation for deleting the todolists
const API_URL = 'http://graphql.unicaen.fr:4000'
const DELETE_TODO_LISTS = `
mutation Mutation($where: TodoListWhere) {
    deleteTodoLists(where: $where) {
      nodesDeleted
    }
  }
    `



export async function deleteTodoList(id,token) {
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: DELETE_TODO_LISTS,
                variables: {
                    where : {
                        id : id
                    }
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.deleteTodoLists
    } catch (error) {
        throw error
    }
  }