//query to get todo items
const API_URL = 'http://graphql.unicaen.fr:4000'
const TODOS_DATA= `
query Query($where: TodoWhere) {
    todos(where: $where) {
      content
      done
      id
    }
  }`

export async function getTodoData(id,token) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: TODOS_DATA,
                variables: {
                    where : {
                        belongsTo: {
                            id: id
                        }
                      }
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null){
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.todos
    } catch (error) {
        throw error
    }
  }