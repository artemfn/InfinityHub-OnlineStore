class LocalStorageController {
    keyList = [];

    constructor() {
        if (!localStorage.getItem('keyList') === null) {
            this.keyList = localStorage.getItem('keyList');
        }
    }

    trySave(key, object) {
        if (!this.keyList.includes(key)) {
            this.keyList.push(key);
            localStorage.setItem('keyList', this.keyList);
            const sObject = JSON.stringify(object);
            localStorage.setItem(key, sObject); 
        }
    }

    tryGet(key) {
        if (this.keyList.includes(key)) {
            return JSON.parse(localStorage.getItem(key));
        }

        return null;
    }

    tryRemove(key) {
        if (this.keyList.includes(key)) {
            localStorage.removeItem(key);
        }
    }
}

export default LocalStorageController;