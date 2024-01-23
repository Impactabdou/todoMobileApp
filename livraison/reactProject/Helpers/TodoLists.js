//query to get the todo lists
const API_URL = 'http://graphql.unicaen.fr:4000'
const TODOS_LISTS= `
query TodoLists($where: TodoListWhere) {
    todoLists(where: $where) {
      id
      title
    }
  }`

export async function getTodoLists(username, token) {

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: TODOS_LISTS,
                variables: {
                    where : {
                        owner: {
                          username: username
                        }
                      }
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null){
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.todoLists
    } catch (error) {
        throw error
    }
  }