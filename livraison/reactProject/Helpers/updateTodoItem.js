//mutation to update the todo item
const API_URL = 'http://graphql.unicaen.fr:4000'
const UPDATE_TODO = `
mutation Mutation($where: TodoWhere, $update: TodoUpdateInput) {
    updateTodos(where: $where, update: $update) {
      todos {
        done
      }
    }
  }`



export async function updateTodo(id,listID,state,token) {
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                query:UPDATE_TODO ,
                variables: {
                    where: {
                    belongsTo: {
                      id: listID
                    },
                    id: id
                  },
                  update: {
                    done: state
                  }
                } 
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.updateTodos
    } catch (error) {
        throw error
    }
  }