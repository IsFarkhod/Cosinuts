import { makeAutoObservable } from "mobx";

export default class UserStore{
    constructor() {
        this._user = {}
        makeAutoObservable(this);
    }

    setUser(user) {
        this._user = user
    }
    get User() {
        return this._user
    }
}