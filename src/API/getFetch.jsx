export default class getData {
    static async getProd (url) {
        const response = await (await fetch(url)).json();
        return response
    }
}