//mutation for creating the todolist
const API_URL = 'http://graphql.unicaen.fr:4000'
const CREATE_TODO_LISTS = `
    mutation createTodoLists($input: [TodoListCreateInput!]!) {
    createTodoLists(input: $input) {
      todoLists {
        id
        owner {
          username
        }
        title
      }
    }
  }`



export async function createTodoList(input, token) {
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: CREATE_TODO_LISTS,
                variables: {
                    input : input
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.createTodoLists
    } catch (error) {
        throw error
    }
  }