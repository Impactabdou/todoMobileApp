//mutation for creating the todo item
const API_URL = 'http://graphql.unicaen.fr:4000'
const ADD_TODO = `
mutation Mutation($input: [TodoCreateInput!]!) {
    createTodos(input: $input) {
      todos {
        id
      }
    }
  }`



export async function addTodoItem(id,content,token) {
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query: ADD_TODO,
                variables: {
                    input : {
                        belongsTo: {
                          connect: {
                            where: {
                              id: id
                            }
                          }
                        },
                        content: content,
                        done: false
                      }
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.createTodos
    } catch (error) {
        throw error
    }
  }