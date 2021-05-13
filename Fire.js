import firebase from 'firebase';
import '@firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBEopLwjs9FiVcC4Q0MB4ulvnfpjKiH4F0",
    authDomain: "trelol-b3d24.firebaseapp.com",
    projectId: "trelol-b3d24",
    storageBucket: "trelol-b3d24.appspot.com",
    messagingSenderId: "112426713676",
    appId: "1:112426713676:web:ccd0c6a077dc34d01daae9"
};

export default class Fire {
    constructor(callback){
        this.init(callback);
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        })
    }

    get ref() {
        return firebase.firestore().collection("lists");
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });
            callback(lists);
        }, function(error) {
            console.error(error);
        });
    }

    addList(list) {
        let ref = this.ref;
        ref.add(list);
    }

    deleteList(list) {
        let ref = this.ref;
        ref.doc(list.id).delete();
    }

    updateList(list) {
        let ref = list.ref;
        ref.doc(list.id).update(list);
    }

    detach(){
        this.unsubscribe();
    }
}
