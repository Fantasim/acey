/*
import Config from '../config'
import Errors from '../errors'
import Model from './'
import Manager from '../manager'

export default class CookieManager {

    private _m: Model
    private _prevState: any

    constructor(m: Model){
        this._m = m
        this._prevState = undefined
    }

    private _model = () => this._m
    public isActive = (): boolean => Manager.isInitialized() && !Config.isReactNative() && !this._model().is().keyGenerated() && this._model().is().connected() && Manager.cookie() != null

    public getByKey = (key: string) => {
        if (this.isActive()){
            const data = Manager.cookie().getElement(key)
            if (data){
                return Model.ParseStoredJSON(data)
            }
        }
        return undefined
    }
    
    public get = () => this.getByKey(this._model().option().key())

    public prevState = () => this._prevState

    public pull = () => {
        this._throwErrorIfInactive()
        const data = this.get()
        data && this._model().hydrate(data).save()
    }

    public set = (expires = 365) => {
        this._throwErrorIfInactive()
        const key = this._model().option().key()
        try {
            this._prevState = this.getByKey(key)
            Manager.cookie().addElement(key, this._model().to().locallyStorableString(), expires)
        } catch (e) {
            console.log(`error from cookie set with ${this._model().is().collection() ? 'Collection' : 'Model'}: ${key}, ${e}`)
        }
        return this._model().action()
    }

    public remove = () => {
        this._throwErrorIfInactive()
        const key = this._model().option().key()
        try {
            Manager.cookie().removeElement(key) 
        } catch (e){
            console.log(`error from cookie remove with ${this._model().is().collection() ? 'Collection' : 'Model'}: ${key}, ${e}`)
        }
    }

    private _throwErrorIfInactive = () => {
        if (!this.isActive()){
            throw Errors.unauthorizedCookieAdd(this._model())
        }
    }
}

*/