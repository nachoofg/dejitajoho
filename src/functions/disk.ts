import { fsSize } from "systeminformation";

export async function disk() {
    return (await fsSize()).map((item) => {
        return {
            total: Math.round(item.size / Math.pow(1024, 3)),
            used: Math.round(item.used / Math.pow(1024, 3)),
            percent: Math.round(item.use)
        }
    })
}