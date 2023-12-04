

export const useLocalStorage = () => {



    const setModalStatus = () => {
        
        // https://developer.school/snippets/react/localstorage-is-not-defined-nextjs 
        // fix do erro not defined

        if (typeof window !== 'undefined') {

            window.localStorage.setItem('hasBeenSeen', 'true')
            return 'sucess'

        }

        return 'não setou'
    }

    const getModalStatus = () => {

        let status
        if (typeof window !== 'undefined') {
            status = window.localStorage.getItem('hasBeenSeen')
            console.log("O status é", status)

            if (status == 'true') {
                return true
            }
        }
        return false
    }

    return {
        setModalStatus, getModalStatus
    }
}