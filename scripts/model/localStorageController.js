class LocalStorageController {
    keyList = [];

    constructor() {
        if (localStorage.getItem('keyList') !== null) {
            try {
                this.keyList = JSON.parse(localStorage.getItem('keyList'));
            }
            catch {
                this.keyList = [];
            }
        }
    }

    trySave(key, object) {
        if (!this.keyList.includes(key)) {     
            this.keyList.push(key);

            const sObject = JSON.stringify(object);
            const sKeyList = JSON.stringify(this.keyList);

            localStorage.setItem('keyList', sKeyList);
            localStorage.setItem(key, sObject); 
        }
    }

    tryGet(key) {
        const storedValue = localStorage.getItem(key);

        if (storedValue !== null) {
            return JSON.parse(storedValue);
        }
        return null;
    }

    tryRemove(key) {
        if (this.keyList.includes(key)) {
            const index = this.keyList.indexOf(key);

            if (index > -1) {
                this.keyList.splice(index, 1);
                localStorage.setItem('keyList', JSON.stringify(this.keyList));
                localStorage.removeItem(key);
            }
        }
    }
}

export default LocalStorageController;