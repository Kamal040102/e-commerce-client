import { toast } from "react-toastify"

const customToast = (content, type = "default") => {
    return toast(content, {
        type: type
    })
}

export default customToast;