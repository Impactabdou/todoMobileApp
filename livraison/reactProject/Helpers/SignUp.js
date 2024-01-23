//mutation for sign up
const API_URL = 'http://graphql.unicaen.fr:4000'
const SIGN_UP = `
mutation Mutation($username: String!, $password: String!) {
    signUp(username: $username, password: $password)
}`
export async function signUp(username, password) {

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: SIGN_UP,
                variables: {
                    username: username,
                    password: password
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.signUp
    } catch (error) {
        throw error
    }
  }