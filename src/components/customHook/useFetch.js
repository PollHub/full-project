import { useEffect, useState } from "react"

function UseFetch() {
    const [data, setData] = useState()

    useEffect( () => {
        let storages = []
        for(let i = 0; i < localStorage.length; i++) {
            let object = {
                data: JSON.parse(localStorage.getItem(localStorage.key(i)))
            }
            storages.push(object)
        }
        setData(storages)
    }, [])
    return {data}
}

export default UseFetch;